import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'

const Destination: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>

      <Layout path="destination" />
    </>
  )
}

export default Destination
