import React from 'react'
import type { NextPage } from 'next'
import { getAllBlogs, getBlogBySlug, getHomePageData, getSEOData } from '../../../lib/sanity';
import { SanityAbout, SanityBlog, SanityNavigation, SanitySeo } from '../../../types/schema';
import { PortableText } from '@portabletext/react';
import BlogBackgroundDrip from '../../../components/BlogBackgroundDrip';
import Head from 'next/head';
import Image from 'next/image';
import { BiUserCircle } from 'react-icons/bi';
import { RiHashtag } from 'react-icons/ri';
import Navigation from '../../../components/Header';

interface SingleBlogProps {
  data: {
    seoData: SanitySeo,
    blog: SanityBlog,
    homePageData: {
      about: SanityAbout,
    }
  }
}

const Index: NextPage<SingleBlogProps> = ({ data: {blog, seoData, homePageData} }) => {
  const {title, blogContent, coverImage, topics, author, _id, slug, summary} = blog;
  const blogUrl = `http://localhost:3000/blog/${slug}`;

  return (
    <>
      <Head>
        <title>Open Sauced</title>
        <meta name="title" content={seoData.title}></meta>
        <meta name="description" content={summary} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={summary} />
        <meta
          property="og:image"
          content={seoData.image as unknown as string}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={blogUrl} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={summary} />
        <meta
          property="twitter:image"
          content={coverImage as unknown as string}
        ></meta>
      </Head>
      <div className="max-w-6xl mx-auto px-8">
        <BlogBackgroundDrip>
          <Navigation
            variant='grey'
            navigationItems={
              homePageData.about.navigationURLs as unknown as SanityNavigation[]
            }
          />

        
          <h1 className="font-semibold text-[25px] text-gray-700 mt-[100px] mb-[20px] ">{title}</h1>

          <div className="rounded-[15px] w-full h-[500px] overflow-hidden">
            <Image objectFit="cover" alt={title} width={1100} height={900} layout="responsive" src={coverImage as unknown as string}/>
          </div>
          <div className="flex gap-[8px] w-full flex-wrap items-center mt-[20px] tablet:mt-[20px] mb-[10px]">
            <RiHashtag size={18}/>
            {
              topics?.slice(0,6).map( (topic, index) => (
                <div key={_id+index} className="flex items-center gap-[5px] min-h-[6px] overflow-hidden">
                  <div className="w-[6px] h-[6px] bg-orange-600 rounded-full"></div>

                  <p className="text-sm">{topic}</p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-x-[5px]">
            <BiUserCircle size={18} className="text-gray-600"/>

            <p className="text-gray-600 font-semibold text-[14px]">{author}</p>
          </div>
          <div>
            <p className="text-[18px] cursor-pointer hidden laptop:block">
              <PortableText value={blogContent as unknown as [] | []}/>
            </p>
          </div>
        </BlogBackgroundDrip>
      </div>
    </>
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
  const [blog, seoData, homePageData] = await Promise.all([
    getBlogBySlug(slug),
    getSEOData(),
    getHomePageData(),
  ])

  const data = { blog, seoData, homePageData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}