import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>

      <Layout path="home" />
    </>
  )
}

export default Home
