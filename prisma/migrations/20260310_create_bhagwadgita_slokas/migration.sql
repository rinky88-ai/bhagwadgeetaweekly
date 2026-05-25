CREATE TABLE IF NOT EXISTS public.bhagwadgita_slokas (
  id SERIAL PRIMARY KEY,
  year INTEGER NOT NULL,
  week_number INTEGER NOT NULL,
  reference TEXT NOT NULL,
  sanskrit TEXT NOT NULL,
  transliteration JSONB NOT NULL DEFAULT '{}'::jsonb,
  translation JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT bhagwadgita_week_range CHECK (week_number BETWEEN 1 AND 52),
  CONSTRAINT year_week_number UNIQUE (year, week_number)
);

CREATE INDEX IF NOT EXISTS idx_bhagwadgita_slokas_year_week
  ON public.bhagwadgita_slokas(year, week_number);