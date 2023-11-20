/**
 * Representa um erro de e-mail indisponível.
 * Este erro ocorre quando no cadastro de um novo usuário é usado um e-mail que já estå em uso.
 */
export class UnavailableEmailError extends Error {
  constructor() {
    super('Este e-mail não está disponível')
  }
}
