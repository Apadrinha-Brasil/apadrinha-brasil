import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

function PinkLink(
  {
    href,
    children,
    className,
    onClick,
  }: {
    href: string
    children: React.ReactNode
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }) {
  return (
    <button
      // href={href}
      className={
        twMerge(
          'inline-block bg-abPink text-abGreenText text-center text-lg font-medium rounded-full p-3 w-full max-w-sm',
          className
        )
      }
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default PinkLink
