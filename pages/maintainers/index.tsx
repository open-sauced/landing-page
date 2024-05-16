import type { NextPage } from 'next'
import {
  getAllBlogs,
  getCommonData,
  getFeaturedBlogs,
  getMaintainersPageData
} from '../../lib/sanity'
import {
  SanityBlog,
  SanityFooter,
  SanityMaintainersPage,
  SanityNavigation,
  SanitySeo,
  SanityUser,
} from '../../types/schema'
import Hero from '../../components/sections/home-page/Hero'
import Logos from '../../components/sections/home-page/Logos'
import Background from '../../components/sections/maintainers/Background'
import Blogs from '../../components/sections/maintainers/blogs/Blogs'
import PageLayout from '../../components/common/layout/PageLayout'
import Newsletter from '../../components/sections/maintainers/Newsletter'
import TeamsFeatures from '../../components/sections/home-page/features/TeamsFeatures'
import CTA from '../../components/sections/teams/CTA'

interface MaintainersPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    maintainersPageData: SanityMaintainersPage
    blogs: SanityBlog[]
    featuredBlogs: SanityBlog[]
  }
}

const MaintainersPage: NextPage<MaintainersPageProps> = ({
  data: { commonData, maintainersPageData, blogs, featuredBlogs },
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
      <Hero data={maintainersPageData.hero as unknown as SanityMaintainersPage['hero']} />
      <Logos data={maintainersPageData.hero?.users as unknown as SanityUser[] || []} />
      <TeamsFeatures topUseCase={maintainersPageData.topUseCase} features={maintainersPageData.features} />
      <CTA data={maintainersPageData.ctaSection} />
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

export default MaintainersPage

export async function getStaticProps() {
  const [commonData, maintainersPageData, featuredBlogs, blogs] = await Promise.all([
    getCommonData(),
    getMaintainersPageData(),
    getFeaturedBlogs(),
    getAllBlogs(),
  ])

  const data = { commonData, maintainersPageData, featuredBlogs, blogs }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
