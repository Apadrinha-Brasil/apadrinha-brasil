import Image from 'next/image'

function LinearGradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='absolute flex flex-col justify-evenly w-screen h-screen'
      style={{
        backgroundColor: 'rgb(219, 208, 213)', //'rgb(255,174,201)',
        background: 'linear-gradient(90deg, rgba(255,174,201,0.4) 0%, rgba(255,255,255,0.4) 50%, rgba(0,146,61,0.4) 100%)',
      }}
    >
      <div className='w-screen'>
        <Image
          src='/Apadrinha.png'
          width='360'
          height='122'
          alt='Apadrinha'
          className='w-full'
        />
      </div>
      <div className='w-screen'>
        <Image
          src='/drinha.png'
          width='360'
          height='122'
          alt='Apadrinha'
          className='w-full'
        />
      </div>
      <div className='flex justify-center items-center w-screen'>{children}</div>
      <div className='w-screen'>
        <Image
          src='/Brasil2.png'
          width='360'
          height='122'
          alt='Brasil'
          className='ml-4 w-full'
        />
      </div>
      <div className='w-screen'>
        <Image
          src='/Brasil.png'
          width='360'
          height='122'
          alt='Brasil'
          className='w-full'
        />
      </div>
    </div>
  )
}

export default LinearGradientBackground
