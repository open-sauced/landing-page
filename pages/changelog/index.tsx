import React from 'react'
import Hero from '../../components/sections/changelog/Hero'
import Changelogs from '../../components/sections/changelog/Changelogs'
import PageLayout from '../../components/common/layout/PageLayout'
import { getCommonData } from '../../lib/sanity'
import { NextPage } from 'next'
import { SanityFooter, SanityNavigation, SanitySeo } from '../../types/schema'
import Background from '../../components/sections/changelog/Background'

interface BlogsPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
  }
}

const Index: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
  },
})=> {
  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={Background}
    >
      <Hero />
      <Changelogs />
    </PageLayout>
  )
}

export default Index

export async function getStaticProps() {
  const [commonData] = await Promise.all([
    getCommonData(),
  ])

  const data = { commonData }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}