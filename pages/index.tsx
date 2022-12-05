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
  SanityAbout,
  SanityBlog,
  SanityCalender,
  SanityFeature,
  SanityFooter,
  SanityGithubMock,
  SanityNavigation,
  SanitySeo,
  SanityTestimonial,
  SanityUser,
} from '../types/schema'
import GitHubMock from '../components/sections/home-page/GitHubMock'
import Background from '../components/sections/home-page/Background'
import CTA from '../components/sections/home-page/CTA'
import Features from '../components/sections/home-page/features/Features'
import Testimonials from '../components/sections/home-page/testimonials/Testimonials'
import Insights from '../components/sections/home-page/Insights'
import Blogs from '../components/sections/home-page/blogs/Blogs'
import PageLayout from '../components/common/layout/PageLayout'

interface HomePageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    homePageData: {
      about: SanityAbout
      githubMock: SanityGithubMock
      calender: SanityCalender
      feature: SanityFeature[]
      testimonial: SanityTestimonial[]
    }
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
      <Hero data={homePageData.about as unknown as SanityAbout} />
      <Logos data={homePageData.about.users as unknown as SanityUser[]} />
      <GitHubMock
        githubMockData={homePageData.githubMock as unknown as SanityGithubMock}
      />
      <CTA data={homePageData.calender} />
      <Features data={homePageData.feature} />
      <Insights />
      <Testimonials data={homePageData.testimonial} />
      <Blogs data={displayBlogs.slice(0, 4)} />
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
