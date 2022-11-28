import { FC, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import useWidth from '../../hooks/useWidth'
import navigation from '../../routes/navigation'
import variants from '../../helpers/variants'

import Icon from '../Icon'
import { IHeader, IHeaderItems } from '../../interfaces/Header.interface'

const Header: FC<IHeader> = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const { width } = useWidth()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-0 w-full"
    >
      <div className="flex h-full items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link href="/" passHref>
          <a>
            <Icon
              icon="logo"
              className="mt-nav_sm_top h-10 w-10 sm:mt-nav_md_top sm:h-12 sm:w-12 lg:mt-nav_lg_top"
            />
          </a>
        </Link>
        <Icon
          icon="icon-hamburger"
          width="24px"
          height="21px"
          className={`${
            isActive ? 'invisible' : 'visible'
          } mt-nav_sm_top sm:invisible sm:mt-nav_md_top`}
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={isActive ? 'open' : 'closed'}
        variants={variants(width)}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0 h-screen w-2/3 bg-white bg-opacity-5 backdrop-blur-nav before:absolute before:-left-[30%] before:top-1/2 before:hidden before:h-[1px] before:w-1/3 before:bg-white before:opacity-30 sm:ml-auto sm:h-24 sm:w-nav_sm lg:mt-10 lg:w-nav_lg before:lg:block"
        role="navigation"
      >
        <div className="flex flex-col items-end pl-8 pr-6 pt-9 sm:pt-4 sm:pr-0 sm:pl-0 md:pt-3">
          <Icon
            icon="icon-close"
            width="24px"
            height="21px"
            className="cursor-pointer sm:invisible"
            onClick={() => setIsActive(!isActive)}
          />
          <ul className="mr-auto flex flex-col gap-9 pt-14 sm:ml-auto sm:flex-row sm:pt-0 lg:ml-nav_lg_left lg:mr-auto lg:gap-12">
            {navigation?.map((item: IHeaderItems) => (
              <Link key={item.url} href={item.url} passHref>
                <a>
                  <li className="mt-[2px] flex gap-3 font-barlow text-nav uppercase tracking-wider text-white transition-all hover:border-b-2 hover:border-white active:border-b-2 active:border-white sm:pb-[38px] sm:text-subheading_2 md:pb-[35px] lg:gap-nav_lg_gap lg:text-nav">
                    <span className="font-bold sm:hidden lg:block">
                      {item.id}
                    </span>
                    <span className="font-normal">{item.label}</span>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </motion.nav>
    </motion.header>
  )
}

export default Header
