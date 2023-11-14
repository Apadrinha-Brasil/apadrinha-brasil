import { useLoginPage } from './LoginPage.hooks'

const LoginPage = () => {
  const {
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
    userFirstName
  } = useLoginPage()

  return (
    <main className='p-6'>
      <h1 className='text-2xl mb-10'>Apadrinha Brasil</h1>
      <form onSubmit={e => submitHandler(e)} className='flex flex-col w-80 gap-2'>
        {
          !isLogin && (
            <>
              <input
                className='px-2 py-1 border border-stone-300 rounded'
                type='text'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder='Primeiro Nome'
              />
              <input
                className='px-2 py-1 border border-stone-300 rounded'
                type='text'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder='Nome de familia'
              />
            </>
          )
        }
        <input
          className='px-2 py-1 border border-stone-300 rounded'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          className='px-2 py-1 border border-stone-300 rounded'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Senha'
        />
        <button
          className={`
            px-3 py-2 border border-stone-300 rounded
            ${disabled ? 'hover:cursor-not-allowed text-gray-400' : 'hover:bg-slate-100'}
          `}
          type='submit'
          disabled={disabled}
        >
          {isLogin ? 'Login' : 'Cadastrar'}
        </button>
        {
          error && (
            <div className="mt-2 font-extrabold text-red-600">
              {error}
            </div>
          )
        }
      </form>
      <button
        className="text-blue-600 my-5 block"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Cadastrar' : 'Login'}
      </button>
      <button
        className='px-3 py-2 border border-stone-300 rounded hover:bg-slate-100 mt-4'
        onClick={() => clickHandler()}
      >
        Testar Login
      </button>

      <div className={`mt-4 font-extrabold ${loggedIn ? 'text-green-500' : 'text-red-600'}`}>
        {loggedIn ? `Logged In (${userFirstName})` : 'Logged Out'}
      </div>
      <div className='mt-4'>
        Tempo restante para logout: {seconds} segundos
      </div>
      <div className='mt-4'>
        <div className='font-bold'>Instruções</div>
        <div>O tempo de validade do JWT token é de 10 segundos para o fim de teste.</div>
        <div>Assim que é feito o cadastro do novo usuário ou um usuário existente faz o login, o usuário tem 10 segundos
          para fazer requisições (clicar no botão e retornar com sucesso) antes que ele seja automaticamente logged out.</div>
        <div>A cada nova requisição o tempo de validade do token é renovado para mais 10 segundos.
          Isso significa que o usuário não será logged out enquanto continuar fazendo requisições dentro do prazo de validade
          do último token emitido.</div>
        <div>Abra o seu console e confira os valores que estão sendo retornados.</div>
        <div className='mt-5'>OBS: se você clicar em &quote;testar Login&quote; muito perto do fim do tempo, ele pode acabar retornando o erro
          de &quote;Unauthorized&quote; e mesmo assim o contador recomeçar porque ele não está em perfeita sincronia com o
          contador do JWT token. Já que essa página é apenas para teste, não quis perder tempo resolvendo isso.</div>
      </div>
    </main>
  )
}

export default LoginPage
