import { NextRequest } from 'next/server'
import { createServiceClient, getAuthUser, ok, err } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req)
  if (!user) return err('Unauthorized', 401)
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, full_name, subscription_tier, created_at, updated_at')
    .eq('id', user.id)
    .single()
  if (error) return err(error.message, 404)
  return ok(data)
}

export async function PATCH(req: NextRequest) {
  const user = await getAuthUser(req)
  if (!user) return err('Unauthorized', 401)
  const body = await req.json()
  const allowed = { full_name: body.full_name }
  Object.keys(allowed).forEach(k => allowed[k as keyof typeof allowed] === undefined && delete allowed[k as keyof typeof allowed])
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...allowed, updated_at: new Date().toISOString() })
    .eq('id', user.id)
    .select()
    .single()
  if (error) return err(error.message)
  return ok(data)
}
