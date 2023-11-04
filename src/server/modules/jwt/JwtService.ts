import jwt from 'jsonwebtoken'

export class JwtService {
  private static readonly DEFAULT_EXPIRE_TIME = '10s'
  private static readonly JWT_SECRET = process.env.JWT_SECRET as string

  static encode<T>(data: T, expireTime?: string | number): string {
    return jwt.sign(
      { data },
      JwtService.JWT_SECRET,
      { expiresIn: expireTime || JwtService.DEFAULT_EXPIRE_TIME }
    )
  }

  static decode<T>(token: string): T {
    return jwt.verify(token, JwtService.JWT_SECRET) as T
  }
}
