// boilerplate component example

import Link from 'next/link'

export interface IHeader {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps} className="w-full flex flex-row justify-between">
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
