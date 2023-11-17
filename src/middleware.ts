import { NextResponse } from 'next/server'
import { http } from './utils'
import { JwtCookieSuccess } from './app/api/v1/jwt/[token]/route'
import { ACCESS_TOKEN_KEY, CookieService } from './server/modules/cookie'
import { UnauthorizedError, errorToObject } from './common/errors'

export async function middleware(): Promise<NextResponse | void> {
  try {
    const token = CookieService.get(ACCESS_TOKEN_KEY)?.value
    if (!token) throw new UnauthorizedError()

    const { success, refreshedToken } = await http.get<JwtCookieSuccess>(`http://localhost:3000/api/v1/jwt/${token}`)
    if (!success || !refreshedToken) throw new UnauthorizedError()

    const response = NextResponse.next()
    response.cookies.set(ACCESS_TOKEN_KEY, refreshedToken, { httpOnly: true })

    return response
  }
  catch (error) {
    return NextResponse.json(errorToObject(error))
  }
}

export const config = {
  matcher: [
    '/api/v1/ping'
  ]
}
