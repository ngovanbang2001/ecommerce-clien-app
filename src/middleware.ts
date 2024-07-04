import { ACCESS_TOKEN } from '@/utils/constants'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'nl']
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const token = request.cookies.get(ACCESS_TOKEN)
  console.log({ token });

  if (pathnameHasLocale) return
  request.nextUrl.pathname = `/${defaultLocale}/${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}