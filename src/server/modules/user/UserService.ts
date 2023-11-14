import { Prisma, PrismaClient, User } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { UserDto } from '.'
import { ArgonService } from '../argon'
import _ from 'lodash'
import { prisma } from '../prisma'

export type UnsavedUser = Omit<User, 'id'>
export type UserSafe = Omit<User, 'digest'>
export interface IUserService extends UserService {}

class UserService {
  private readonly user: Prisma.UserDelegate<DefaultArgs>

  constructor(prisma: PrismaClient) {
    this.user = prisma.user
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const existingUser = await this.findByEmail(email)
    if (existingUser) return false
    return true
  }

  async validateUser(email: string, password: string): Promise<UserDto | null> {
    const user = await this.user.findUnique({ where: { email } })
    if (!user) return null

    const isValid = await ArgonService.verify(user.digest, password)
    if (!isValid) return null

    return this.getUserDto(user)
  }

  async findByEmail(email: string): Promise<UserDto | null> {
    const user = await this.user.findUnique({ where: { email } })
    if (!user) return null
    return this.getUserDto(user)
  }

  async create(data: UnsavedUser): Promise<UserDto> {
    const user = await this.user.create({ data })
    return this.getUserDto(user)
  }

  private getUserDto(user: User): UserDto {
    return new UserDto(_.omit(user, ['digest']))
  }
}

export const getUserServiceInstance = (): UserService => {
  return new UserService(prisma)
}
