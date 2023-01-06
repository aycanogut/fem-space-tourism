import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'

import fetcher from '../../helpers/fetcher'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { ICrewProps } from '../../interfaces/Crew.interface'

const Crew: NextPage = () => {
  const { data } = useSWR('/json/data.json', fetcher)

  const [activeTab, setActiveTab] = useState<ICrewProps>({
    id: 0,
    name: '',
    bio: '',
    image: '',
    role: '',
  })

  console.log(activeTab)
  useEffect(() => {
    const initialContent: ICrewProps = {
      id: data?.crew?.content[0]?.id,
      name: data?.crew?.content[0]?.name,
      bio: data?.crew?.content[0]?.bio,
      image: data?.crew?.content[0]?.image,
      role: data?.crew?.content[0]?.role,
    }
    setActiveTab(initialContent)
  }, [data])

  if (!data) return <div>Loading!</div>

  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>

      <Layout
        path="crew"
        className="h-screen flex-col px-6 sm:h-screen sm:px-10 lg:px-24 xl:px-40"
      >
        <Title id={data?.crew?.header?.id} title={data?.crew?.header?.title} />
        <div className="flex h-full w-full flex-col md:pt-6 lg:flex-row lg:pt-0">
          <div
            className={
              'relative my-7 flex h-56 w-full justify-center border-b-[1px] border-bright_gray md:order-last md:my-0 md:mt-auto md:h-[532px] md:border-0 lg:h-[720px]'
            }
          >
            {activeTab.image && (
              <Image
                src={activeTab.image}
                alt={`Picture of the ${activeTab.name}`}
                priority={true}
                className="rounded-t-md object-contain"
                sizes="100vw"
                layout="fill"
              />
            )}
          </div>

          <div className="flex flex-col">
            <ul className="flex cursor-pointer flex-row justify-center gap-5 md:order-last md:mt-9 lg:ml-0 lg:mt-[166px] lg:justify-start">
              {data?.crew?.content?.map((item: ICrewProps, index: number) => (
                <li
                  key={item.name}
                  className={`${
                    activeTab.id === index ? 'bg-white' : 'bg-[#525252]'
                  } border-radius bg- h-[10px] w-[10px] cursor-pointer rounded-full  transition-all hover:bg-[#979797] lg:h-[15px] lg:w-[15px]`}
                  aria-hidden="true"
                  onClick={() =>
                    setActiveTab({
                      id: item.id,
                      name: item.name,
                      bio: item.bio,
                      image: item.image,
                      role: item.role,
                    })
                  }
                />
              ))}
            </ul>

            <div className="mx-auto mt-7 px-3 text-center text-white md:px-24 lg:px-0 lg:pt-24 lg:text-left">
              <div className="font-bellefair text-16 font-normal uppercase opacity-50 md:text-24 lg:text-32">
                {activeTab.role}
              </div>
              <div className="font-bellefair text-24 font-normal uppercase md:text-40 lg:text-56">
                {activeTab.name}
              </div>
              <p className="mt-4 font-barlow text-16 leading-6 text-tropical_blue md:mt-2 md:leading-7 lg:mt-5 lg:pr-32 lg:text-18 xl:pr-36">
                {activeTab.bio}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Crew
