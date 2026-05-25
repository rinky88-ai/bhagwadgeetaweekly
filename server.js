const http = require("http");
const fs = require("fs");
const path = require("path");

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const equalsIndex = line.indexOf("=");
    if (equalsIndex <= 0) {
      continue;
    }

    const key = line.slice(0, equalsIndex).trim();
    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) {
      continue;
    }

    let value = line.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith("\"") && value.endsWith("\"")) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

loadDotEnv();

const { prisma } = require("./lib/db");
const { loadShlokaRowsFromScript } = require("./lib/loadShlokas");

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png"
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function serveStatic(req, res) {
  const safePath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(process.cwd(), safePath.replace(/^\/+/, ""));

  if (!filePath.startsWith(process.cwd())) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      sendJson(res, 404, { error: "Not found" });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function parseUrl(req) {
  return new URL(req.url, `http://${req.headers.host || "localhost"}`);
}

function getCurrentCycleWeekNumber() {
  const epoch = new Date("2024-01-01T00:00:00Z");
  const now = new Date();
  const msInWeek = 7 * 24 * 60 * 60 * 1000;
  const YEAR_CYCLE_WEEKS = 52;
  const absoluteWeek = Math.floor((now - epoch) / msInWeek);
  return ((absoluteWeek % YEAR_CYCLE_WEEKS) + YEAR_CYCLE_WEEKS) % YEAR_CYCLE_WEEKS + 1;
}

function buildPrompt(input) {
  return [
    `Reference: ${input.reference}`,
    `Sanskrit: ${input.sanskrit}`,
    `Target transliteration language: ${input.transliterationLanguage}`,
    `Age group: ${input.ageGroup}`
  ].join("\n");
}

async function generateInsight(input) {
  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set.");
  }

  const schema = {
    name: "gita_insight",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        transliteration: { type: "string" },
        explanation: { type: "string" }
      },
      required: ["transliteration", "explanation"]
    }
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: [
            "You are a Bhagavad Gita assistant.",
            "Return valid JSON only.",
            "Task:",
            "1) Provide accurate transliteration of the Sanskrit shloka into the requested transliteration language style.",
            "2) Provide a spiritual explanation suitable for the requested age group.",
            "Keep the explanation specific to the shloka, child-friendly, concrete, and concise."
          ].join(" ")
        },
        {
          role: "user",
          content: buildPrompt(input)
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: schema
      }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("OpenAI response missing content.");
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("OpenAI JSON parse failed.");
  }

  if (!parsed.transliteration || !parsed.explanation) {
    throw new Error("OpenAI JSON missing required fields.");
  }

  return parsed;
}

function normalizeDbSloka(row) {
  return {
    year: row.year,
    week_number: row.weekNumber,
    reference: row.reference,
    sanskrit: row.sanskrit,
    transliteration: row.transliteration || {},
    translation: row.translation || {}
  };
}

const server = http.createServer(async (req, res) => {
  const url = parseUrl(req);

  if (req.method === "POST" && req.url === "/api/gita-insight") {
    try {
      const body = await parseJsonBody(req);
      const required = ["reference", "sanskrit", "transliterationLanguage", "ageGroup"];
      const missing = required.filter((key) => !body[key]);
      if (missing.length) {
        sendJson(res, 400, { error: `Missing required fields: ${missing.join(", ")}` });
        return;
      }

      const result = await generateInsight(body);
      sendJson(res, 200, result);
    } catch (err) {
      sendJson(res, 500, { error: err.message || "Server error" });
    }
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/weekly-shloka") {
    try {
      const requestedYear = Number(url.searchParams.get("year"));
      const requestedWeekNumber = Number(url.searchParams.get("weekNumber"));
      const year = Number.isInteger(requestedYear) && requestedYear > 0 ? requestedYear : 2026;
      const weekNumber =
        Number.isInteger(requestedWeekNumber) && requestedWeekNumber >= 1 && requestedWeekNumber <= 52
          ? requestedWeekNumber
          : getCurrentCycleWeekNumber();

      const row = await prisma.bhagwadgitaSloka.findUnique({
        where: {
          year_week_number: {
            year,
            weekNumber
          }
        }
      });

      if (!row) {
        sendJson(res, 404, { error: `No shloka found for year ${year}, week ${weekNumber}` });
        return;
      }

      sendJson(res, 200, normalizeDbSloka(row));
    } catch (err) {
      sendJson(res, 500, { error: err.message || "Server error" });
    }
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/weekly-shlokas/sync") {
    try {
      const body = await parseJsonBody(req);
      const year = Number.isInteger(Number(body?.year)) ? Number(body.year) : 2026;
      const requestedRows = Array.isArray(body?.shlokas) ? body.shlokas : null;

      const sourceRows = requestedRows?.length
        ? requestedRows.map((item) => ({
            year,
            weekNumber: Number(item.week_number),
            reference: String(item.reference || "").trim(),
            sanskrit: String(item.sanskrit || "").trim(),
            transliteration: item.transliteration || {},
            translation: item.translation || item.meanings || {}
          }))
        : loadShlokaRowsFromScript().map((item) => ({
            ...item,
            year
          }));

      const invalid = sourceRows.find(
        (item) =>
          !Number.isInteger(item.weekNumber) ||
          item.weekNumber < 1 ||
          item.weekNumber > 52 ||
          !item.reference ||
          !item.sanskrit
      );
      if (invalid) {
        sendJson(res, 400, { error: "Each row needs week_number(1-52), reference, and sanskrit." });
        return;
      }

      await prisma.$transaction(
        sourceRows.map((item) =>
          prisma.bhagwadgitaSloka.upsert({
            where: {
              year_week_number: {
                year: item.year,
                weekNumber: item.weekNumber
              }
            },
            update: {
              reference: item.reference,
              sanskrit: item.sanskrit,
              transliteration: item.transliteration,
              translation: item.translation
            },
            create: item
          })
        )
      );

      sendJson(res, 200, { inserted: sourceRows.length, year });
    } catch (err) {
      sendJson(res, 500, { error: err.message || "Server error" });
    }
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/health/db") {
    try {
      await prisma.$queryRaw`SELECT 1`;
      sendJson(res, 200, { ok: true });
    } catch (err) {
      sendJson(res, 500, { ok: false, error: err.message || "Database unavailable" });
    }
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }

  sendJson(res, 405, { error: "Method not allowed" });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

