/**
 * Representa um erro de não autorização.
 * Esse erro ocorre quando se requisita um recurso protegido sem um usuário estar autenticado.
 */
export class UnauthorizedError extends Error {
  constructor() {
    super('Não Autorizado')
  }
}
