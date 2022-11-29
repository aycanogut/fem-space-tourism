import { FC } from 'react'

import { IButtonProps } from '../../interfaces/Button.interface'

const Button: FC<IButtonProps> = ({ text }) => {
  return (
    <button className="bold text- hover: b mt-56 h-button_sm w-button_sm rounded-full bg-white font-bellefair text-button font-normal uppercase tracking-tight text-vulcan transition-all hover:shadow-button md:h-button_md md:w-button_md md:text-heading_4 md:tracking-normal lg:h-button_lg lg:w-button_lg ">
      {text}
    </button>
  )
}

export default Button
