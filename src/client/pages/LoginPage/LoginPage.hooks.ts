/* eslint-disable no-console */
import { Credentials, ErrorResponse } from '@/app/api/v1/auth/login/route'
import { SignupPayload } from '@/app/api/v1/auth/signup/route'
import { PingPayload } from '@/app/api/v1/ping/route'
import { useAppDispatch } from '@/client/store'
import { login, logout, userSelector } from '@/client/store/features/auth'
import { UserDto } from '@/server/modules/user'
import { http } from '@/utils'
import { Dispatch, SetStateAction, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

type LoginPageHook = {
  readonly isLogin: boolean
  readonly setIsLogin: Dispatch<SetStateAction<boolean>>
  readonly firstName: string
  readonly setFirstName: Dispatch<SetStateAction<string>>
  readonly lastName: string
  readonly setLastName: Dispatch<SetStateAction<string>>
  readonly email: string
  readonly setEmail: Dispatch<SetStateAction<string>>
  readonly password: string
  readonly setPassword: Dispatch<SetStateAction<string>>
  readonly disabled: boolean
  readonly clickHandler: () => Promise<void>
  readonly submitHandler: (e: SyntheticEvent) => Promise<void>
  readonly seconds: number
  readonly loggedIn: boolean
  readonly error: string
  readonly userFirstName: string
}

export const useLoginPage = (): LoginPageHook => {
  const [seconds, setSeconds] = useState(0)
  const [isLogin, setIsLogin] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLogged] = useState(false)
  const [error, setError] = useState('')
  const user = useSelector(userSelector)
  const dispatch = useAppDispatch()

  const disabled = useMemo(() => {
    if (isLogin) return !email || !password
    else return !firstName || !lastName || !email || !password
  }, [isLogin, firstName, lastName, email, password])

  const clickHandler = async (): Promise<void> => {
    const data = await http.get<PingPayload>('api/v1/ping')
    if ('error' in data) {
      if (data.error === 'Não Autorizado') dispatch(logout())
    }
    if (loggedIn) setSeconds(10)
    console.log(data)
  }

  const submitHandler = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()
    setError('')
    if (isLogin){
      const credentials: Credentials = { email, password }
      const data = await http.post<Credentials, UserDto | ErrorResponse>(
        'api/v1/auth/login',
        credentials
      )
      if ('error' in data) {
        setError(data.error as string)
        if (data.error === 'Não Autorizado') dispatch(logout())
        return
      }
      dispatch(login(data))
      setLogged(true)
    } else {
      const payload: SignupPayload = { firstName, lastName, email, password }
      const data = await http.post<SignupPayload, UserDto>(
        'api/v1/auth/signup',
        payload
      )
      if ('error' in data) {
        setError(data.error as string)
        if (data.error === 'Não Autorizado') dispatch(logout())
        return
      }
      dispatch(login(data))
      setLogged(true)
    }
  }

  const setupInterval = useCallback((): (() => void) | undefined => {
    let interval: NodeJS.Timeout | null = null

    if (!loggedIn) {
      if (interval) {
        clearInterval(interval)
      }
      return
    }

    setSeconds(10)

    interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1
        }
        if (interval) clearInterval(interval)
        setLogged(false)
        dispatch(logout())
        return 0
      })
    }, 1000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [dispatch, loggedIn])

  useEffect(() => {
    setupInterval()
  }, [setupInterval])

  return {
    isLogin,
    setIsLogin,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    disabled,
    clickHandler,
    submitHandler,
    seconds,
    loggedIn,
    error,
    userFirstName: user ? user.firstName : ''
  }
}
