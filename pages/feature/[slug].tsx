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
    <div>
      

    </div>
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