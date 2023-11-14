import { JwtService } from '.'
import { UserSafe, getUserServiceInstance } from '../user'
import { unauthorizedError } from '@/utils/padronized_errors'

export class RefreshTokenService {
  static async get(oldToken: string): Promise<string> {
    if (!oldToken) throw unauthorizedError

    const { data } = JwtService.decode<{ data: UserSafe }>(oldToken)

    const userService = getUserServiceInstance()
    const user = await userService.findByEmail(data.email)
    if (!user) throw unauthorizedError

    return JwtService.encode<UserSafe>(user.values)
  }
}
