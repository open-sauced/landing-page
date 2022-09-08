import Head from 'next/head'
import React, { FC } from 'react'
import { getFeaturePageDataBySlug, getHomePageData, getSEOData } from '../../lib/sanity'
import { SanityAbout, SanityFooter, SanityNavigation, SanitySeo } from '../../types/schema'
import Footer from '../../components/Footer'
import Navigation from '../../components/Header'

 interface FeaturePageProps{
   data: {
    homePageData: {
    about: SanityAbout,
      footer: SanityFooter,
    }
    seoData: SanitySeo,
   }
 }

const index:FC<FeaturePageProps> = ({data: {seoData, homePageData}}) => {
  
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

            <footer className='mt-[100px]' >
            <Footer footer={homePageData.footer as unknown as SanityFooter[] || []} />
            </footer>
        </div>
  </>
  )
}

export async function getStaticProps(context: any) {
    const [homePageData, seoData] = await Promise.all([
        getHomePageData(),
        getSEOData(),
    ])

    const data = { homePageData, seoData }

    return {
        props: {
        data,
        },
        revalidate: 1,
    }
}

export default index