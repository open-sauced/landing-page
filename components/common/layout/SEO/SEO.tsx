import Head from 'next/head'
import React, { FC } from 'react'

interface HeadProps {
  ogTitle: string
  ogDescription: string
  ogImageUrl: string
  ogUrl: string
  noindex: boolean
}

const OgData:FC<HeadProps> = ({
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogUrl,
  noindex
}) => {
  return (
      <Head>
        <title>{ogTitle || "Open Sauced"}</title>
        <meta name="title" content={ogTitle || "Open Sauced"}></meta>
        <meta name="description" content={ogDescription || "The open-source intelligence platform for contributors and maintainers."} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl || "https://opensauced.pizza"} />
        <meta property="og:title" content={ogTitle || "Open Sauced"} />
        <meta property="og:description" content={ogDescription || "The open-source intelligence platform for contributors and maintainers."} />
        <meta
          property="og:image"
          content={ogImageUrl as unknown as string || ""}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl || "https://opensauced.pizza/"} />
        <meta property="twitter:title" content={ogTitle || "Open Sauced"} />
        <meta property="twitter:description" content={ogDescription || "The open-source intelligence platform for contributors and maintainers."} />
        <meta
          property="twitter:image"
          content={ogImageUrl as unknown as string || ""}
        ></meta>
        {noindex && <meta name="robots" content="noindex" key="noindex" />}
      </Head>
  )
}

export default OgData
