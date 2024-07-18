import React, { FC } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import { getAllBlogs, getCommonData, getFeaturedBlogs, getStudentsPageData } from '../../lib/sanity'
import Background from '../../components/sections/about/Background'
import { Blog as SanityBlog, StudentsPage as SanityStudentsPage, Footer as SanityFooter, Navigation as SanityNavigation, Seo as SanitySeo, TeamsPage as SanityTeamsPage, User as SanityUser } from '../../sanity.types'
import Blogs from '../../components/sections/home-page/blogs/Blogs'
import Hero from '../../components/sections/home-page/Hero'
import Logos from '../../components/sections/home-page/Logos'
import CTA from '../../components/sections/teams/CTA'
import StudentsFeatures from "../../components/sections/home-page/features/StudentsFeatures";

interface Props {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    studentsPageData: SanityStudentsPage
    blogs: SanityBlog[]
    featuredBlogs: SanityBlog[]
  }
}

export async function getStaticProps() {
  const [commonData, studentsPageData, featuredBlogs, blogs] = await Promise.all([
    getCommonData(),
    getStudentsPageData(),
    getFeaturedBlogs(),
    getAllBlogs(),
  ])

  const data = { commonData, studentsPageData, featuredBlogs, blogs }
  
  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}

const Index: FC<Props> = ({
  data: { commonData, studentsPageData, blogs, featuredBlogs },
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
      <Hero data={studentsPageData.hero as unknown as SanityStudentsPage['hero']} />
      <Logos data={studentsPageData.hero?.users as unknown as SanityUser[] || []} />
      <StudentsFeatures features={studentsPageData.features} />
      <CTA data={studentsPageData.ctaSection} />
      <Blogs 
        data={{
          // _type: "blogSection",
          title: "Our secret sauce",
          heading: "$yellow-to-orange OpenSauced$yellow-to-orange Blog",
          description: "Musings on the open-source community, engineering, and the future of talent acquisition."
        }} 
        blogs={displayBlogs.slice(0, 4)}  />
    </PageLayout>
  )
}

export default Index;
