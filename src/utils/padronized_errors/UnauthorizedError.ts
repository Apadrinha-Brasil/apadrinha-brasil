class UnauthorizedError extends Error {
  constructor(mensagem: string) {
    super(mensagem)
    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
}

export const unauthorizedError = new UnauthorizedError('Não Autorizado')
