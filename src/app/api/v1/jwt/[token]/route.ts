import { NextRequest, NextResponse } from 'next/server'
import { RefreshTokenService } from '@/server/modules/jwt'

export type JwtCookieSuccess = {
  readonly success: boolean
  readonly refreshedToken: string | null
}

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
