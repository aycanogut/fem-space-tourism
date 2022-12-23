import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '../../helpers/fetcher'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { IDestinationProps } from '../../interfaces/Destination.interface'

const Destination: NextPage = () => {
  const { data } = useSWR('/json/data.json', fetcher)

  const [activeTab, setActiveTab] = useState<IDestinationProps>({
    name: '',
    description: '',
    images: { webp: '' },
    image: '',
    distance: '',
    travel: '',
  })

  useEffect(() => {
    const initialContent = {
      name: data?.destinations?.content[0]?.name,
      description: data?.destinations?.content[0]?.description,
      images: data?.destinations?.content[0]?.images,
      image: data?.destinations?.content[0]?.images.webp,
      distance: data?.destinations?.content[0]?.distance,
      travel: data?.destinations?.content[0]?.travel,
    }

    setActiveTab(initialContent)
  }, [data])

  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>

      {!data ? (
        <div>Loading!</div>
      ) : (
        <Layout
          path="destination"
          className="h-full flex-col px-6 sm:h-screen sm:px-10 lg:px-24 xl:px-40"
        >
          <Title
            id={data?.destinations?.header?.id}
            title={data?.destinations?.header?.title}
          />
          <div className="flex flex-col justify-center text-white lg:flex-row lg:items-center lg:justify-around">
            <div className="lg:w-6/12">
              <div className="mx-auto mt-7 mb-6 h-image_destination_sm w-image_destination_sm sm:mt-14 sm:mb-12 md:h-image_destination_md md:w-image_destination_md lg:mt-[95px] lg:h-image_destination_lg lg:w-image_destination_lg">
                {activeTab.image && (
                  <Image
                    src={activeTab.image}
                    alt={`Picture of the ${activeTab.name}`}
                    priority={true}
                    layout="responsive"
                    width="170px"
                    height="170px"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full flex-col lg:ml-56 lg:mt-6 lg:w-6/12">
              <ul className="mx-auto flex cursor-pointer flex-row gap-5 lg:ml-0">
                {data?.destinations?.content?.map((item: IDestinationProps) => (
                  <li
                    key={item.name}
                    className="text-normal cursor-pointer font-barlow text-14 uppercase tracking-wider text-tropical_blue focus:outline-none sm:text-16"
                    aria-hidden="true"
                    onClick={() =>
                      setActiveTab({
                        name: item.name,
                        description: item.description,
                        images: item.images,
                        image: item.images.webp,
                        distance: item.distance,
                        travel: item.travel,
                      })
                    }
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col px-3 pt-4 text-white sm:px-0 sm:pt-8">
                <h2 className="mx-auto -mb-2 font-bellefair text-56 font-normal uppercase sm:text-80 lg:ml-0 lg:text-100">
                  {activeTab.name}
                </h2>
                <p className="font-15 text-center font-barlow font-normal leading-7 tracking-wide text-tropical_blue sm:px-16 lg:px-0 lg:text-left">
                  {activeTab.description}
                </p>
                <div className="my-7 border-b-[1px] border-bright_gray sm:mx-12 sm:mt-12 lg:mx-0 lg:mt-14" />
                <div className="mx-auto flex flex-col gap-6 pb-16 text-center sm:flex-row sm:gap-24 sm:pb-14 lg:ml-0 lg:text-left">
                  <div>
                    <div className="font-barlow text-14 font-normal uppercase tracking-normal text-tropical_blue sm:pb-1">
                      {'AVG. DISTANCE'}
                    </div>
                    <div className="font-bellefair text-28 font-normal uppercase">
                      {activeTab.distance}
                    </div>
                  </div>
                  <div>
                    <div className="font-barlow text-14 font-normal uppercase tracking-normal text-tropical_blue sm:pb-1">
                      {'Est. travel time'}
                    </div>
                    <div className="font-bellefair text-28 font-normal uppercase">
                      {activeTab.travel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  )
}

export default Destination
