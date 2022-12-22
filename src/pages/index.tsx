import { NextPage } from 'next'
import Head from 'next/head'
import useSWR from 'swr'

import fetcher from '../helpers/fetcher'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Button from '../components/Button'

const Home: NextPage = () => {
  const { data } = useSWR('/json/data.json', fetcher)

  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>

      <Layout
        path="home"
        className="h-screen flex-col items-center lg:flex-row lg:justify-between lg:px-40"
      >
        <Hero
          uppertitle={data?.homepage?.uppertitle}
          title={data?.homepage?.title}
          description={data?.homepage?.description}
        />
        <Button text={data?.homepage?.button} />
      </Layout>
    </>
  )
}

export default Home
