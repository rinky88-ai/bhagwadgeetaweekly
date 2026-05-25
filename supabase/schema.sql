ZSAcreate table if not exists public.weekly_shlokas (
  week_number integer primary key check (week_number between 1 and 52),
  reference text not null,
  sanskrit text not null,
  transliteration jsonb not null default '{}'::jsonb,
  meanings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.weekly_shlokas enable row level security;

create policy "Public read weekly shlokas"
on public.weekly_shlokas
for select
to anon, authenticated
using (true);
