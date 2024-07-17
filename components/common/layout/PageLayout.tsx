import React, { FC, ReactElement } from 'react'
import { Navigation as SanityNavigation, Seo as SanitySeo } from '../../../sanity.types'

// Components
import Header from '../../sections/navigation/Header'
import Footer from '../../sections/Footer'
import Subscribe from '../../sections/Subscribe'
import OgData from './SEO/SEO'
import PHBadge from '../product-hunt/PHBadge'

interface BackgroundWrapperProps {
  children: React.ReactNode
}

interface PageLayoutProps {
  seoData: SanitySeo
  navigationURLs: SanityNavigation[]
  BackgroundWrapper: React.FC<BackgroundWrapperProps>
  pressPage?: boolean
  blogPage?: boolean
  homePage?: boolean
  children: React.ReactNode
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
      {!blogPage && (
        <OgData
          ogTitle={seoData.title || 'Open Sauced'}
          ogDescription={seoData.description || ''}
          ogImageUrl={(seoData.image as unknown as string) || ''}
          ogUrl={seoData.url || 'https://opensauced.pizza'}
          noindex={false}
        />
      )}
      <BackgroundWrapper>
        {Array.isArray(children) && !children[1]?.props.totalLaunchesCount && (
          <PHBadge />
        )}
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
       
        <Footer pressPage={pressPage} />
      </BackgroundWrapper>
    </div>
  )
}

export default PageLayout
