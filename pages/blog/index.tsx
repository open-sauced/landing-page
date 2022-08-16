import React from 'react'
import type { NextPage } from 'next'
import { getSEOData } from '../../lib/sanity'
import Head from 'next/head'
import { SanitySeo } from '../../types/schema'

interface BlogPageProps {
  data: {
    seoData: SanitySeo,
  }
}

const index: NextPage<BlogPageProps> = ({ data: {seoData} }) => {
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
      <div>
        <h1>Open Sauced Blog</h1>
      </div>
    </>
  )
}

export default index

export async function getStaticProps() {
  const [seoData] = await Promise.all([
    getSEOData(),
  ])

  const data = {seoData}

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}