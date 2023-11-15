export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais Inválidas')
    Object.setPrototypeOf(this, InvalidCredentialsError.prototype)
  }
}

