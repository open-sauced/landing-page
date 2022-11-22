import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/sections/home-page/Hero'
import Logos from '../components/sections/home-page/Logos'
import Navigation from '../components/Header'
import {
  getBlogs,
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
import Background from '../components/Background'
import CTA from '../components/sections/home-page/CTA'
import Footer from '../components/sections/Footer'
import Features from '../components/sections/home-page/features/Features'
import Testimonials from '../components/sections/home-page/testimonials/Testimonials'
import Insights from '../components/sections/home-page/Insights'
import HandleDecoratedText from '../components/common/text/utils/DecoratedText'
import Subscribe from '../components/sections/Subscribe'
import GradientBorderWrapper from '../components/common/GradientBorderWrapper'
import Blogs from '../components/sections/home-page/blogs/Blogs'

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
    <>
      <Head>
        <title>Open Sauced</title>
        <meta name="title" content={seoData.title}></meta>
        <meta name="description" content={seoData.description} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta
          property="og:image"
          content={seoData.image as unknown as string}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta
          property="twitter:image"
          content={seoData.image as unknown as string}
        ></meta>
      </Head>
      <Background>
        <Navigation
          variant="orangeWhite"
          navigationItems={
            homePageData.about.navigationURLs as unknown as SanityNavigation[]
          }
        />

        <Hero data={homePageData.about as unknown as SanityAbout} />

        <Logos data={homePageData.about.users as unknown as SanityUser[]} />

        <GitHubMock
          githubMockData={
            homePageData.githubMock as unknown as SanityGithubMock
          }
        />

        <CTA data={homePageData.calender} />
        <Features data={homePageData.feature} />
        <Insights />
        <Testimonials data={homePageData.testimonial} />
        <Blogs data={blogs} />
        <Subscribe />
        <Footer data={homePageData.footer} />
      </Background>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const [homePageData, seoData, blogs] = await Promise.all([
    getHomePageData(),
    getSEOData(),
    // getBlogs(4),
    getFeaturedBlogs()
  ])

  const data = { homePageData, seoData, blogs }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
