import { NextRequest, NextResponse } from 'next/server'
import { RefreshTokenService } from '@/server/modules/jwt'

export type JwtCookieSuccess = {
  readonly success: boolean
  readonly refreshedToken: string | null
}

/**
 * Endpoint da API para a reemissão de token de acesso.
 * Este endpoint é responsável por validar um token JWT fornecido como parâmetro na URL
 * e, se válido, emitir um novo token JWT, retornando-o na resposta.
 * 
 * @param req - A requisição HTTP.
 * @param param - Parâmetros da URL, contendo o token JWT a ser validado.
 * @returns Uma resposta contendo o status de sucesso, indicando se o novo token foi emitido com êxito,
 *          e o token JWT renovado, se aplicável.
 */
export const GET = async(
  req: NextRequest,
  param: { params: { token: string } }
): Promise<NextResponse<JwtCookieSuccess>> => {
  try {
    const { token } = param.params
    const refreshedToken = await RefreshTokenService.get(token)

    return NextResponse.json({ success: true, refreshedToken }, { status: 200 })
  }
  catch (error) {
    return NextResponse.json({ success: false, refreshedToken: null }, { status: 400 })
  }
}
