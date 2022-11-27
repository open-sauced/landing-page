import type { NextPage } from 'next'
import Hero from '../components/sections/home-page/Hero'
import Logos from '../components/sections/home-page/Logos'
import {
  getFeaturedBlogs,
  getHomePageData,
  getSEOData,
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
    homePageData: {
      about: SanityAbout
      githubMock: SanityGithubMock
      calender: SanityCalender
      feature: SanityFeature[]
      testimonial: SanityTestimonial[]
      footer: SanityFooter[]
    }
    seoData: SanitySeo
    blogs: SanityBlog[]
  }
}

const Home: NextPage<HomePageProps> = ({
  data: { homePageData, seoData, blogs },
}) => {
  return (
    <PageLayout
      footerData={homePageData.footer}
      seoData={seoData}
      navigationURLs={
        homePageData.about.navigationURLs as unknown as SanityNavigation[]
      }
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
      <Blogs data={blogs} />
    </PageLayout>
  )
}

export default Home

export async function getStaticProps() {
  const [homePageData, seoData, blogs] = await Promise.all([
    getHomePageData(),
    getSEOData(),
    getFeaturedBlogs(),
  ])

  const data = { homePageData, seoData, blogs }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
