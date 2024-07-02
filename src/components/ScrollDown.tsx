import { IoIosArrowRoundDown } from 'react-icons/io'

export const ScrollDown = () => {
  return (
    <div className="pointer-events-none absolute bottom-6 end-6 flex animate-bounce items-center self-end text-xs text-og-text lg:bottom-20 lg:end-40 lg:text-base 2xl:end-64">
      {'SCROLL DOWN FOR MORE'}
      <IoIosArrowRoundDown size={25} />
    </div>
  )
}
