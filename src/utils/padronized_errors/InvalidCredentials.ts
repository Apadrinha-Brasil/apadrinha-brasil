class InvalidCredentials extends Error {
  constructor(mensagem: string) {
    super(mensagem)
    Object.setPrototypeOf(this, InvalidCredentials.prototype)
  }
}

export const invalidCredentials = new InvalidCredentials('Credenciais Inválidas')
