import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundDrip from '../components/BackgroundDrip'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Navigation from '../components/Header'
import { getHomePageData, getSEOData } from '../lib/sanity'
import {
  SanityAbout,
  SanityNavigation,
  SanitySeo,
  SanityUser,
} from '../types/schema'

interface HomePageProps {
  data: {
    homePageData: {
      about: SanityAbout
    }
    seoData: SanitySeo
  }
}

const Home: NextPage<HomePageProps> = ({ data: { homePageData, seoData } }) => {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <Head>
        <title>OpenSauced</title>
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

      <BackgroundDrip>
        <Navigation
          navigationItems={
            homePageData.about.navigationURLs as unknown as SanityNavigation[]
          }
        />
        <Hero sanityData={homePageData.about} />
      </BackgroundDrip>

      <Logos
        users={(homePageData.about.users as unknown as SanityUser[]) || []}
      />
    </div>
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
