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