import Head from 'next/head'
import React, { FC } from 'react'
import { getHomePageData, getSEOData, getPressData } from '../../lib/sanity'
import { SanityAbout, SanityFooter, SanityNavigation, SanitySeo, SanityPress } from '../../types/schema'
import Footer from '../../components/Footer'
import Navigation from '../../components/Header'
import { TbCheckbox, TbHandStop } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';
import { BsX } from 'react-icons/bs';
import PermittedLogos from '../../components/PermittedLogos'

 interface FeaturePageProps{
   data: {
    homePageData: {
    about: SanityAbout,
      footer: SanityFooter,
    }
    seoData: SanitySeo,
    pressData: SanityPress
   }
 }

const index:FC<FeaturePageProps> = ({data: {seoData, homePageData, pressData}}) => {
  const { title, subtitle, dos, donts, openSaucedLogo } = pressData
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
            <Navigation
                variant='grey'
                navigationItems={
                    homePageData.about.navigationURLs as unknown as SanityNavigation[]
                }
            />

                <div className='mt-16 flex flex-col text-center items-center justify-center gap-y-5'>
                    <h1 className='text-gray-700 font-bold text-[2.8rem] '>{title}</h1>
                    <p className='text-gray-700 max-w-lg font-normal text-[1.2rem]'>{subtitle}</p>
                </div>

                <PermittedLogos logos={openSaucedLogo as unknown as []}/>

                <div className='flex flex-col tablet:flex-row tablet:justify-between gap-y-8 tablet:px-8'>
                    {/* Do */}
                    <div className='flex-1'>
                        <div className='flex items-center gap-4 mb-4 text-[1.5rem] font-semibold'>
                            <div className='bg-green-400 rounded-[8px] p-1 bg-opacity-20 '>
                                <TbCheckbox className='text-green-400'/>
                            </div>
                            <h6 className='text-gray-700'>You can</h6>
                        </div>

                        {
                            dos &&
                            dos.map((singleDo)=> (
                                <div key={singleDo} className='flex flex-col mb-2 gap-y-2'>
                                    <div className='pl-2 flex gap-x-4'>
                                        <div className='bg-green-400 mt-[6px] bg-opacity-20 w-4 h-4 rounded-full'>
                                            <TiTick className='text-green-400'/>
                                        </div>
                                        <p className='m-0 p-0'>{singleDo}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* donts */}
                    <div className='flex-1'>
                        <div className='flex items-center gap-4 mb-4 text-[1.5rem] font-semibold'>
                            <div className='bg-red-400 rounded-[8px] p-1 bg-opacity-20 '>
                                <TbHandStop className='text-red-400'/>
                            </div>
                            <h6 className='text-gray-700'>{"You can't"}</h6>
                        </div>

                        {
                            donts &&
                            donts.map((singleDont)=> (
                                <div key={singleDont} className='flex flex-col mb-2 gap-y-2'>
                                    <div className='pl-2 flex gap-x-4'>
                                        <div className='bg-red-400 mt-[6px] bg-opacity-20 w-4 h-4 rounded-full'>
                                            <BsX className='text-red-400'/>
                                        </div>
                                        <p>{singleDont}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>

            <footer className='mt-[100px]' >
                <Footer footer={homePageData.footer as unknown as SanityFooter[] || []} />
            </footer>
        </div>
  </>
  )
}

export async function getStaticProps(context: any) {
    const [homePageData, seoData, pressData] = await Promise.all([
        getHomePageData(),
        getSEOData(),
        getPressData(),
    ])

    const data = { homePageData, seoData, pressData }

    return {
        props: {
        data,
        },
        revalidate: 1,
    }
}

export default index