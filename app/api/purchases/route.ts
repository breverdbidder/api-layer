import { NextRequest } from 'next/server'
import { createServiceClient, getAuthUser, ok, err } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req)
  if (!user) return err('Unauthorized', 401)
  const { searchParams } = new URL(req.url)
  const cursor = searchParams.get('cursor')
  const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100)
  const supabase = createServiceClient()
  let query = supabase
    .from('deal_pipeline')
    .select('*')
    .eq('user_id', user.id)
    .order('saved_date', { ascending: false })
    .limit(limit + 1)
  if (cursor) query = query.lt('saved_date', cursor)
  const { data, error } = await query
  if (error) return err(error.message)
  const hasMore = data.length > limit
  const items = hasMore ? data.slice(0, limit) : data
  const nextCursor = hasMore ? items[items.length - 1].saved_date : null
  return ok({ items, next_cursor: nextCursor, has_more: hasMore })
}
