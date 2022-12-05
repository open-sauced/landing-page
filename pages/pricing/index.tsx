import type { NextPage } from 'next'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/pricing/Background'
import Features from '../../components/sections/pricing/features/Features'
import Pricing from '../../components/sections/pricing/pricing/Pricing'
import { getCommonData } from '../../lib/sanity'
import { SanityFooter, SanityNavigation, SanitySeo } from '../../types/schema'

interface PricingPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
  }
}

const PricingPage: NextPage<PricingPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
  },
}) => {
  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgorundWrapper={Background}
    >
      <Pricing />
      <Features />
    </PageLayout>
  )
}

export default PricingPage

export async function getStaticProps() {
  const [commonData] = await Promise.all([getCommonData()])

  const data = { commonData }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
