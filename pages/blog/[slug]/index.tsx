import React from 'react'
import type { NextPage } from 'next'
import { getAllBlogs, getBlogBySlug, getHomePageData, getSEOData } from '../../../lib/sanity';
import { SanityAbout, SanityBlog, SanityFooter, SanityNavigation, SanitySeo } from '../../../types/schema';
import { PortableText } from '@portabletext/react';
import BlogBackgroundDrip from '../../../components/BlogBackgroundDrip';
import Head from 'next/head';
import Image from 'next/image';
import { BiUserCircle,  } from 'react-icons/bi';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaHackerNewsSquare } from 'react-icons/fa';
import { RiHashtag } from 'react-icons/ri';
import Navigation from '../../../components/Header';
import Link from 'next/link';
import ellipseOrange from '../../../public/ellipseOrange.svg'
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';
import { BsArrowReturnLeft } from 'react-icons/bs'

interface SingleBlogProps {
  data: {
    seoData: SanitySeo,
    blog: SanityBlog,
    homePageData: {
      about: SanityAbout,
      footer: SanityFooter,
    }
  }
}

const Index: NextPage<SingleBlogProps> = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>
          <h1 className="text-center font-medium text-lg mt-5">Loading ...</h1>
      </div>
    ) 
  }

  if (!data.blog) {
    return (
      <div>
        <h1 className="text-center font-medium text-lg mt-5">Nothing found!</h1>
      </div>
    )  
  }



  const {
    blog: {
      title,
      blogContent,
      coverImage,
      topics,
      author,
      _id,
      slug,
      summary},
      homePageData
  } = data;

  const blogUrl = `https://opensauced.pizza/blog/${slug?.current}`;

  return (
    <>
      <Head>
        <title>Open Sauced | Blog</title>
        <meta name="title" content={title}></meta>
        <meta name="description" content={summary} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta
          property="og:image"
          content={coverImage as unknown as string}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={blogUrl} />
        <meta property="twitter:title" content={title} />
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

        
          <h1 className="font-semibold text-2xl text-gray-700 mt-[100px] mb-5 ">{title}</h1>

          <div className='flex items-center gap-x-2 mb-5 justify-end'>
            <Link href={`https://twitter.com/intent/tweet?text=Check out the blog! ${blogUrl}`}>
              <a target="_blank" rel="noopener noreferrer">
                <BsTwitter className='text-xl text-gray-800'/>
              </a>
            </Link>
            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}>
              <a target="_blank" rel="noopener noreferrer">
                <BsLinkedin className='text-xl text-gray-800'/>
              </a>
            </Link>
            <Link href={`https://news.ycombinator.com/submitlink?u=${blogUrl}t=${title}`}>
              <a target="_blank" rel="noopener noreferrer">
                <FaHackerNewsSquare className='text-xl text-gray-800'/>
              </a>
            </Link>
          <div>

          </div>
          </div>

          <div className="rounded-sm w-full max-h-[50vh] overflow-hidden">
            { 
              coverImage &&
              <Image objectFit="cover" alt={title} width={1100} height={900} layout="responsive" src={coverImage as unknown as string}/>
            }
          </div>
          <div className="flex gap-2 w-full flex-wrap items-center mt-5 tablet:mt-5 mb-3">
            <RiHashtag size={18}/>
            {
              topics?.slice(0,6).map( (topic, index) => (
                <div key={_id+index} className="flex items-center gap-1 overflow-hidden">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>

                  <p className="text-sm">{topic}</p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-x-1">
            <BiUserCircle size={18} className="text-gray-600"/>
            <p className="text-gray-600 font-semibold text-sm">{author}</p>
          </div>
          <div className="py-6">
            <p className="text-lg styledDocument">
              <PortableText value={blogContent as unknown as [] | []}/>
            </p>
          </div>

          <div className="flexitems-center my-6 cursor-pointer">
            <Link passHref href={"https://opensauced.pizza/blog"}>
              <div className='flex gap-x-2 items-center'>
                <BsArrowReturnLeft/>
                <p className="text-sm font-semibold text-gray-800">Back</p>
              </div>
            </Link>
          </div>
        </BlogBackgroundDrip>
      </div>
      <Footer footer={homePageData.footer as unknown as SanityFooter[] || []} />
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
    fallback: true
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