# api-layer

BidDeed.AI / ZoneWise API layer — Next.js App Router with Supabase Auth JWT.

## Routes
- `GET/PATCH /api/users` — profile
- `GET/PATCH /api/subscriptions` — subscription management
- `GET /api/purchases` — deal pipeline (cursor paginated)
- `GET /api/audit-logs` — audit trail (cursor paginated)

## Types
`lib/supabase/database.types.ts` is auto-generated from live schema:
```bash
SUPABASE_ACCESS_TOKEN=... npx supabase gen types typescript --project-id mocerqjnksmhcjzxrewo --schema public > lib/supabase/database.types.ts
```

## Env
```
NEXT_PUBLIC_SUPABASE_URL=https://mocerqjnksmhcjzxrewo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```
