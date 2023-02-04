import Head from 'next/head'
import React, { FC } from 'react'

interface HeadProps {
  ogTitle: string
  ogDescription: string
  ogImageUrl: string
  ogUrl: string
}

const OgData:FC<HeadProps> = ({
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogUrl
}) => {
  return (
      <Head>
        <title>{ogTitle || "Open Sauced"}</title>
        <meta name="title" content={ogTitle || "Open Sauced"}></meta>
        <meta name="description" content={ogDescription || ""} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl || "https://opensauced.pizza"} />
        <meta property="og:title" content={ogTitle || "Open Sauced"} />
        <meta property="og:description" content={ogDescription} />
        <meta
          property="og:image"
          content={ogImageUrl as unknown as string}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl || "https://opensauced.pizza/"} />
        <meta property="twitter:title" content={ogTitle || "Open Sauced"} />
        <meta property="twitter:description" content={ogDescription} />
        <meta
          property="twitter:image"
          content={ogImageUrl as unknown as string}
        ></meta>
      </Head>
  )
}

export default OgData