import type { NextPage } from 'next'
import Hero from '../../components/sections/maintainers/Hero'
import Logos from '../../components/sections/maintainers/Logos'
import {
  getAllBlogs,
  getCommonData,
  getFeaturedBlogs,
  getHomePageData,
} from '../../lib/sanity'
import {
  SanityBlog,
  SanityFooter,
  SanityHomePage,
  SanityNavigation,
  SanitySeo,
  SanityUser,
} from '../../types/schema'
import Background from '../../components/sections/maintainers/Background'
import Features from '../../components/sections/maintainers/features/Features'
import Testimonials from '../../components/sections/maintainers/testimonials/Testimonials'
import Blogs from '../../components/sections/maintainers/blogs/Blogs'
import PageLayout from '../../components/common/layout/PageLayout'
import Newsletter from '../../components/sections/maintainers/Newsletter'

interface HomePageProps {
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

const Home: NextPage<HomePageProps> = ({
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
      <Hero data={homePageData.hero as unknown as SanityHomePage['hero']} />
      <Logos data={homePageData.hero?.users as unknown as SanityUser[] || []} />
      <Features data={homePageData.features as unknown as SanityHomePage['features']} />
      <Testimonials data={homePageData.testimonialsSection} />
      <Newsletter/>
      <Blogs data={homePageData.blogSection} blogs={displayBlogs.slice(0, 4)}  />
    </PageLayout>
  )
}

export default Home

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
