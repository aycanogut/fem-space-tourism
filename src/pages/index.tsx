import { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>

      <Layout
        path="home"
        className="flex-col items-center lg:flex-row lg:justify-between lg:px-40"
      >
        <Hero />
        <Button text="explore" />
      </Layout>
    </>
  )
}

export default Home
