import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useWidth from '../../hooks/useWidth'
import navigation from '../../routes/navigation'
import variants from '../../helpers/variants'
import Transition from '../Transition'
import Icon from '../Icon'
import { IHeaderProps, IHeaderItems } from '../../interfaces/Header.interface'

const Header: FC<IHeaderProps> = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const { pathname } = useRouter() || { pathname: { text: '' } }
  const { width } = useWidth()

  return (
    <header>
      <Transition
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 h-0 w-full"
      >
        <div className="flex h-full items-center justify-between px-6 sm:px-10 xl:px-14">
          <Link href="/" passHref>
            <a className="focus:outline-none">
              <Icon
                icon="logo"
                className="mt-nav_sm_top h-10 w-10 sm:mt-nav_md_top sm:h-12 sm:w-12 xl:mt-nav_lg_top"
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
        <nav>
          <Transition
            initial={{ opacity: 0 }}
            animate={isActive ? 'open' : 'closed'}
            variants={variants(width)}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 h-screen w-2/3 bg-white bg-opacity-5 backdrop-blur-nav before:absolute before:-left-[30%] before:top-1/2 before:hidden before:h-[1px] before:w-1/3 before:bg-white before:opacity-30 sm:ml-auto sm:h-24 sm:w-nav_sm xl:mt-10 xl:w-nav_lg before:xl:block"
            role="navigation"
          >
            <div className="flex h-full flex-col items-end pl-8 pr-6 pt-9 sm:pt-0 sm:pr-0 sm:pl-0">
              <Icon
                icon="icon-close"
                width="24px"
                height="21px"
                className="cursor-pointer sm:!hidden"
                onClick={() => setIsActive(!isActive)}
              />
              <ul className="xl:ml-nav_xl_left mr-auto flex flex-col gap-9 pt-14 sm:ml-auto sm:h-full sm:flex-row sm:items-center sm:pt-0 xl:mr-auto xl:gap-12">
                {navigation?.map((item: IHeaderItems) => (
                  <Link key={item.url} href={item.url} passHref>
                    <a
                      className={`${
                        pathname === item.url
                          ? 'border-white sm:border-b-[3px]'
                          : ''
                      } flex h-full items-center text-white transition-all focus:border-white focus:outline-none md:hover:border-b-[3px] md:hover:border-white/[.5] md:active:border-white`}
                    >
                      <li className="xl:gap-nav_xl_gap mt-[2px] flex gap-3 font-barlow text-16 uppercase tracking-normal sm:mt-0 sm:text-14 xl:text-16">
                        <span className="font-bold sm:hidden xl:block">
                          {item.id}
                        </span>
                        <span className="font-normal">{item.label}</span>
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </Transition>
        </nav>
      </Transition>
    </header>
  )
}

export default Header
