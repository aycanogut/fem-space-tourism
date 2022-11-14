import React from 'react'
import IcoMoon from 'react-icomoon'

import iconSet from './selection.json'

interface IIconProps {
  icon: string
  className?: string
  width: string
  height: string
}

const Icon = ({ icon, className, width, height }: IIconProps) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      icon={icon}
      className={className}
      width={width}
      height={height}
    />
  )
}

export default Icon
