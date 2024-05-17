import React, { FC } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import { getAllBlogs, getCommonData, getFeaturedBlogs, getContributorsPageData } from '../../lib/sanity'
import Background from '../../components/sections/about/Background'
import { SanityBlog, SanityContributorsPage, SanityFooter, SanityNavigation, SanitySeo, SanityTeamsPage, SanityUser } from '../../types/schema'
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
    contributorsPageData: SanityContributorsPage
    blogs: SanityBlog[]
    featuredBlogs: SanityBlog[]
  }
}

const index:FC<Props> = ({
  data: { commonData, contributorsPageData, blogs, featuredBlogs },
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
      <Hero data={contributorsPageData.hero as unknown as SanityTeamsPage['hero']} />
      <Logos data={contributorsPageData.hero?.users as unknown as SanityUser[] || []} />
      <TeamsFeatures topUseCase={contributorsPageData.topUseCase} features={contributorsPageData.features} />
      <CTA data={contributorsPageData.ctaSection} />
      <Blogs 
        data={{
          _type: "blogSection",
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
  const [commonData, contributorsPageData, featuredBlogs, blogs] = await Promise.all([
    getCommonData(),
    getContributorsPageData(),
    getFeaturedBlogs(),
    getAllBlogs(),
  ])

  const data = { commonData, contributorsPageData, featuredBlogs, blogs }
  
  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
