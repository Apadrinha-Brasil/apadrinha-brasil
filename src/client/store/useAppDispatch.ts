import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'

/**
 * Um hook personalizado que retorna a função de dispatch específica da aplicação do Redux.
 * @returns {AppDispatch} A função de dispatch específica da aplicação.
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
