export class UnauthorizedError extends Error {
  constructor(mensagem: string) {
    super(mensagem)
    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
}
