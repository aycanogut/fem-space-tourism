import { FC } from 'react'
import Link from 'next/link'

import { IButtonProps } from '../../interfaces/Button.interface'

const Button: FC<IButtonProps> = ({ text }) => {
  return (
    <Link passHref href="/destination">
      <a>
        <button className="text-bold h-button_sm w-button_sm rounded-full bg-white font-bellefair text-20 font-normal uppercase tracking-tighter text-vulcan transition-all hover:shadow-button md:h-button_md md:w-button_md md:text-32 md:tracking-tight lg:h-button_lg lg:w-button_lg">
          {text}
        </button>
      </a>
    </Link>
  )
}

export default Button
