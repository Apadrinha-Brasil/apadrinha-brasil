import { twMerge } from 'tailwind-merge'

function WelcomeLayout(
  {
    title,
    children,
    layoutClass,
    titleClass,
  }: {
    title?: string
    children?: React.ReactNode
    layoutClass?: string
    titleClass?: string
}) {
  return (
    <div className={
      twMerge(
        `relative flex flex-col justify-between bg-abPink rounded-b-4xl p-3 pt-20 pb-0 w-screen h-[49vh]`,
        layoutClass
      )
    }>
      <h2 className={
        twMerge(
          `text-4xl font-bold ml-4`,
          titleClass
        )
      }>
        { title }
      </h2>
      <div className='-mb-3'>
        { children }
      </div>
    </div>
  )
}

export default WelcomeLayout
