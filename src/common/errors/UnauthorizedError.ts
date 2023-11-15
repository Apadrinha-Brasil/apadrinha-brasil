export class UnauthorizedError extends Error {
  constructor() {
    super('Não Autorizado')
    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
}
