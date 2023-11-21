'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface Props {
  readonly children: React.ReactNode
}

/**
 * Fornece a Redux store aos componentes descendentes usado o componente `Provider`.
 * @component
 * @param {Object} props - As props do componente.
 * @param {React.ReactNode} props.children - Os elementos filhos que serão envolvidos pela loja Redux.
 * @returns {React.ReactElement} O elemento React que representa o provedor da loja Redux.
 */
export const StoreProvider: React.FC<Props> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)
