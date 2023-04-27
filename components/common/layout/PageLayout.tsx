import Head from 'next/head'
import React, { FC, ReactElement } from 'react'
import { SanityNavigation, SanitySeo } from '../../../types/schema'
import Header from '../../sections/navigation/Header'
import Footer from '../../sections/Footer'
import OgData from '../OgData'

interface PageLayoutProps {
  seoData: SanitySeo
  navigationURLs: SanityNavigation[]
  BackgorundWrapper: React.FC
  pressPage?: boolean
  blogPage?: boolean
}

const PageLayout: FC<PageLayoutProps> = ({
  children,
  seoData,
  navigationURLs,
  BackgorundWrapper,
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
      <BackgorundWrapper>
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
        <Footer pressPage={pressPage} />
      </BackgorundWrapper>
    </div>
  )
}

export default PageLayout
