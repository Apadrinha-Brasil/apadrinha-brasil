export class InvalidCredentialsError extends Error {
  constructor(mensagem: string) {
    super(mensagem)
    Object.setPrototypeOf(this, InvalidCredentialsError.prototype)
  }
}

