import { IoIosArrowRoundDown } from 'react-icons/io'

export const ScrollDown = () => {
  return (
    <div className="pointer-events-none absolute bottom-6 end-6 flex animate-bounce self-end text-og-background lg:bottom-20 lg:end-64">
      {'SCROLL DOWN FOR MORE'}
      <IoIosArrowRoundDown size={23} />
    </div>
  )
}
