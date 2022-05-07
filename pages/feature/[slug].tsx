import Head from 'next/head'
import Image from 'next/image'
import React, { FC } from 'react'
import { getFeaturePageDataBySlug, getHomePageData, getSEOData } from '../../lib/sanity'
import { SanityFeature, SanitySeo } from '../../types/schema'

 interface FeaturePageProps{
   data: {
     seoData: SanitySeo
     featurePageData: SanityFeature
   }
 }

const index:FC<FeaturePageProps> = ({data: {seoData, featurePageData}}) => {
  
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

      <div className=' max-w-6xl px-[10px] mx-auto bg-white ' >
        <div className='rounded-full border-[4px] shadow-md max-w-[550px]   mx-auto my-[50px] border-gray50 flex flex-wrap justify-center items-center gap-[6px] py-[10px] px-[5px] text-gray50 '>
          <Image width={58} height={58} src={featurePageData.previewImage as unknown as string} />

          <h1 className='font-bold text-[28px] ' >{featurePageData.title}</h1>
        </div>

        <div className=' max-w-[912px] mx-auto border-white border-[8px] shadow-2xl '>
          <video controls autoPlay src={featurePageData.previewVideo as unknown as string}></video>
        </div>

        <div className='max-w-[200px] bg-gray150 h-[2px] mx-auto my-[50px] '></div>

        <p className='text-[16px] text-gray150 mx-auto text-center max-w-[900px] '>{featurePageData.description}</p>

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
    const [seoData, featurePageData] = await Promise.all([
      getSEOData(),
      getFeaturePageDataBySlug(slug)
    ])
  
    const data = { featurePageData, seoData }
  
    return {
      props: {
        data,
      },
      revalidate: 1,
    }
  }
  

export default index