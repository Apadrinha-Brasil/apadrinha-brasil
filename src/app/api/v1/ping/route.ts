import { NextResponse } from 'next/server'

export type PingPayload = { message: string }

export const GET = (): NextResponse<PingPayload> => {
  return NextResponse.json({ message: 'Success!' })
}
