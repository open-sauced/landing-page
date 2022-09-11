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
import DosDonts from '../../components/DosDonts'

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

                <DosDonts dos={dos as unknown as []} donts={donts as unknown as []} />

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