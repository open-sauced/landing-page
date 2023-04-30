import Head from 'next/head'
import React, { FC, ReactElement } from 'react'
import { SanityNavigation, SanitySeo } from '../../../types/schema'
import Header from '../../sections/navigation/Header'
import Footer from '../../sections/Footer'
import Subscribe from '../../sections/Subscribe'
import OgData from '../OgData'

interface PageLayoutProps {
  seoData: SanitySeo
  navigationURLs: SanityNavigation[]
  BackgroundWrapper: React.FC
  pressPage?: boolean
  blogPage?: boolean
}

const PageLayout: FC<PageLayoutProps> = ({
  children,
  seoData,
  navigationURLs,
  BackgroundWrapper,
  pressPage,
  blogPage = false
}): ReactElement => {
  return (
    <div>
        {!blogPage
          && <OgData
            ogTitle={seoData.title || 'Open Sauced'}
            ogDescription={seoData.description || ''}
            ogImageUrl={seoData.image as unknown as string || ''}
            ogUrl={seoData.url || 'https://opensauced.pizza'}
            />
        }
      <BackgroundWrapper>
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
        {!pressPage && <Subscribe />}
        <Footer pressPage={pressPage} />
      </BackgroundWrapper>
    </div>
  )
}

export default PageLayout
