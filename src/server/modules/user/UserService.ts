import { Prisma, PrismaClient, User } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { UserDto } from '.'
import { ArgonService } from '../argon'
import _ from 'lodash'
import { prisma } from '../prisma'

/**
 * Tipo representando um usuário não salvo, sem o campo 'id'.
 */
export type UnsavedUser = Omit<User, 'id'>

/**
 * Tipo representando um usuário seguro, sem o campo 'digest'.
 */
export type UserSafe = Omit<User, 'digest'>

/**
 * Interface que define as operações disponíveis para o UserService.
 */
export interface IUserService extends UserService {}

/**
 * Classe que implementa as operações do serviço de usuário.
 */
class UserService {
  private readonly user: Prisma.UserDelegate<DefaultArgs>

  constructor(prisma: PrismaClient) {
    this.user = prisma.user
  }

  /**
   * Verifica se um endereço de e-mail está disponível para registro.
   *
   * @param email - Endereço de e-mail a ser verificado.
   * @returns Uma Promise que resolve para `true` se o e-mail estiver disponível, senão `false`.
   */
  async isEmailAvailable(email: string): Promise<boolean> {
    const existingUser = await this.findByEmail(email)
    if (existingUser) return false
    return true
  }

  /**
   * Valida as credenciais de um usuário (e-mail e senha).
   *
   * @param email - Endereço de e-mail do usuário.
   * @param password - Senha do usuário.
   * @returns Uma Promise que resolve para um objeto `UserDto` se as credenciais forem válidas, senão `null`.
   */
  async validateUser(email: string, password: string): Promise<UserDto | null> {
    const user = await this.user.findUnique({ where: { email } })
    if (!user) return null

    const isValid = await ArgonService.verify(user.digest, password)
    if (!isValid) return null

    return this.getUserDto(user)
  }

  /**
   * Busca um usuário pelo endereço de e-mail.
   *
   * @param email - Endereço de e-mail do usuário a ser buscado.
   * @returns Uma Promise que resolve para um objeto `UserDto` se o usuário for encontrado, senão `null`.
   */
  async findByEmail(email: string): Promise<UserDto | null> {
    const user = await this.user.findUnique({ where: { email } })
    if (!user) return null
    return this.getUserDto(user)
  }

  /**
   * Cria um novo usuário.
   *
   * @param data - Dados do usuário a serem salvos.
   * @returns Uma Promise que resolve para um objeto `UserDto` representando o usuário criado.
   */
  async create(data: UnsavedUser): Promise<UserDto> {
    const user = await this.user.create({ data })
    return this.getUserDto(user)
  }

  /**
   * Converte um objeto `User` em um objeto `UserDto`, removendo o campo 'digest'.
   *
   * @param user - Objeto `User` a ser convertido.
   * @returns Um objeto `UserDto` representando o usuário.
   */
  private getUserDto(user: User): UserDto {
    return new UserDto(_.omit(user, ['digest']))
  }
}

/**
 * Função que retorna uma instância do serviço de usuário configurada com a instância do cliente Prisma.
 *
 * @returns Uma instância do serviço de usuário.
 */
export const getUserServiceInstance = (): UserService => {
  return new UserService(prisma)
}
