import { Credentials, ErrorResponse } from '@/app/api/v1/auth/login/route'
import { SignupPayload } from '@/app/api/v1/auth/signup/route'
import { PingPayload } from '@/app/api/v1/ping/route'
import { UserDto } from '@/server/modules/user'
import { http } from '@/utils'
import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useMemo, useState } from 'react'

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
  const [user, setUser] = useState<UserDto | null>(null)

  const disabled = useMemo(() => {
    if (isLogin) return !email || !password
    else return !firstName || !lastName || !email || !password
  }, [isLogin, firstName, lastName, email, password])

  const clickHandler = async (): Promise<void> => {
    const data = await http.get<PingPayload>('api/v1/ping')
    if (loggedIn) setSeconds(10)
    console.log(data)
  }

  const submitHandler = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()
    if (isLogin){
      const credentials: Credentials = { email, password }
      const data = await http.post<Credentials, UserDto | ErrorResponse>(
        'api/v1/auth/login',
        credentials
      )
      console.log(data)
      if ('firstName' in data) setUser(data)
      setLogged(true)
    } else {
      const payload: SignupPayload = { firstName, lastName, email, password }
      const data = await http.post<SignupPayload, UserDto>(
        'api/v1/auth/signup',
        payload
      )
      console.log(data)
      if ('firstName' in data) setUser(data)
      setLogged(true)
    }
  }

  useEffect(() => {
    if (seconds === 0) {
      setLogged(false)
      if (user) setUser(null)
    }
  }, [seconds])

  useEffect(() => {
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
        return 0
      })
    }, 1000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [loggedIn])

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
    userFirstName: user ? user.firstName : ''
  }
}
