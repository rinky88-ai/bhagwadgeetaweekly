const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
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
        explanation: { type: "string" },
        wisdomMessage: { type: "string" }
      },
      required: ["transliteration", "explanation", "wisdomMessage"]
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
            "3) Provide a short wisdom corner message in the selected transliteration language.",
            "Keep explanation understandable and concise."
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

  if (!parsed.transliteration || !parsed.explanation || !parsed.wisdomMessage) {
    throw new Error("OpenAI JSON missing required fields.");
  }

  return parsed;
}

async function generateSanskritAudio(text) {
  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set.");
  }

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini-tts",
      voice: "alloy",
      input: text,
      response_format: "mp3"
    })
  });

  if (!response.ok) {
    const textBody = await response.text();
    throw new Error(`OpenAI TTS failed: ${response.status} ${textBody}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

const server = http.createServer(async (req, res) => {
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

  if (req.method === "POST" && req.url === "/api/sanskrit-audio") {
    try {
      const body = await parseJsonBody(req);
      const text = String(body?.text || "").trim();
      if (!text) {
        sendJson(res, 400, { error: "Missing required field: text" });
        return;
      }

      const audioBuffer = await generateSanskritAudio(text);
      res.writeHead(200, {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length,
        "Cache-Control": "no-store"
      });
      res.end(audioBuffer);
    } catch (err) {
      sendJson(res, 500, { error: err.message || "Server error" });
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
