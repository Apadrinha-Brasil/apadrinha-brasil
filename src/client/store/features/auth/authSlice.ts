import { UserDto } from '@/server/modules/user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../..'

type AuthState = {
  user: UserDto | null
}

const initialState: AuthState = {
  user: null
}

/**
 * Slice Redux para autenticação.
 * @param {string} name - O nome do slice.
 * @param {AuthState} initialState - O estado inicial do slice.
 * @returns {Object} As ações geradas pelo slice.
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Ação de login que atualiza o estado com as informações do usuário.
     * @param {AuthState} state - O estado atual.
     * @param {PayloadAction<UserDto>} actions - Ação com as informações do usuário.
     */
    login: (state, actions: PayloadAction<UserDto>) => {
      state.user = actions.payload
    },
    /**
     * Ação de logout que redefine o usuário para nulo.
     * @param {AuthState} state - O estado atual.
     */
    logout: (state) => {
      state.user = null
    }
  }
})

/**
 * Seletor para obter o usuário.
 * @param {RootState} state - O estado global da aplicação.
 * @returns {UserDto | null} O usuário armazenado no estado de autenticação.
 */
export const userSelector = (state: RootState): UserDto | null => state.auth.user

export const {
  login,
  logout
} = authSlice.actions
export default authSlice.reducer
