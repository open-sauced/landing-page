import React, { FC } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import { getAllBlogs, getCommonData, getFeaturedBlogs, getHomePageData, getTeamsPageData } from '../../lib/sanity'
import Background from '../../components/sections/about/Background'
import { Blog as SanityBlog, Footer as SanityFooter, Navigation as SanityNavigation, Seo as SanitySeo, TeamsPage as SanityTeamsPage, User as SanityUser } from '../../sanity.types'
import Blogs from '../../components/sections/home-page/blogs/Blogs'
import Hero from '../../components/sections/home-page/Hero'
import Logos from '../../components/sections/home-page/Logos'
import Newsletter from '../../components/sections/home-page/Newsletter'
import TeamsFeatures from '../../components/sections/home-page/features/TeamsFeatures'
import CTA from '../../components/sections/teams/CTA'

interface Props {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    teamsPageData: SanityTeamsPage
    blogs: SanityBlog[]
    featuredBlogs: SanityBlog[]
  }
}

const index:FC<Props> = ({
  data: { commonData, teamsPageData, blogs, featuredBlogs },
}) => {
  const displayBlogs = [...blogs, ...featuredBlogs].sort(
    (a, b) => +new Date(b._createdAt) - +new Date(a._createdAt)
  )
  
  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <Hero teamsPage data={teamsPageData.hero as unknown as SanityTeamsPage['hero']} />
      <Logos data={teamsPageData.hero?.users as unknown as SanityUser[] || []} />
      <TeamsFeatures topUseCase={teamsPageData.topUseCase} features={teamsPageData.features} />
      <CTA data={teamsPageData.ctaSection} />
      <Blogs 
        data={{
          // _type: "blogSection",
          title: "Our secret sauce",
          heading: "$yellow-to-orange OpenSauced$yellow-to-orange Blog",
          description: "Musings on the open-source community, engineering, and the future of talent acquisition."
        }} 
        blogs={displayBlogs.slice(0, 4)}  />
      <Newsletter />
    </PageLayout>
  )
}

export default index

export async function getStaticProps() {
  const [commonData, teamsPageData, featuredBlogs, blogs] = await Promise.all([
    getCommonData(),
    getTeamsPageData(),
    getFeaturedBlogs(),
    getAllBlogs(),
  ])

  const data = { commonData, teamsPageData, featuredBlogs, blogs }
  
  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
