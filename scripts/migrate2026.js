const { prisma } = require("../lib/db");
const { loadShlokaRowsFromScript } = require("../lib/loadShlokas");

async function migrate2026Rows() {
  const rows = loadShlokaRowsFromScript();

  for (const row of rows) {
    await prisma.bhagwadgitaSloka.upsert({
      where: {
        year_week_number: {
          year: row.year,
          weekNumber: row.weekNumber
        }
      },
      update: {
        reference: row.reference,
        sanskrit: row.sanskrit,
        transliteration: row.transliteration,
        translation: row.translation
      },
      create: row
    });
  }

  console.log(`Upserted ${rows.length} rows for year 2026.`);
}

migrate2026Rows()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });