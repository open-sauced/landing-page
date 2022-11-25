import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import About from '../../components/sections/about/about/About'
import Background from '../../components/sections/about/Background'
import FollowUs from '../../components/sections/about/FollowUs'
import Links from '../../components/sections/about/Links'
import { getHomePageData, getSEOData } from '../../lib/sanity'
import {
  SanityAbout,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../types/schema'

interface AboutPageProps {
  data: {
    aboutPageData: {
      about: SanityAbout
      footer: SanityFooter[]
    }
    seoData: SanitySeo
  }
}

const AboutPage: NextPage<AboutPageProps> = ({
  data: {
    aboutPageData: { footer, about },
    seoData,
  },
}): ReactElement => {
  return (
    <PageLayout
      footerData={footer}
      seoData={seoData}
      navigationURLs={about.navigationURLs as unknown as SanityNavigation[]}
      BackgorundWrapper={Background}
    >
      <About />
      <FollowUs data={footer} />
      <Links />
    </PageLayout>
  )
}

export default AboutPage

export async function getStaticProps() {
  const [aboutPageData, seoData] = await Promise.all([
    getHomePageData(),
    getSEOData(),
  ])

  const data = { aboutPageData, seoData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
