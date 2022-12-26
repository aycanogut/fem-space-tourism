import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'

const Crew: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>

      <Layout path="crew" className="h-screen" />
    </>
  )
}

export default Crew
