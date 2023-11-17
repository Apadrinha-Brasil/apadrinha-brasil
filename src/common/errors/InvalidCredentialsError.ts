/**
 * Representa um erro de credenciais inválidas.
 * Esso erro ocorre quando as credenciais fornecidas durante o processo de autenticação são inválidas.
 */
export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais Inválidas')
  }
}
