import React from 'react'
import Hero from '../../components/sections/lunchweek/Hero'
import Changelogs from '../../components/sections/lunchweek/Changelogs'
import PageLayout from '../../components/common/layout/PageLayout'
import { getAllChangelog, getCommonData } from '../../lib/sanity'
import { NextPage } from 'next'
import { SanityFooter, SanityNavigation, SanitySeo } from '../../types/schema'
import Background from '../../components/sections/lunchweek/Background'

interface BlogsPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    totalChangelogCount: number
  }
}

const Index: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
    totalChangelogCount,
  },
}) => {
  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={Background}
    >
      <Hero />
      <Changelogs totalChangelogCount={totalChangelogCount} />
    </PageLayout>
  )
}

export default Index

export async function getStaticProps() {
  const [commonData, AllChangelog] = await Promise.all([
    getCommonData(),
    getAllChangelog(),
  ])

  const totalChangelogCount = AllChangelog.length
  const data = { commonData, totalChangelogCount }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
