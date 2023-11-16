import jwt from 'jsonwebtoken'

/**
 * Serviço para codificação e decodificação de tokens JWT.
 */
export class JwtService {
  private static readonly DEFAULT_EXPIRE_TIME = '10s'
  private static readonly JWT_SECRET = process.env.JWT_SECRET as string

  /**
   * Codifica os dados fornecidos em um token JWT.
   *
   * @param data - Os dados a serem codificados no token.
   * @param expireTime - O tempo de expiração do token (opcional). Se não fornecido, o tempo padrão será usado.
   * @returns O token JWT resultante.
   */
  static encode<T>(data: T, expireTime?: string | number): string {
    return jwt.sign(
      { data },
      JwtService.JWT_SECRET,
      { expiresIn: expireTime || JwtService.DEFAULT_EXPIRE_TIME }
    )
  }

  /**
   * Decodifica um token JWT para recuperar os dados originais.
   *
   * @param token - O token JWT a ser decodificado.
   * @returns Os dados decodificados do token.
   */
  static decode<T>(token: string): T {
    return jwt.verify(token, JwtService.JWT_SECRET) as T
  }
}
