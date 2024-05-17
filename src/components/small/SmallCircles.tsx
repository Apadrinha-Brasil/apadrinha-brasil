import { twMerge } from 'tailwind-merge'

function SmallCircles({ className }: { className?: string }) {
  return (
    <div className={
      twMerge(
        'bg-abGreen text-balance rounded-full min-h-[8px] min-w-[8px]',
        className
      )
    }></div>
  )
}

export default SmallCircles
