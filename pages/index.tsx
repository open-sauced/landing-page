import type { NextPage } from 'next'
import Hero from '../components/sections/home-page/Hero'
import Logos from '../components/sections/home-page/Logos'
import {
  getAllBlogs,
  getCommonData,
  getFeaturedBlogs,
  getHomePageData,
} from '../lib/sanity'
import {
  SanityBlog,
  SanityFooter,
  SanityHomePage,
  SanityNavigation,
  SanitySeo,
  SanityUser,
} from '../types/schema'
import Background from '../components/sections/home-page/Background'
import Features from '../components/sections/home-page/features/Features'
import Testimonials from '../components/sections/home-page/testimonials/Testimonials'
import Blogs from '../components/sections/home-page/blogs/Blogs'
import PageLayout from '../components/common/layout/PageLayout'

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
      BackgorundWrapper={Background}
    >
      <Hero data={homePageData.hero as unknown as SanityHomePage['hero']} />
      <Logos data={homePageData.hero?.users as unknown as SanityUser[] || []} />
      <Features data={homePageData.features as unknown as SanityHomePage['features']} />
      <Testimonials data={homePageData.testimonialsSection} />
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
