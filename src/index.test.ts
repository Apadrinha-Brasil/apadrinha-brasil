// import { PrismaClient } from '@prisma/client'

/*eslint @typescript-eslint/no-var-requires: "off"*/
const { PrismaClient } = require('@prisma/client')

describe('First test', () => {
  const n1 = 3
  const n2 = 7

  describe('user in db', () => {
    const prisma = new PrismaClient()
    /*eslint @typescript-eslint/no-explicit-any: "off"*/
    let user = { email: '', firstName: '', lastName: '' }

    beforeAll(async () => {
      await prisma.$connect()
      user = await prisma.user.create({ data: {
        email: 'a@a.com',
        digest: 'dqoueh34801372fn3807fhr39-eh4f9q3hrfq3r',
        firstName: 'John',
        lastName: 'Doe',
      } })
    })

    afterAll(async () => {
      await prisma.user.deleteMany({})
      await prisma.$disconnect()
    })

    it('user has correct email', () => {
      expect(user).not.toBeNull()
      // const { email } = user as User
      expect(user?.email).toEqual('a@a.com')
    })

    it('user has correct name', () => {
      expect(user).not.toBeNull()
      // const { firstName, lastName } = user as User
      expect(user?.firstName).toEqual('John')
      expect(user?.lastName).toEqual('Doe')
    })
  })

  it ('n1 - n2 = -4', () => {
    expect(n1 - n2).toEqual(-4)
  })

  it ('n1 + n2 = 10', () => {
    expect(n1 + n2).toEqual(10)
  })

  it ('n1 * n2 = 28', () => {
    expect(n1 * n2).toEqual(21)
  })
})
