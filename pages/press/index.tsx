import React, { FC } from 'react'
import { getPressData, getCommonData } from '../../lib/sanity'
import {
  Footer as SanityFooter,
  Navigation as SanityNavigation,
  Seo as SanitySeo,
  Press as SanityPress,
} from '../../sanity.types'
import PageLayout from '../../components/common/layout/PageLayout'
import PressBackground from '../../components/sections/press/PressBackground'
import PressHeading from '../../components/sections/press/PressHeading'
import OpenSaucedLogos from '../../components/sections/press/OpenSaucedLogos'

interface FeaturePageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    pressData: SanityPress
  }
}

interface HeadingProps {
  title: string
  subtitle: string
  featureImage: string
  LastUpdated: string
  CTAButtonLabel: string
  CTAButtonLink: string
  AllAssets: string
}

const index: FC<FeaturePageProps> = ({
  data: {
    commonData: { seoData, navigationLinks },
    pressData,
  },
}) => {
  const {
    subtitle,
    featureImage,
    LastUpdated,
    CTAButtonLabel,
    CTAButtonLink,
    AllAssets,
  } = pressData

  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={PressBackground}
      pressPage
    >
      <PressHeading
        headingData={
          ({
            subtitle,
            featureImage,
            LastUpdated,
            CTAButtonLabel,
            CTAButtonLink,
            AllAssets,
          } as unknown as HeadingProps) || {}
        }
      />

      <OpenSaucedLogos/>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const [commonData, pressData] = await Promise.all([
    getCommonData(),
    getPressData(),
  ])

  const data = { commonData, pressData }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}

export default index
