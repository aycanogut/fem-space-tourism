import { FC } from 'react'
import Transition from '../Transition'
import { IHeroProps } from '../../interfaces/Hero.interface'

const Hero: FC<IHeroProps> = ({ uppertitle, title, description }) => {
  return (
    <Transition
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="mx-5 pt-28 text-center md:mx-0 md:pt-[200px] lg:pt-[300px] lg:text-left">
        <h2 className="font-barlow text-16 uppercase tracking-normal text-tropical_blue md:text-20 md:tracking-wider lg:text-28 lg:tracking-widest">
          {uppertitle}
        </h2>
        <h1 className="mt-1 font-bellefair text-80 font-normal uppercase text-white md:-mt-3 md:text-150 ">
          {title}
        </h1>
        <p className="text-15 mt-1 font-barlow leading-8 text-tropical_blue md:-mt-4 md:px-48 md:text-16 md:leading-9 lg:max-w-md lg:px-0 lg:pt-3 lg:text-18">
          {description}
        </p>
      </section>
    </Transition>
  )
}

export default Hero
