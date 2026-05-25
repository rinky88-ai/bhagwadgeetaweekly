const fs = require("fs");
const path = require("path");
const vm = require("vm");

function loadShlokaRowsFromScript() {
  const scriptPath = path.join(process.cwd(), "script.js");
  const source = fs.readFileSync(scriptPath, "utf8");

  const marker = "const landingPage =";
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error("Could not locate shloka data marker in script.js.");
  }

  const snippet = source.slice(0, markerIndex);
  const wrapped = `${snippet}\nmodule.exports = { shlokas, YEAR_CYCLE_WEEKS };`;

  const sandbox = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(wrapped, sandbox, { filename: "script.js" });

  const { shlokas, YEAR_CYCLE_WEEKS } = sandbox.module.exports;
  if (!Array.isArray(shlokas) || shlokas.length !== YEAR_CYCLE_WEEKS) {
    throw new Error(`Expected ${YEAR_CYCLE_WEEKS} rows, found ${Array.isArray(shlokas) ? shlokas.length : 0}.`);
  }

  return shlokas.map((item, index) => ({
    year: 2026,
    weekNumber: index + 1,
    reference: item.reference,
    sanskrit: item.sanskrit,
    transliteration: item.transliteration || {},
    translation: item.meanings || {}
  }));
}

module.exports = { loadShlokaRowsFromScript };
