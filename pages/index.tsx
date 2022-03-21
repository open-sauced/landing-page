import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundDrip from '../components/BackgroundDrip'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Navigation from '../components/Header'
import { getHomePageData } from '../lib/sanity'
import { SanityAbout, SanityNavigation, SanityUser } from '../types/schema'

const TITLE = 'OpenSauced'
const DESCRIPTION = 'The path to your next open source contribution.'
const URL = 'https://opensauced.pizza'
// Some crawlers don't support relative paths for the image, make sure to use the full URL.
const IMAGE = `${URL}/social-image.png}`

interface HomePageProps {
  data: {
    homePageData: {
      about: SanityAbout
    }
  }
}

const Home: NextPage<HomePageProps> = ({ data: { homePageData } }) => {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <Head>
        <title>OpenSauced</title>
        <meta name="title" content={TITLE}></meta>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
        <meta property="twitter:image" content={IMAGE}></meta>
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
  const homePageData = await getHomePageData()

  const data = { homePageData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
