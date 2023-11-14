import { RequestCookie, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

export const ACCESS_TOKEN_KEY = 'accessToken'

export class CookieService {
  static get(key: string): RequestCookie | undefined {
    return cookies().get(key)
  }

  static set<T extends string>(key: string, value: T): ResponseCookies {
    return cookies().set(key, value, { httpOnly: true, sameSite: true, secure: true })
  }

  static remove(key: string): void {
    cookies().delete(key)
  }
}
