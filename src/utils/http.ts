
/**
 * Representa os métodos HTTP suportados.
 */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

/**
 * Representa parâmetros para opções de requisição HTTP.
 */
type OptionsParams<T> = { method: HttpMethod, body?: T }

/**
 * Obtém as opções de requisição para uma requisição HTTP.
 * @param method - O método HTTP.
 * @param body - O corpo da requisição (se aplicável).
 * @returns As opções da requisição.
 */
const getOptions = <B>({ method, body }: OptionsParams<B>): RequestInit => ({
  method,
  body: body ? JSON.stringify(body) : null,
  cache: 'no-store',
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Utilitário para realizar requisições HTTP.
 */
export const http = {
  /**
   * Envia uma requisição HTTP GET.
   * @param path - O caminho da URL.
   * @returns Uma promessa que resolve para os dados da resposta.
   */
  get: async <R>(path: string): Promise<R> => {
    const res = await fetch(
      path,
      getOptions({ method: 'GET' })
    )
    return await res.json() as R
  },

  /**
   * Envia uma requisição HTTP POST.
   * @param path - O caminho da URL.
   * @param body - O corpo da requisição.
   * @returns Uma promessa que resolve para os dados da resposta.
   */
  post: async <B, R>(path: string, body: B): Promise<R> => {
    const res = await fetch(
      path,
      getOptions<B>({ method: 'POST', body })
    )
    return await res.json() as R
  },

  /**
   * Envia uma requisição HTTP PUT.
   * @param path - O caminho da URL.
   * @param body - O corpo da requisição.
   * @returns Uma promessa que resolve para os dados da resposta.
   */
  put: async <B, R>(path: string, body: B): Promise<R> => {
    const res = await fetch(
      path,
      getOptions<B>({ method: 'PUT', body })
    )
    return await res.json() as R
  },

  /**
   * Envia uma requisição HTTP DELETE.
   * @param path - O caminho da URL.
   * @returns Uma promessa que resolve para os dados da resposta.
   */
  delete: async <R>(path: string): Promise<R> => {
    const res = await fetch(
      path,
      getOptions({ method: 'DELETE' })
    )
    return await res.json() as R
  },
}
