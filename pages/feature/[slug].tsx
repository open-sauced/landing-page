import Head from 'next/head'
import Image from 'next/image'
import React, { FC } from 'react'
import { getFeaturePageDataBySlug, getHomePageData, getSEOData } from '../../lib/sanity'
import { SanityAbout, SanityFeature, SanitySeo } from '../../types/schema'
import Button from '../../components/Button'

 interface FeaturePageProps{
   data: {
    homePageData: {
      about: SanityAbout,
    }
     seoData: SanitySeo,
     featurePageData: SanityFeature
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

      <div className=' mt-[10px] ml-[30px] font-bold text-[35px] text-gray150  hover:text-gray-900 '>
        <a href="/">{'<'}</a>
      </div>

      <div className="max-w-6xl mx-auto px-8 ">
        <div className='flex justify-center mt-[20px] tablet:mt-[60px] mb-[60px]  '>
          <div className='rounded-full inline-block mx-auto shadow-md text-white bg-gradient-to-r  from-darkOrange to-lightOrange '>

            <div className=' flex justify-center gap-4 px-[30px] py-[12px] '>
                <Image className='inline' width={58} height={58} src={featurePageData.previewImage as unknown as string} />

                <h1 className=' inline font-bold text-[28px] ' >{featurePageData.title}</h1>

            </div>
          </div>
        </div>
  
        <div className=' max-w-[912px] mx-auto border-gray150 border-[8px] shadow-2xl '>
          <video className='w-full'  controls autoPlay src={featurePageData.previewVideo as unknown as string}></video>
        </div>

        <div className='max-w-[200px] bg-gray120 h-[2px] mx-auto my-[50px] '></div>

        <p className='text-[16px] text-gray150 mx-auto text-center max-w-[900px] '>{featurePageData.description}</p>
        
        <div className=' flex justify-center mt-[20px] mb-[10px]'>
          <Button
              asLink
              href={homePageData.about.CTAButtonURL as unknown as string}
              type="secondary"
              endIcon={
                <svg width="0.6rem" height="0.6rem" fill="none" viewBox="8 8 8 8">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              }
            >
              {homePageData.about.CTAButtonLabel}
              
            </Button>
        </div>

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