import { FC } from 'react'
import Link from 'next/link'
import Transition from '../Transition'
import { IButtonProps } from '../../interfaces/Button.interface'

const Button: FC<IButtonProps> = ({ text }) => {
  return (
    <Transition
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20 md:pt-[148px] lg:pt-72 xxl:pt-[395px]">
        <Link passHref href="https://aycan.dev">
          <a target="_blank">
            <button className="text-bold h-button_sm w-button_sm rounded-full bg-white font-bellefair text-20 font-normal uppercase tracking-tighter text-vulcan transition-all hover:shadow-button md:h-button_md md:w-button_md md:text-32 md:tracking-tight lg:mr-2 lg:h-button_lg lg:w-button_lg">
              {text}
            </button>
          </a>
        </Link>
      </div>
    </Transition>
  )
}

export default Button
