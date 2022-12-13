import Head from 'next/head'
import React, { FC, ReactElement } from 'react'
import { SanityNavigation, SanitySeo } from '../../../types/schema'
import Header from '../../sections/navigation/Header'
import Footer from '../../sections/Footer'
import Subscribe from '../../sections/Subscribe'

interface PageLayoutProps {
  seoData: SanitySeo
  navigationURLs: SanityNavigation[]
  BackgorundWrapper: React.FC
  pressPage?: boolean
}

const PageLayout: FC<PageLayoutProps> = ({
  children,
  seoData,
  navigationURLs,
  BackgorundWrapper,
  pressPage
}): ReactElement => {
  return (
    <div>
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
      <BackgorundWrapper>
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
        {!pressPage && <Subscribe />}
        <Footer pressPage={pressPage} />
      </BackgorundWrapper>
    </div>
  )
}

export default PageLayout
