export class UnavailableEmailError extends Error {
  constructor() {
    super('Este e-mail não está disponível')
  }
}
