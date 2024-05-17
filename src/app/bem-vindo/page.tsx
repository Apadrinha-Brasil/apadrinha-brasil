'use client'
import TopWelcomePageDisplay from '@/components/simple/TopWelcomePageDisplay'
import { welcomeData } from './welcomeData'
import { useState } from 'react'

function FirstWelcomePage() {
  const displayWelcomeData = welcomeData.filter((data) => data.isActive)

  const [displayDataIndex, setDisplayDataIndex] = useState(0)
  const changeDisplay= () => {
    setDisplayDataIndex(prev => prev === displayWelcomeData.length - 1 ? prev : prev+1)
  }

  return (
    <>
      {
        <TopWelcomePageDisplay
          href='/'
          title={displayWelcomeData[displayDataIndex].title}
          imgSrc={displayWelcomeData[displayDataIndex].imgSrc}
          imgAlt={displayWelcomeData[displayDataIndex].imgAlt}
          contentTitle={displayWelcomeData[displayDataIndex].contentTitle}
          contentBody={displayWelcomeData[displayDataIndex].contentBody}
          onClick={changeDisplay}
        />
      }
    </>
  )
}

export default FirstWelcomePage
