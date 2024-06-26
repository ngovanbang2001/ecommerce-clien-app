import { ACCESS_TOKEN } from '@/utils/constants'
import { NextResponse, type NextRequest } from 'next/server'

export async  function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN)?.value

  console.log({ token });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
