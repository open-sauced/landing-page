import Head from 'next/head'
import Image from 'next/image'
import React, { FC } from 'react'
import { getFeaturePageDataBySlug, getHomePageData, getSEOData } from '../../lib/sanity'
import { SanityAbout, SanityFeature, SanityFooter, SanityNavigation, SanitySeo } from '../../types/schema'
import Link from 'next/link'
import Navigation from '../../components/Header'
import BackgroundDrip from '../../components/BackgroundDrip'
import ReactPlayer from 'react-player'
import Footer from '../../components/Footer'

 interface FeaturePageProps{
   data: {
    homePageData: {
      about: SanityAbout,
      footer: SanityFooter,
    }
    seoData: SanitySeo,
    featurePageData: SanityFeature,
   }
 }

const index:FC<FeaturePageProps> = ({data: {seoData, featurePageData, homePageData}}) => {
  
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


      <div className="max-w-6xl mx-auto px-8 ">

        <BackgroundDrip>
          <Navigation navigationItems={homePageData.about.navigationURLs as unknown as SanityNavigation[] || [] } />

          <div className=' max-w-[912px]  mx-auto '>
            <div className='mt-[100px] mb-[50px] mx-auto border-white border-[8px] shadow-2xl '>
              <ReactPlayer width={"100%"} controls className='w-full h-auto ' url={featurePageData.previewVideoUrl as unknown as string} />
            </div>

            <div className='flex gap-2' >
              <div className='w-[30px] h-[30px] p-[2px] rounded-full items-center bg-gradient-to-r  from-darkOrange to-lightOrange'>
                <Image width={30} height={30} src={featurePageData.previewImage as unknown as string} />
              </div>

              <h1 className='text-gray300 text-[18px] font-bold' >{featurePageData.title}</h1>
            </div>

            <div className=' my-[5px] py-[10px] pr-[10px] bg-white bg-opacity-[80%] rounded-r-md '>
              <p className='text-[16px] font-semibold text-gray150 mx-auto'>{featurePageData.description}</p>
            </div>

            <Link href={homePageData.about.CTAButtonURL as unknown as string} >
              <a className='font-bold text-[14px] text-gray300'>{homePageData.about.CTAButtonLabel+' >'}</a>
            </Link>
          </div>
        </BackgroundDrip>

        <footer className='mt-[100px]' >
          <Footer footer={homePageData.footer as unknown as SanityFooter[] || []} />
        </footer>
      </div>
  </>
  )
}

export async function getStaticPaths() {
    const [homePageData, seoData] = await Promise.all([
      getHomePageData(),
      getSEOData(),
    ])
  
    const data = { homePageData, seoData }

    const path = data.homePageData.feature .map( feature => {
      return { params: { slug: feature.slug?.current } }
    })

    return {
      paths: path,
      fallback: false
    }
  }
  
  export async function getStaticProps(context: any) {
    const slug = context.params.slug;
    const [homePageData, seoData, featurePageData] = await Promise.all([
      getHomePageData(),
      getSEOData(),
      getFeaturePageDataBySlug(slug),
    ])
  
    const data = {homePageData, featurePageData, seoData }
  
    return {
      props: {
        data,
      },
      revalidate: 1,
    }
  }
  

export default index