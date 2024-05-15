import React, { FC, ReactElement, useState, useEffect } from 'react'
import { SanityNavigation, SanitySeo } from '../../../types/schema'

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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {!blogPage
        && <OgData
        ogTitle={seoData.title || 'Open Sauced'}
        ogDescription={seoData.description || ''}
        ogImageUrl={seoData.image as unknown as string || ''}
        ogUrl={seoData.url || 'https://opensauced.pizza'}
        noindex={false} 
        />
      }
      <BackgroundWrapper>
        <PHBadge/>
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
        {showButton && (
          <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-darkOrange text-white p-3 rounded-full text-sm z-50">
            ↑ Back to Top
          </button>
        )}
        <Footer pressPage={pressPage} />
      </BackgroundWrapper>
    </div>
  )
}

export default PageLayout
