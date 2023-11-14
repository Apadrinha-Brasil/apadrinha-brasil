import { NextResponse } from 'next/server'
import { errorToObject, http } from './utils'
import { JwtCookieSuccess } from './app/api/v1/jwt/[token]/route'
import { ACCESS_TOKEN_KEY, CookieService } from './server/modules/cookie'

export async function middleware(): Promise<NextResponse | void> {
  try {
    const error = new Error('Unauthorized')

    const token = CookieService.get(ACCESS_TOKEN_KEY)?.value
    if (!token) throw error

    const { success, refreshedToken } = await http.get<JwtCookieSuccess>(`http://localhost:3000/api/v1/jwt/${token}`)
    if (!success || !refreshedToken) throw error

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
