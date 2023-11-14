type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type OptionsParams<T> = { method: HttpMethod, body?: T }

const getOptions = <B>({ method, body }: OptionsParams<B>): RequestInit => ({
  method,
  body: body ? JSON.stringify(body) : null,
  cache: 'no-store',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const http = {
  get: async <R>(path: string): Promise<R> => {
    const res = await fetch(
      path,
      getOptions({ method: 'GET' })
    )
    return await res.json() as R
  },
  post: async <B, R>(path: string, body: B): Promise<R> => {
    const res = await fetch(
      path,
      getOptions<B>({ method: 'POST', body })
    )
    return await res.json() as R
  },
  put: async <B, R>(path: string, body: B): Promise<R> => {
    const res = await fetch(
      path,
      getOptions<B>({ method: 'PUT', body })
    )
    return await res.json() as R
  },
  delete: async <R>(path: string): Promise<R> => {
    const res = await fetch(
      path,
      getOptions({ method: 'DELETE' })
    )
    return await res.json() as R
  },
}
