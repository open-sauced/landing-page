import React, { FC, ReactElement } from 'react'
import { SanityNavigation, SanitySeo } from '../../../types/schema'

// Components
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
  homePage?: boolean
}

const PageLayout: FC<PageLayoutProps> = ({
  children,
  seoData,
  navigationURLs,
  BackgroundWrapper,
  pressPage,
  blogPage = false,
  homePage = false,
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
        {!pressPage && !homePage && <Subscribe />}
        <Footer pressPage={pressPage} />
      </BackgroundWrapper>
    </div>
  )
}

export default PageLayout
