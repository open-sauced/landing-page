import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import About from '../../components/sections/about/about/About'
import Background from '../../components/sections/about/Background'
import FollowUs from '../../components/sections/about/FollowUs'
import Links from '../../components/sections/about/Links'
import { getCommonData } from '../../lib/sanity'
import { SanityFooter, SanityNavigation, SanitySeo } from '../../types/schema'

interface AboutPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
  }
}

const AboutPage: NextPage<AboutPageProps> = ({
  data: {
    commonData: { footer, navigationLinks, seoData },
  },
}): ReactElement => {
  return (
    <PageLayout
      footerData={footer}
      seoData={seoData}
      navigationURLs={navigationLinks}
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
  const [commonData] = await Promise.all([getCommonData()])

  const data = { commonData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
