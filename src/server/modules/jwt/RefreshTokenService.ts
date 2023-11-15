import { JwtService } from '.'
import { UserSafe, getUserServiceInstance } from '../user'
import { UnauthorizedError } from '@/common/errors'

export class RefreshTokenService {
  static async get(oldToken: string): Promise<string> {
    if (!oldToken) throw new UnauthorizedError('Não Autorizado')

    const { data } = JwtService.decode<{ data: UserSafe }>(oldToken)

    const userService = getUserServiceInstance()
    const user = await userService.findByEmail(data.email)
    if (!user) throw new UnauthorizedError('Não Autorizado')

    return JwtService.encode<UserSafe>(user.values)
  }
}
