import React from 'react'
import type { NextPage } from 'next'
import { getAllBlogs, getBlogBySlug, getSEOData } from '../../../lib/sanity';
import { SanityBlog, SanitySeo } from '../../../types/schema';
import { PortableText } from '@portabletext/react';

interface SingleBlogProps {
  data: {
    seoData: SanitySeo,
    blog: SanityBlog,
  }
}

const Index: NextPage<SingleBlogProps> = ({ data: {blog, seoData} }) => {
  const {title, blogContent} = blog
  return (
    <div>
      <h1>{JSON.stringify(title)}</h1>
      <p>{<PortableText value={blogContent as unknown as [] | []}/>}</p>

    </div>
  )
}

export default Index

export async function getStaticPaths() {
  const [blogs] = await Promise.all([
    getAllBlogs(),
  ])

  const path = blogs.map( feature => {
    return { params: { slug: feature.slug?.current } }
  })

  return {
    paths: path,
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const [blog, seoData] = await Promise.all([
    getBlogBySlug(slug),
    getSEOData(),
  ])

  const data = { blog, seoData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}