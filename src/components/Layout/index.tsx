import { FC } from 'react'

import useWidth from '../../hooks/useWidth'
import screenSize from '../../helpers/screenSize'

import Header from '../Header'
import { ILayoutProps } from '../../interfaces/Layout.interface'

const Layout: FC<ILayoutProps> = ({ path, children, className }) => {
  const { width } = useWidth()
  const deviceSize = screenSize(width)

  return (
    <>
      <Header />

      <main
        style={{
          backgroundImage: `url(/assets/${path}/background-${path}-${deviceSize}.webp)`,
        }}
        className={`flex w-screen bg-cover bg-center ${className}`}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
