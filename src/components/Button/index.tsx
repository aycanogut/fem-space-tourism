import { FC } from 'react'

import { IButtonProps } from '../../interfaces/Button.interface'

const Button: FC<IButtonProps> = ({ text, className }) => {
  return <button className={className}>{text}</button>
}

export default Button
