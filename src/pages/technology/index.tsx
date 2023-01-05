import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'

import fetcher from '../../helpers/fetcher'
import useWidth from '../../hooks/useWidth'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { ITechnologyProps } from '../../interfaces/Technology.interface'

const Technology: NextPage = () => {
  const { data } = useSWR('/json/data.json', fetcher)
  const { width } = useWidth()

  const [activeTab, setActiveTab] = useState<ITechnologyProps>({
    id: '',
    name: '',
    images: {
      portrait: '',
      landscape: '',
    },
    description: '',
  })

  useEffect(() => {
    const initialContent: ITechnologyProps = {
      id: data?.technology?.content[0].id,
      name: data?.technology?.content[0].name,
      images: {
        portrait: data?.technology?.content[0].images.portrait,
        landscape: data?.technology?.content[0].images.landscape,
      },
      description: data?.technology?.content[0].description,
    }
    setActiveTab(initialContent)
  }, [data])

  console.log(activeTab)

  if (!data) return <div>Loading!</div>

  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>

      <Layout path="technology" className="flex h-screen w-full flex-col">
        <Title
          id={data?.technology?.header?.id}
          title={data?.technology?.header?.title}
        />
        <div className="mt-7 flex flex-col">
          <div className="relative h-[170px]">
            {activeTab?.images?.landscape && activeTab?.images?.portrait && (
              <Image
                src={
                  width && width <= 900
                    ? activeTab.images.landscape
                    : activeTab.images.portrait
                }
                alt={`Picture of the ${activeTab.name}`}
                priority={true}
                className="object-cover"
                sizes="100vw"
                layout="fill"
              />
            )}
          </div>

          <ul className="my-6 flex flex-row justify-center gap-4 lg:flex-col lg:gap-8">
            {data?.technology?.content.map((item: ITechnologyProps) => (
              <li
                key={item.id}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-bright_gray sm:h-[60px] sm:w-[60px] lg:h-20 lg:w-20"
                aria-hidden="true"
                onClick={() =>
                  setActiveTab({
                    id: item.id,
                    name: item.name,
                    images: {
                      portrait: item.images.portrait,
                      landscape: item.images.landscape,
                    },
                    description: item.description,
                  })
                }
              >
                <span className="md:text- font-bellefair text-16 text-white sm:text-24 lg:text-32">
                  {item.id}
                </span>
              </li>
            ))}
          </ul>

          <div className="mx-6 px-3 text-center">
            <span className="sm:font-16 font-barlow text-14 font-normal uppercase tracking-wider text-tropical_blue">
              the terminology…
            </span>
            <h2 className="mt-1 mb-3 font-bellefair text-24 uppercase text-white sm:text-40 lg:text-56">
              {activeTab.name}
            </h2>
            <p className="text-15 font-barlow leading-6 text-tropical_blue">
              {activeTab.description}
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Technology
