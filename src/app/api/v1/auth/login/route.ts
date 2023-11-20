import { NextRequest, NextResponse } from 'next/server'
import { UserSafe } from '@/server/modules/user'
import { getAuthServiceInstance } from '@/server/modules/auth'
import { errorToObject } from '@/common/errors'

export type Credentials = {
  readonly email: string
  readonly password: string
}

export type ErrorResponse = { error: unknown }

/**
 * API endpoint para autenticação de usuário por meio de credenciais.
 *
 * @param req - A requisição HTTP.
 * @returns Uma resposta contendo os dados do usuário autenticado ou uma mensagem de erro em caso de falha.
 */
export const POST = async (req: NextRequest): Promise<NextResponse<UserSafe | ErrorResponse>> => {
  try {
    const credentials: Credentials = await req.json()

    const authService = getAuthServiceInstance()
    const user = await authService.login(credentials)

    return NextResponse.json(user.values)
  } catch (error) {
    return NextResponse.json(errorToObject(error))
  }
}
