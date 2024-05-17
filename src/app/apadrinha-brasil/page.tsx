import LinearGradientBackground from '@/components/simple/LinearGradientBackground'
import Image from 'next/image'


function ApadrinhaBrasil() {
  return (
    <LinearGradientBackground>
      <Image
        src='/AB-Logo.png'
        width='226'
        height='111' 
        alt='Apadrinha Brasil'
      />
    </LinearGradientBackground>
  )
}

export default ApadrinhaBrasil
