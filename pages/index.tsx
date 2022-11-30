import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Navigation from '../components/Header'
import { getHomePageData, getSEOData } from '../lib/sanity'
import {
  SanityAbout,
  SanityCalender,
  SanityFeature,
  SanityFooter,
  SanityGithubMock,
  SanityNavigation,
  SanitySeo,
  SanityTestimonial,
  SanityUser,
} from '../types/schema'
import GitHubMock from '../components/GitHubMock'
import Background from '../components/Background'
import CTA from '../components/CTA'
import Footer2 from '../components/Footer2'

interface HomePageProps {
  data: {
    homePageData: {
      about: SanityAbout,
      githubMock: SanityGithubMock,
      calender: SanityCalender,
      feature: SanityFeature,
      testimonial: SanityTestimonial,
      footer: SanityFooter,
    }
    seoData: SanitySeo,


  }
}

const Home: NextPage<HomePageProps> = ({ data: { homePageData, seoData, } }) => {
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
        <div className="max-w-7xl mx-auto">
          <Navigation variant="orangeWhite" navigationItems={homePageData.about.navigationURLs as unknown as SanityNavigation[] } />

          <Hero sanityData={homePageData.about as unknown as SanityAbout} />

          <Logos users={homePageData.about.users as unknown as SanityUser[]} />

          <GitHubMock githubMockData={homePageData.githubMock as unknown as SanityGithubMock}/>
          
          <CTA/> 

        </div>
        <Footer2/>     
      </Background>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const [homePageData, seoData] = await Promise.all([
    getHomePageData(),
    getSEOData(),
  ])

  const data = { homePageData, seoData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
