import Image from 'next/image'

function Header() {
  return (
    <header className="py-4 flex justify-between">
      <Image
        src="/arrow_back.svg"
        alt="Come back Image"
        width='24'
        height='24'
        priority
      />

      <Image
        src="/header-logo.png"
        alt="Header image"
        width='153'
        height='39'
        priority
      />

      <Image
        src="/menu.svg"
        alt="Menu Image"
        width='24'
        height='24'
        priority
      />
    </header>
  )
}

export default Header