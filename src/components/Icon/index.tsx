import React from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from './selection.json'
import { IIconProps } from '../../interfaces/Icon.interface'

const Icon = ({ icon, className, width, height, onClick }: IIconProps) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      icon={icon}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    />
  )
}

export default Icon
