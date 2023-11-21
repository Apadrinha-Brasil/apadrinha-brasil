import * as argon from 'argon2'

export class ArgonService {
  private static readonly DEFAULT_TIME_COST = 10

  /**
   * Criptografa senha.
   *
   * @param password - A senha a ser criptografada.
   * @param timeCost - O custo de tempo para a função de hash (opcional).
   *                  Quanto maior o valor, mais seguro, mas mais lento.
   *
   * @returns Uma Promise que resolve para hash resultante da senha criptografada.
   */
  static async hash(password: string, timeCost?: number): Promise<string> {
    return await argon.hash(password, {
      timeCost: timeCost || ArgonService.DEFAULT_TIME_COST
    })
  }

  /**
   * Verifica se o hash e a senha fornecidos são correspondentes.
   *
   * @param hash - O hash a ser verificado.
   * @param plain - A senha a ser comparado com o hash.
   *
   * @returns Uma Promise que resolve para verdadeiro se o hash corresponder à senha, e falso caso contrário.
   */
  static async verify(hash: string, plain: string): Promise<boolean> {
    return await argon.verify(hash, plain)
  }
}
