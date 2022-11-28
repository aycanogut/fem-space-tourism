import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>

      <Layout path="crew" />
    </>
  )
}

export default Home
