import type { NextPage } from 'next'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/pricing/Background'
import Features from '../../components/sections/pricing/features/Features'
import Pricing from '../../components/sections/pricing/pricing/Pricing'
import { getHomePageData, getSEOData } from '../../lib/sanity'
import {
  SanityAbout,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../types/schema'

interface PricingPageProps {
  data: {
    homePageData: {
      about: SanityAbout
      footer: SanityFooter[]
    }
    seoData: SanitySeo
  }
}

const PricingPage: NextPage<PricingPageProps> = ({
  data: { homePageData, seoData },
}) => {
  return (
    <PageLayout
      footerData={homePageData.footer}
      seoData={seoData}
      navigationURLs={
        homePageData.about.navigationURLs as unknown as SanityNavigation[]
      }
      BackgorundWrapper={Background}
    >
      <Pricing />
      <Features />
    </PageLayout>
  )
}

export default PricingPage

export async function getStaticProps() {
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
