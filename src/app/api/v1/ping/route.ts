import { NextResponse } from 'next/server'

export type PingPayload = { message: string }

/**
 * API endpoint para confirmação de autenticação do usuário.
 * Este endpoint serve como uma maneira de confirmar que o usuário está autenticado,
 * pois é uma rota protegida.
 *
 * @returns Uma resposta JSON contendo uma mensagem de sucesso.
 */
export const GET = (): NextResponse<PingPayload> => {
  return NextResponse.json({ message: 'Success!' })
}
