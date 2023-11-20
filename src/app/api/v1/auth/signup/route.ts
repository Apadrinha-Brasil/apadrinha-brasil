import { NextRequest, NextResponse } from 'next/server'
import { UserSafe } from '@/server/modules/user'
import { getAuthServiceInstance } from '@/server/modules/auth'
import { errorToObject } from '@/common/errors'

export type SignupPayload = {
  readonly firstName: string
  readonly lastName: string
  readonly email: string
  readonly password: string
}

/**
 * API endpoint para registro de novos usuários.
 *
 * @param req - A requisição HTTP.
 * @returns Uma resposta contendo os dados do novo usuário registrado ou uma mensagem de erro em caso de falha.
 */
export const POST = async (req: NextRequest): Promise<NextResponse<UserSafe | unknown>> => {
  try {
    const signupPayload: SignupPayload = await req.json()

    const authService = getAuthServiceInstance()
    const newUser = await authService.signup(signupPayload)

    return NextResponse.json(newUser.values)
  }
  catch (error) {
    return NextResponse.json(errorToObject(error))
  }
}
