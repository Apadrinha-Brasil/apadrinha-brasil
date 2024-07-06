import { WHO_ARE_YOU_COMPONENT_DATA } from '@/constants/whoAreYouComponentData'
import WelcomeLayout from './WelcomeLayout'

function WhoAreYou() {
  const activeCardTexts = WHO_ARE_YOU_COMPONENT_DATA.filter((data) => data.isActive)

  return (
    <WelcomeLayout title='Diante disso, você é:' titleClass='text-abGreenText pb-16' layoutClass='bg-abPink'>
      <div className='grid grid-cols-2 gap-5 place-items-center pb-5'>
        {
          activeCardTexts.map((card) => (
            <div
              key={ card.text }
              className='bg-white flex justify-center items-center rounded-2xl h-[41vw] min-h-[170px] max-h-[250px] w-[41vw] min-w-[165px] max-w-[250px] shadow-[0px_5px_10px_rgba(0,0,0,0.3)]'
            >
              <p className='text-center text-abGrayText text-sm font-medium leading-5 text-balance px-8 w-full'>
                { card.text }
              </p>
            </div>
          ))
        }
      </div>
    </WelcomeLayout>
  )
}

export default WhoAreYou
