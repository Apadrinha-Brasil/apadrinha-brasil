import { Credentials } from '@/app/api/v1/auth/login/route'
import { IUserService, UnsavedUser, UserDto, UserSafe, getUserServiceInstance } from '../user'
import { ACCESS_TOKEN_KEY, CookieService } from '../cookie'
import { JwtService } from '../jwt'
import { SignupPayload } from '@/app/api/v1/auth/signup/route'
import { ArgonService } from '../argon'
import { InvalidCredentialsError } from '@/common/errors'
import { UnavailableEmailError } from '@/common/errors/UnavailableEmailError'

class AuthService {
  constructor(private readonly userService: IUserService) {}

  async login({ email, password }: Credentials): Promise<UserDto> {
    const user = await this.userService.validateUser(email, password)
    if (!user) throw new InvalidCredentialsError()

    this.issueToken(user.values)

    return user
  }

  async signup({ firstName, lastName, email, password }: SignupPayload): Promise<UserDto> {
    const emailAvailable = await this.userService.isEmailAvailable(email)
    if (!emailAvailable) throw new UnavailableEmailError()
    const newUser: UnsavedUser = {
      firstName,
      lastName,
      email,
      digest: await ArgonService.hash(password)
    }

    const user = await this.userService.create(newUser)
    this.issueToken(user.values)

    return user
  }

  private issueToken(user: UserSafe): void {
    const token = JwtService.encode<UserSafe>(user)
    CookieService.set(ACCESS_TOKEN_KEY, token)
  }
}

export const getAuthServiceInstance = (): AuthService => {
  const userService = getUserServiceInstance()
  return new AuthService(userService)
}
