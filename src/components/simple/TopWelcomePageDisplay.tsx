import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import PinkLink from '../PinkLink'
import WelcomeLayout from './WelcomeLayout'

function TopWelcomePageDisplay(
  { title, imgSrc, imgAlt, contentTitle, contentBody, href, onClick  }:
  {
    title?: string
    imgSrc?: string
    imgAlt?: string
    contentTitle: string
    contentBody: string
    href: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }
) {
  return (
    <div className='relative h-screen w-full'>
      <WelcomeLayout title={title} titleClass='text-white' layoutClass='bg-abGreen'>
        {
          imgSrc ?
            <Image
              src={imgSrc}
              width='275'
              height='188'
              alt={imgAlt ?? ''}
              className='w-full'
              priority
            /> :
            <></>
        }
      </WelcomeLayout>
      <div className='flex flex-col justify-around p-5 h-[49vh]'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-abGreen text-2xl font-bold'>{ contentTitle }</h3>
          <p className='text-abGrayText text-lg leading-7'>{ contentBody }</p>
        </div>
        <div>
          <PinkLink href={href} onClick={onClick}>
            Continuar <BsArrowRight className='inline-block' />
          </PinkLink>
        </div>
      </div>
    </div>
  )
}

export default TopWelcomePageDisplay
