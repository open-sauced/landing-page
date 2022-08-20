import React from 'react'
import type { NextPage } from 'next'
import { getHomePageData, getSEOData } from '../../lib/sanity'
import Head from 'next/head'
import { SanityAbout, SanityNavigation, SanitySeo } from '../../types/schema'
import BlogBackgroundDrip from '../../components/BlogBackgroundDrip'
import Navigation from '../../components/Header'
import { FaPizzaSlice } from 'react-icons/fa';
import { RiHashtag } from 'react-icons/ri';
import { TiWorld } from 'react-icons/ti'
import { BiTime } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import ellipseOrange from '../../public/ellipseOrange.svg'
import Image from 'next/image'

interface BlogPageProps {
  data: {
    homePageData: {
      about: SanityAbout,
    }
    seoData: SanitySeo,


  }
}

// tod: remove this
const posts = [1,1,1]
const topics = [
  {
    id: 1,
    topic: "react"
  },
  {
    id: 1,
    topic: "tailwind"
  },
  {
    id: 1,
    topic: "angular"
  },
]

const index: NextPage<BlogPageProps> = ({ data: {seoData, homePageData} }) => {
  return (
    <>
     <Head>
        <title>Open Sauced</title>
        <meta name="title" content={seoData.title}></meta>
        <meta name="description" content={seoData.description} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta
          property="og:image"
          content={seoData.image as unknown as string}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta
          property="twitter:image"
          content={seoData.image as unknown as string}
        ></meta>
      </Head>
      <div className="max-w-6xl mx-auto px-8">
        <BlogBackgroundDrip>
        <Navigation
            navigationItems={
              homePageData.about.navigationURLs as unknown as SanityNavigation[]
            }
          />
        <h1 className='text-center font-thin tracking-[1rem] text-[4rem] py-32 '>Blog</h1>
        
        <div className='py-[15px] flex items-center gap-x-[8px]'>
          <FaPizzaSlice size={25} className="text-gray-800"/>
          <h6 className='font-semibold text-[25px] text-gray-800  '>Saucy blog</h6>
        </div>
        <div className="flex gap-x-4">
          {
          posts.map( post => (
            <div key={post} className="w-[440px]">
              <div className="rounded-[15px] bg-gray-100 w-full h-[215px]">
              {/* Cover */}
              </div>
              <div className='mt-[20px]'>
                <div className='flex gap-[8px] items-center mt-[50px] mb-[15px]'>
                  <RiHashtag size={18}/>
                  {
                    topics.map( ({topic, id}) => (
                      <div key={id} className='flex items-center gap-[5px] min-h-[6px]'>
                        <div className='w-[6px] h-[6px] bg-orange-600 rounded-full'></div>
                        <p className='text-sm'>{topic}</p>
                      </div>

                    ))
                  }
                </div>

                <h6 className='font-bold text-[17px] text-gray-700'>Lorem ipsum dolor sit amet consectetur iciendis, omniaudantium quas!</h6>
                
                <div className='flex items-center gap-x-4 mt-[5px]'>
                  <div className='flex items-center gap-x-[5px] mt-[5px] mb-[15px]'>
                    <BiTime size={18} className="text-gray-600"/>
                    <p className='text-gray-600 font-semibold text-[14px] '>2 mins read</p>
                  </div>

                  <div className='flex items-center gap-x-[5px] mt-[5px] mb-[15px]'>
                    <BiUserCircle size={18} className="text-gray-600"/>
                    <p className='text-gray-600 font-semibold text-[14px]'>David</p>
                  </div>
                </div>
                
                <p className='text-[18px] text-gray-700 mt-[30px]'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde
                </p>
              </div>
            </div>
          ))
          }
        </div>
        </BlogBackgroundDrip>

        <div className='pt-[100px]'>
          <div className='py-[15px] flex items-center gap-x-[8px]'>
            <TiWorld size={25} className="text-gray-800"/>
            <h6 className='font-semibold text-[25px] text-gray-800  '>Explore</h6>
          </div>

          <div className='flex flex-col gap-y-6'>
            
            {
              posts.map( post => (
                <div key={post} className='flex gap-x-[20px]'>
                  <div className=' flex-1'>
                    <div className="rounded-[15px] bg-gray-100 w-[450px] h-[240px]">
                    {/* Cover */}
                    </div>
                    <div>

                    </div>
                  </div>

                  <div>
                    <h1 className='font-bold text-[20px] text-gray-700'>Lorem ipsum dolor sit amet consectetur iciendis, omniaudantium quas!</h1>

                    <div className='flex gap-[8px] items-center mt-[10px] mb-[20px]'>
                      <RiHashtag size={18}/>
                      {
                        topics.map( ({topic, id}) => (
                          <div key={id} className='flex items-center gap-[5px] min-h-[6px]'>
                            <div className='w-[6px] h-[6px] bg-orange-600 rounded-full'></div>
                            <p className='text-sm'>{topic}</p>
                          </div>

                        ))
                      }
                    </div>

                    <p className='text-[18px]'>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde Lorem Ipsum es Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivdo el texto de relleno estándar.
                    </p>

                    <div className='flex items-center gap-x-4 mt-[5px] mb-[15px]'>
                      <div className='flex items-center gap-x-[5px] '>
                        <BiTime size={18} className="text-gray-600"/>
                        <p className='text-gray-600 font-semibold text-[14px] '>2 mins read</p>
                      </div>

                      <div className='flex items-center gap-x-[5px]'>
                        <BiUserCircle size={18} className="text-gray-600"/>
                        <p className='text-gray-600 font-semibold text-[14px]'>David</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex justify-center my-[30px]'>
          <div className='flex gap-x-3 justify-center items-center h-[40px] w-[150px] cursor-pointer rounded-[20px] shadow-orange-600 shadow'>
            <div className='w-[20px] h-[20px] rounded-full'>
              <Image alt='vector art' src={ellipseOrange}/>
            </div>
            <p className='text-[15px] font-semibold text-gray-600'>Load more</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default index

export async function getStaticProps() {
  const [seoData, homePageData] = await Promise.all([
    getSEOData(),
    getHomePageData(),
  ])

  const data = {seoData, homePageData}

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}