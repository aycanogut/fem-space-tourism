import { FC } from 'react'

import useWidth from '../../hooks/useWidth'
import screenSize from '../../helpers/screenSize'

import { ILayoutProps } from '../../interfaces/Layout.interface'
import Header from '../Header'

const Layout: FC<ILayoutProps> = ({ path }) => {
  const { width } = useWidth()
  const deviceSize = screenSize(width)

  return (
    <>
      <Header />

      <section
        style={{
          backgroundImage: `url(/assets/${path}/background-${path}-${deviceSize}.webp)`,
        }}
        className="flex h-screen w-screen flex-col items-center bg-cover bg-center"
      ></section>
    </>
  )
}

export default Layout
