import React, { FC } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import { getAllBlogs, getCommonData, getFeaturedBlogs, getHomePageData } from '../../lib/sanity'
import Background from '../../components/sections/about/Background'
import TeamsHero from '../../components/sections/teams/TeamsHero'
import TeamLogos from '../../components/sections/teams/TeamsLogos'
import GitHubMock from '../../components/sections/home-page/GitHubMock'
import CTA from '../../components/sections/home-page/CTA'
import TeamsFeatures from '../../components/sections/teams/features/TeamsFeatures'
import Insights from '../../components/sections/home-page/Insights'
import Testimonials from '../../components/sections/home-page/testimonials/Testimonials'
import { SanityBlog, SanityFooter, SanityHomePage, SanityNavigation, SanitySeo, SanityUser } from '../../types/schema'
import Blogs from '../../components/sections/home-page/blogs/Blogs'

interface Props {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    homePageData: SanityHomePage
    blogs: SanityBlog[]
    featuredBlogs: SanityBlog[]
  }
}

const index:FC<Props> = ({
  data: { commonData, homePageData, blogs, featuredBlogs },
}) => {
  const displayBlogs = [...blogs, ...featuredBlogs].sort(
    (a, b) => +new Date(b._createdAt) - +new Date(a._createdAt)
  )
  
  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
      homePage
    >
      <TeamsHero data={homePageData.hero as unknown as SanityHomePage['hero']} />
      <TeamLogos data={homePageData.hero?.users as unknown as SanityUser[] || []} />
      <GitHubMock
        moreHeading={homePageData.moreHeading || []}
        topFeature={homePageData.topFeature}
      />
      <CTA data={homePageData.ctaSection} />
      <TeamsFeatures data={homePageData.features as unknown as SanityHomePage['features']} />
      <Insights data={homePageData.secondCtaSection as unknown as SanityHomePage['secondCtaSection']} />
      <Testimonials data={homePageData.testimonialsSection} />
      <Blogs data={homePageData.blogSection} blogs={displayBlogs.slice(0, 4)}  />
    </PageLayout>
  )
}

export default index

export async function getStaticProps() {
  const [commonData, homePageData, featuredBlogs, blogs] = await Promise.all([
    getCommonData(),
    getHomePageData(),
    getFeaturedBlogs(),
    getAllBlogs(),
  ])

  const data = { commonData, homePageData, featuredBlogs, blogs }
  
  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
