import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootReducer as reducer } from './rootReducer'

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
