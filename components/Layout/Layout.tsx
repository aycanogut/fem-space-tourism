import { FC } from 'react'
import Header from '../Header/Header'

export interface ILayout {}

const Layout: FC<ILayout> = () => {
  return (
    <>
      <Header />

      <section className="flex h-screen w-screen flex-col items-center bg-home-mobile bg-cover bg-center sm:bg-home-tablet	lg:bg-home-desktop "></section>
    </>
  )
}

export default Layout
