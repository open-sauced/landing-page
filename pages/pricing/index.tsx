import type { NextPage } from 'next'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/pricing/Background'
import Features from '../../components/sections/pricing/features/Features'
import Pricing from '../../components/sections/pricing/pricing/Pricing'
import { getCommonData, getPricingPageData } from '../../lib/sanity'
import { SanityFooter, SanityNavigation, SanityPricingPage, SanitySeo } from '../../types/schema'

interface PricingPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    },
    pricingPageData: SanityPricingPage
  }
}

const PricingPage: NextPage<PricingPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
    pricingPageData,
  },
}) => {
  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={Background}
    >
      <Pricing introduction={pricingPageData.introduction} packageOption={pricingPageData.packageOptions} />
      <Features premiumIntro={pricingPageData.premiumFeatureIntro} premiumFeatures={pricingPageData.premiumFeatures as unknown as []} />
    </PageLayout>
  )
}

export default PricingPage

export async function getStaticProps() {
  const [commonData, pricingPageData] = await Promise.all([getCommonData(), getPricingPageData()])

  const data = { commonData, pricingPageData }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
