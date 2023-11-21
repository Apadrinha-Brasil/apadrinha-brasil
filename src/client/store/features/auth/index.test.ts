import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import authReducer, { userSelector, login, logout } from './authSlice'
import { UserDto } from '../../../../server/modules/user'
import { RootState } from '../..'

const mockUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@ab.com',
}

describe('authSlice', () => {
  let store: EnhancedStore

  describe('without stored user', () => {
    beforeEach(() => {
      store = configureStore({
        reducer: {
          auth: authReducer
        },
      })
    })

    test('should handle login action', () => {
      const state = store.getState().auth
      expect(state.user).toBeNull()
      store.dispatch(login(mockUser as UserDto))
      const updatedState = store.getState().auth
      expect(updatedState.user).toEqual(mockUser)
    })

    test('userSelector should return user as null', () => {
      const selectedUser = userSelector(store.getState())
      expect(selectedUser).toBeNull()
    })
  })

  describe('with stored user', () => {
    beforeEach(() => {
      const initialState: RootState = {
        auth: {
          user: mockUser as UserDto,
        },
      }
  
      store = configureStore({
        reducer: {
          auth: authReducer,
        },
        preloadedState: initialState,
      })
    })

    test('should handle logout action', () => {
      const state = store.getState().auth
      expect(state.user).toEqual(mockUser)
      store.dispatch(logout())
      const updatedState = store.getState().auth
      expect(updatedState.user).toBeNull()
    })

    test('userSelector should return the stored user', () => {
      const selectedUser = userSelector(store.getState())
      expect(selectedUser).toEqual(mockUser)
    })
  })
})
