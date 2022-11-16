import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  console.log('test')
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>

      <Header />

      <section className="mt-56 flex flex-col items-center">
        <h1 className="font-barlow text-7xl">Hello World!</h1>
      </section>
    </>
  )
}

export default Home
