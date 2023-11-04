type ErrorObject = { error: string}

export const errorToObject = (error: unknown, fallbackMessage?: string): ErrorObject => {
  if (error instanceof Error) return { error: error.message }
  if (fallbackMessage) return { error: fallbackMessage }
  return { error: String(error) }
}
