import { RequestCookie, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

export const ACCESS_TOKEN_KEY = 'accessToken'

/**
 * Serviço para manipulação de cookies, incluindo a leitura, escrita e remoção.
 */
export class CookieService {
  /**
   * Obtém o valor de um cookie específico.
   *
   * @param key - A chave do cookie a ser lido.
   * @returns O cookie correspondente, se existir; caso contrário, undefined.
   */
  static get(key: string): RequestCookie | undefined {
    return cookies().get(key)
  }

  /**
   * Define o valor de um cookie.
   *
   * @param key - A chave do cookie a ser definido.
   * @param value - O valor a ser atribuído ao cookie.
   * @returns Os cabeçalhos de resposta contendo o cookie definido.
   */
  static set<T extends string>(key: string, value: T): ResponseCookies {
    return cookies().set(key, value, { httpOnly: true, sameSite: true, secure: true })
  }

  /**
   * Remove um cookie específico.
   *
   * @param key - A chave do cookie a ser removido.
   */
  static remove(key: string): void {
    cookies().delete(key)
  }
}
