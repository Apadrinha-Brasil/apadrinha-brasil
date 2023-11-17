type ErrorObject = { error: string}

/**
 * Converte um objeto de erro para um objeto estruturado com a propriedade 'error'.
 *
 * @param error - O erro a ser convertido.
 * @param fallbackMessage - Mensagem de fallback para ser usada caso não seja possível extrair uma mensagem de erro.
 * @returns Um objeto estruturado contendo a propriedade 'error'.
 */
export const errorToObject = (error: unknown, fallbackMessage?: string): ErrorObject => {
  if (error instanceof Error) return { error: error.message }
  if (fallbackMessage) return { error: fallbackMessage }
  return { error: String(error) }
}
