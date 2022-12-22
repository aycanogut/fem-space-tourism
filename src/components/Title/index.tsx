import React, { FC } from 'react'

import { ITitleProps } from '../../interfaces/Title.interface'

const Title: FC<ITitleProps> = ({ id, title }) => {
  return (
    <header className="flex w-full justify-center gap-4 pt-[85px] font-barlow text-16 font-normal uppercase tracking-wider sm:justify-start sm:pt-[133px] sm:text-20 md:tracking-widest lg:pt-[200px] lg:text-28 lg:tracking-widester">
      <span className=" font-bold text-white/[.5]">{id}</span>
      <h1 className="text-white">{title}</h1>
    </header>
  )
}

export default Title
