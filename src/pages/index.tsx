import { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/Layout'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>

      <Layout path="home">
        <Button
          text="explore"
          className="bold text- hover: b mt-56 h-button_sm w-button_sm rounded-full bg-white font-bellefair text-button font-normal uppercase tracking-tight text-vulcan transition-all hover:shadow-button md:h-button_md md:w-button_md md:text-heading_4 md:tracking-normal lg:h-button_lg lg:w-button_lg"
        />
      </Layout>
    </>
  )
}

export default Home
