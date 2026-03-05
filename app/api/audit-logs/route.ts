import { NextRequest } from 'next/server'
import { createServiceClient, getAuthUser, ok, err } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req)
  if (!user) return err('Unauthorized', 401)
  const { searchParams } = new URL(req.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const eventType = searchParams.get('event_type')
  const cursor = searchParams.get('cursor')
  const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 200)
  const supabase = createServiceClient()
  let query = supabase
    .from('audit_logs')
    .select('*')
    .eq('user_id', user.id)
    .order('timestamp', { ascending: false })
    .limit(limit + 1)
  if (from) query = query.gte('timestamp', from)
  if (to) query = query.lte('timestamp', to)
  if (eventType) query = query.eq('event_type', eventType)
  if (cursor) query = query.lt('timestamp', cursor)
  const { data, error } = await query
  if (error) return err(error.message)
  const hasMore = data.length > limit
  const items = hasMore ? data.slice(0, limit) : data
  return ok({ items, next_cursor: hasMore ? items[items.length - 1].timestamp : null, has_more: hasMore })
}
