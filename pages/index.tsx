import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundDrip from '../components/BackgroundDrip'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Navigation from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <Head>
        <title>OpenSauced</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundDrip>
        <Navigation />
        <Hero />
      </BackgroundDrip>

      <Logos />
    </div>
  )
}

export default Home
