import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import About from '../../components/sections/about/about/About'
import Background from '../../components/sections/about/Background'
import FollowUs from '../../components/sections/about/FollowUs'
import Links from '../../components/sections/about/Links'
import { getAboutPageData, getCommonData } from '../../lib/sanity'
import { AboutPage as SanityAboutPage, Footer as SanityFooter, Navigation as SanityNavigation, Seo as SanitySeo } from '../../sanity.types'

interface AboutPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    aboutPageData: SanityAboutPage
  }
}

const AboutPage: NextPage<AboutPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
    aboutPageData,
  },
}): ReactElement => {
  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={Background}
    >
      <About intro={aboutPageData.introduction} numeralHighlight={aboutPageData.numeralHighlight as unknown as any} />
      <FollowUs social={aboutPageData.socialLinks} />
      <Links services={aboutPageData.services} />
    </PageLayout>
  )
}

export default AboutPage

export async function getStaticProps() {
  const [commonData, aboutPageData ] = await Promise.all([getCommonData(), getAboutPageData()])

  const data = { commonData, aboutPageData }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
