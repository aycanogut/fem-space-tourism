import { FC } from 'react'
import Header from '../Header'

import useWidth from '../../hooks/useWidth'
import screenSize from '../../helpers/screenSize'

export interface ILayout {
  path: string
}

const Layout: FC<ILayout> = ({ path }) => {
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
