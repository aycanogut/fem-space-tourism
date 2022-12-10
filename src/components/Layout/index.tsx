import { FC } from 'react'

import useWidth from '../../hooks/useWidth'
import screenSize from '../../helpers/screenSize'

import { ILayoutProps } from '../../interfaces/Layout.interface'
import Header from '../Header'

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
        className={`flex h-screen w-screen bg-cover bg-center ${className}`}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
