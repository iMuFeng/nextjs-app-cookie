import { NextResponse } from "next/server"
import { serializeCookie } from '@supabase/auth-helpers-shared'

export default async function () {
  const res = NextResponse.next()

  // https://github.com/supabase/auth-helpers/blob/d33aa1b96b5d1b9684ae7fc50ecd86c24d6c066c/packages/nextjs/src/middlewareClient.ts#L48
  const newSessionStr = serializeCookie('middleware', 'next-' + Date.now(), {
    path: '/',
    httpOnly: false
  })

  res.headers.append('set-cookie', newSessionStr)
  res.headers.append('cookie', newSessionStr)

  return res
}
