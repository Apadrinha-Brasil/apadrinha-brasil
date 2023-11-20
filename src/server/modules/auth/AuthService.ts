import { Credentials } from '@/app/api/v1/auth/login/route'
import { IUserService, UnsavedUser, UserDto, UserSafe, getUserServiceInstance } from '../user'
import { ACCESS_TOKEN_KEY, CookieService } from '../cookie'
import { JwtService } from '../jwt'
import { SignupPayload } from '@/app/api/v1/auth/signup/route'
import { ArgonService } from '../argon'
import { InvalidCredentialsError } from '@/common/errors'
import { UnavailableEmailError } from '@/common/errors/UnavailableEmailError'

/**
 * Serviço de autenticação responsável por lidar com operações de login, cadastro e emissão de tokens.
 */
class AuthService {
  constructor(private readonly userService: IUserService) {}

  /**
   * Realiza o processo de login, validando as credenciais do usuário e emitindo um token de acesso.
   *
   * @param credentials - As credenciais do usuário contendo e-mail e senha.
   * @returns Uma Promise que resolve para um objeto UserDto representando o usuário autenticado.
   * @throws Um erro é lançado se as credenciais forem inválidas.
   */
  async login({ email, password }: Credentials): Promise<UserDto> {
    const user = await this.userService.validateUser(email, password)
    if (!user) throw new InvalidCredentialsError()

    this.issueToken(user.values)

    return user
  }

  /**
   * Realiza o processo de cadastro de um novo usuário, verificando a disponibilidade do e-mail e criando um novo usuário se o e-mail estiver disponível.
   *
   * @param signupPayload - Os dados necessários para cadastrar um novo usuário.
   * @returns Uma Promise que resolve para um objeto UserDto representando o novo usuário cadastrado.
   * @throws Um erro é lançado se o e-mail não estiver disponível.
   */
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

  /**
   * Emite um token de acesso para o usuário e o armazena como um cookie.
   *
   * @param user - O objeto UserSafe representando o usuário para o qual o token está sendo emitido.
   */
  private issueToken(user: UserSafe): void {
    const token = JwtService.encode<UserSafe>(user)
    CookieService.set(ACCESS_TOKEN_KEY, token)
  }
}

/**
 * Obtém uma instância única do AuthService.
 *
 * @returns Uma instância do AuthService.
 */
export const getAuthServiceInstance = (): AuthService => {
  const userService = getUserServiceInstance()
  return new AuthService(userService)
}
