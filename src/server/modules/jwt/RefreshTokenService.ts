import { JwtService } from '.'
import { UserDto, UserSafe, getUserServiceInstance } from '../user'

export class RefreshTokenService {
  static async get(oldToken: string): Promise<string> {
    const unauthorizedError = new Error('Unauthorized')
    if (!oldToken) throw unauthorizedError

    const { data } = JwtService.decode<{ data: UserSafe }>(oldToken)

    const userService = getUserServiceInstance()
    const user = await userService.findByEmail(data.email) as UserDto
    if (!user) throw unauthorizedError

    return JwtService.encode<UserSafe>(user.values)
  }
}
