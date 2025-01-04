import { protectedRoutes, REFRESH_TOKEN } from '@/utils/constants/common'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'nl']
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get(REFRESH_TOKEN)?.value;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const isProtectRoute = protectedRoutes.some((route) => pathname.includes(route))
  
  if (isProtectRoute && !token) {
    request.nextUrl.pathname = '/auth/sign-in'

    return NextResponse.redirect(request.nextUrl)
  }

  if (pathnameHasLocale) return
  request.nextUrl.pathname = `/${defaultLocale}/${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']
};