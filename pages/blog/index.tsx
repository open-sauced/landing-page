import React, { useEffect, useState, ReactElement } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/blog/Background'
import Blogs from '../../components/sections/blog/Blogs'
import { getAllBlogs, getCommonData } from '../../lib/sanity'
import {
  SanityAuthor,
  SanityBlog,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../types/schema'

interface BlogsPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    blogs: (Omit<SanityBlog, 'author'> & { author: SanityAuthor })[]
    featuredBlogs: (Omit<SanityBlog, 'author'> & { author: SanityAuthor })[]
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
    blogs,
  },
}): ReactElement => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800)
    }

    // Check scroll position on initial load
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={Background}
    >
      <Blogs data={blogs} />
      <a
        href="#top"
        className={`fixed bottom-28 lg:right-11 right-6 back-to-top bg-[#ed5432] text-white py-2 px-3 lg:px-4 rounded font-bold transition-opacity duration-300 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        ↑ Back to Top
      </a>
    </PageLayout>
  )
}

export default BlogsPage

export async function getStaticProps() {
  const [commonData, blogs] = await Promise.all([
    getCommonData(),
    getAllBlogs(),
  ])

  const data = { commonData, blogs }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
