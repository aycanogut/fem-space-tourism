import React from 'react'
import IcoMoon from 'react-icomoon'

import iconSet from './selection.json'

interface IIconProps {
  icon: string
  className?: string
  width?: string
  height?: string
  onClick?: () => void
}

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
