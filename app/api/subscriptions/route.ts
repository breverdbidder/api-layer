import { NextRequest } from 'next/server'
import { createServiceClient, getAuthUser, ok, err } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req)
  if (!user) return err('Unauthorized', 401)
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const supabase = createServiceClient()
  let query = supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
  if (status) query = query.eq('status', status)
  const { data, error } = await query
  if (error) return err(error.message)
  return ok(data)
}

export async function PATCH(req: NextRequest) {
  const user = await getAuthUser(req)
  if (!user) return err('Unauthorized', 401)
  const { id } = await req.json()
  if (!id) return err('subscription id required')
  const supabase = createServiceClient()
  const { data: sub } = await supabase.from('subscriptions').select('user_id, status').eq('id', id).single()
  if (!sub || sub.user_id !== user.id) return err('Not found', 404)
  if (sub.status === 'canceled') return err('Subscription already canceled', 400)
  const { data, error } = await supabase
    .from('subscriptions')
    .update({ status: 'canceled', updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  if (error) return err(error.message)
  return ok(data)
}
