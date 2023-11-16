import { JwtService } from '.'
import { UserSafe, getUserServiceInstance } from '../user'
import { UnauthorizedError } from '@/common/errors'

/**
 * Serviço para gerar um novo token de acesso com base no token de acesso antigo.
 */
export class RefreshTokenService {
  /**
   * Obtém um novo token de acesso com base no token de acesso antigo.
   *
   * @param oldToken - O token de acesso antigo a ser renovado.
   * @returns Uma promessa que resolve para o novo token de acesso.
   * @throws Um erro 'Unauthorized' se o token de acesso antigo for inválido ou não fornecido.
   */
  static async get(oldToken: string): Promise<string> {
    if (!oldToken) throw new UnauthorizedError()

    const { data } = JwtService.decode<{ data: UserSafe }>(oldToken)

    const userService = getUserServiceInstance()
    const user = await userService.findByEmail(data.email)
    if (!user) throw new UnauthorizedError()

    return JwtService.encode<UserSafe>(user.values)
  }
}
