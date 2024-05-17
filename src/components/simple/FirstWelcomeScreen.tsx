import Image from 'next/image'
import PinkLink from '../PinkLink'
import SmallCircles from '../small/SmallCircles'

function FirstWelcomeScreen() {
  return (
    <div className='relative w-screen h-screen'>
      <Image
        src='/Vector1.svg'
        width='275'
        height='188'
        alt='Background blured image'
        className='absolute top-0 left-0 w-full' // w-screen h-screen'
        priority
      />
      <Image
        src='/Vector2.svg'
        width='275'
        height='188'
        alt='Background blured image'
        className='absolute bottom-0 right-0 w-full' // w-screen h-screen'
        priority
      />
      <div>
        <SmallCircles className='absolute top-20 left-12' />
        <SmallCircles className='absolute top-16 left-52' />
        <SmallCircles className='absolute top-24 left-96' />
        <SmallCircles className='absolute top-40 left-64' />
        <SmallCircles className='absolute top-44 left-36' />
        <SmallCircles className='absolute top-56 left-10' />
        <SmallCircles className='absolute bg-abPink top-36 left-20 w-5 h-5' />
        <SmallCircles className='absolute bg-abPink top-24 left-40 w-11 h-11' />
        <SmallCircles className='absolute bg-abPink top-[4.85rem] left-[17rem] w-8 h-8' />
        <SmallCircles className='absolute bg-abPink top-32 left-[21rem] w-5 h-5' />
        <SmallCircles className='absolute bg-abPink top-52 left-[22rem] w-11 h-11' />
      </div>
      <div className='relative flex flex-col justify-center items-center gap-14 text-center w-screen h-screen'>
        <div>
          <Image
            src='/hugging-ab.png'
            width='269'
            height='269'
            alt='Background blured image'
            className='w-full'
            unoptimized={true}
            priority
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-abGreenText text-4xl font-bold'>Apadrinha Brasil</h1>
          <p className='text-abGrayText text-lg font-normal leading-8 w-4/5'>
            Conheça crianças, adolescentes e jovens adultos disponíveis ao apadrinhamento.
          </p>
          <PinkLink href='' className='mt-6'>Começar</PinkLink>
        </div>
      </div>
    </div>
  )
}

export default FirstWelcomeScreen
