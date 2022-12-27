import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '../../helpers/fetcher'
import getGenericWidth from '../../helpers/genericWidth'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { ICrewProps } from '../../interfaces/Crew.interface'

const Crew: NextPage = () => {
  const { data } = useSWR('/json/data.json', fetcher)

  const [activeTab, setActiveTab] = useState<ICrewProps>({
    name: '',
    bio: '',
    image: { src: '', width: '', height: '' },
    role: '',
  })

  useEffect(() => {
    const initialContent: ICrewProps = {
      name: data?.crew?.content[0]?.name,
      bio: data?.crew?.content[0]?.bio,
      image: {
        src: data?.crew?.content[0]?.image.src,
        width: data?.crew?.content[0]?.image.width,
        height: data?.crew?.content[0]?.image.height,
      },
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
        <div className="flex h-full w-full flex-col">
          <div className="my-7 flex min-h-[222px] justify-center border-b-[1px] border-bright_gray">
            {activeTab.image.src && (
              <Image
                src={activeTab.image.src}
                alt={`Picture of the ${activeTab.name}`}
                priority={true}
                layout="fixed"
                width={getGenericWidth(activeTab.name)}
                height={activeTab.image.height}
              />
            )}
          </div>

          <div>
            <ul className="flex cursor-pointer flex-row justify-center gap-5 lg:ml-0">
              {data?.crew?.content?.map((item: ICrewProps) => (
                <li
                  key={item.name}
                  className="border-radiu h-[10px] w-[10px] cursor-pointer rounded-full bg-white"
                  aria-hidden="true"
                  onClick={() =>
                    setActiveTab({
                      name: item.name,
                      bio: item.bio,
                      image: item.image,
                      role: item.role,
                    })
                  }
                />
              ))}
            </ul>

            <div className="mx-auto mt-7 px-3 text-center text-white">
              <div className="font-bellefair text-16 font-normal uppercase opacity-50">
                {activeTab.role}
              </div>
              <div className="font-bellefair text-24 font-normal uppercase">
                {activeTab.name}
              </div>
              <p className="mt-4 font-barlow text-16 leading-6 text-tropical_blue">
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
