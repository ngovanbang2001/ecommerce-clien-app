import { ACCESS_TOKEN } from '@/utils/constants'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.method)
  const token = request.cookies.get(ACCESS_TOKEN)
  console.log({ token });
  if(token) {

  }
  if (request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.rewrite(new URL('/home', request.url))
  }

  const response = NextResponse.next()
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}