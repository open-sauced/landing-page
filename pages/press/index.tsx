import Head from 'next/head'
import React, { FC } from 'react'
import { getHomePageData, getSEOData, getPressData } from '../../lib/sanity'
import { SanityAbout, SanityFooter, SanityNavigation, SanitySeo, SanityPress } from '../../types/schema'
import Footer from '../../components/Footer'
import Navigation from '../../components/Header'
import PressBackground from '../../components/PressBackground'
import PressHeading from '../../components/PressHeading'
import OpenSaucedLogos from '../../components/OpenSaucedLogos'

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

 interface Heading {
  title : string,
  subtitle: string,
}

const index:FC<FeaturePageProps> = ({data: {seoData, homePageData, pressData}}) => {
  const { title, subtitle, openSaucedLogo } = pressData

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

        <PressBackground>
            <Navigation
                variant='white'
                navigationItems={
                homePageData.about.navigationURLs as unknown as SanityNavigation[]
                }
            />
            <PressHeading headingData={{title, subtitle} as unknown as Heading} />
        </PressBackground>

        <OpenSaucedLogos/>

        <Footer footer={homePageData.footer as unknown as SanityFooter[] || []}/>
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