import * as argon from 'argon2'

export class ArgonService {
  private static readonly DEFAULT_TIME_COST = 10

  static async hash(password: string, timeCost?: number): Promise<string> {
    return await argon.hash(password, {
      timeCost: timeCost || ArgonService.DEFAULT_TIME_COST
    })
  }

  static async verify(hash: string, plain: string | Buffer): Promise<boolean> {
    return await argon.verify(hash, plain)
  }
}
