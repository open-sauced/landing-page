import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/blog/Background'
import Blogs from '../../components/sections/blog/Blogs'
import { getCommonData, getFeaturedBlogs } from '../../lib/sanity'
import {
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
    blogs: SanityBlog[]
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { footer, navigationLinks, seoData },
    blogs,
  },
}): ReactElement => {
  return (
    <PageLayout
      footerData={footer}
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgorundWrapper={Background}
    >
      <Blogs data={blogs} />
    </PageLayout>
  )
}

export default BlogsPage

export async function getStaticProps() {
  const [commonData, blogs] = await Promise.all([
    getCommonData(),
    getFeaturedBlogs(),
  ])

  const data = { commonData, blogs }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
