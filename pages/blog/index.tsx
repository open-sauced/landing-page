import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { getBlogs, getHomePageData, getFeaturedBlogs, getSEOData } from '../../lib/sanity'
import Head from 'next/head'
import { SanityAbout, SanityBlog, SanityFeaturedBlog, SanityNavigation, SanitySeo } from '../../types/schema'
import BlogBackgroundDrip from '../../components/BlogBackgroundDrip'
import Navigation from '../../components/Header'
import { FaPizzaSlice } from 'react-icons/fa';
import { RiHashtag } from 'react-icons/ri';
import { TiWorld } from 'react-icons/ti'
import { BiTime } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import ellipseOrange from '../../public/ellipseOrange.svg'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPageProps {
  data: {
    homePageData: {
      about: SanityAbout,
    }
    seoData: SanitySeo,
    featuredBlog: SanityFeaturedBlog[],
  }
}

const Index: NextPage<BlogPageProps> = ({ data: {seoData, homePageData, featuredBlog} }) => {
  const [blogs, setBlogs] = useState<SanityBlog[] | []>([])
  const [blogLimit, setBlogLimit] = useState(3);
  const [loadingBlog, setLoadingBlog] = useState(false);

  const getBlogLink = (isNative: boolean = false, slug: string="", blogUrl: string=""): string => {
    const link = isNative ? `/blog/${slug}` : blogUrl
    return link;
  };
  
  useEffect(() => {
    const fetchBlog = async() => {
      try {
        // const blogs = await getBlogs(blogLimit);
        // setBlogs(blogs as unknown as SanityBlog[]);
        setLoadingBlog(true);
        await getBlogs(blogLimit).
        then((blogs) =>
          setBlogs(blogs as unknown as SanityBlog[]))
          setLoadingBlog(false)
      } catch (error) {
        
      }
    } 
    fetchBlog();
  }, [blogLimit])
  
  const handleLoadMore = () => {
    setBlogLimit(blogLimit+1)
  }


  return (
    <>
     <Head>
        <title>Open Sauced</title>
        <meta name="title" content={seoData.title}></meta>
        <meta name="description" content={seoData.description} />
        <link rel="icon" href="/favicon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta
          property="og:image"
          content={seoData.image as unknown as string}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta
          property="twitter:image"
          content={seoData.image as unknown as string}
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

        <h1 className="text-center font-thin tracking-[1rem] text-[4rem] py-32">Blog</h1>
        
        <div className="py-[15px] flex items-center gap-x-[8px]">
          <FaPizzaSlice size={25} className="text-gray-800"/>
          <h6 className="font-semibold text-[25px] text-gray-800">Featured</h6>
        </div>
        <div className="flex flex-col tablet:flex-row gap-x-4 gap-y-10">
          {
            featuredBlog.map( ({_id, title, summary, author, readTime, topics, blogUrl, isNative, slug, coverImage}) => (
              <div key={_id} className=" flex-grow">
                <Link passHref href={getBlogLink(isNative, slug?.current, blogUrl )}>
                  <div className="rounded-[15px] w-full h-auto overflow-hidden cursor-pointer">
                    <Image objectFit="cover" alt={title} width={1100} height={900} layout="responsive" src={coverImage as unknown as string}/>
                  </div>
                </Link>

                <div className="mt-[20px]">
                  <div className="flex gap-[8px] w-full flex-wrap items-center mt-[20px] tablet:mt-[50px] mb-[15px]">
                    {/* <RiHashtag size={18}/> */}
                    {
                      topics?.slice(0,6).map( (topic, index) => (
                        <div key={_id+index} className="flex items-center gap-[5px] min-h-[6px] overflow-hidden">
                          <div className="w-[6px] h-[6px] bg-orange-600 rounded-full"></div>

                          <p className="text-sm">{topic}</p>
                        </div>
                      ))
                    }
                  </div>

                  <Link href={getBlogLink(isNative, slug?.current, blogUrl )} passHref>
                    <h6 className="font-bold text-[17px] text-gray-700 cursor-pointer">{title}</h6>
                  </Link>
                  
                  <div className="flex items-center gap-x-4 mt-[5px] mb-[15px]">
                    <div className="flex items-center gap-x-[5px]">
                      <BiTime size={18} className="text-gray-600"/>

                      <p className="text-gray-600 font-semibold text-[14px]">{readTime} mins read</p>
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                      <BiUserCircle size={18} className="text-gray-600"/>

                      <p className="text-gray-600 font-semibold text-[14px]">{author}</p>
                    </div>
                  </div>
                  
                  <Link href={getBlogLink(isNative, slug?.current, blogUrl )} passHref>
                    <p className="text-[18px] text-gray-700 mt-[10px] tablet:mt-[30px] cursor-pointer">{summary?.slice(0,180)}</p>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        </BlogBackgroundDrip>

        <div className="pt-[0] laptop:pt-[100px]">
          <div className="py-[15px] flex items-center gap-x-[8px]">
            <TiWorld size={25} className="text-gray-800"/>
            <h6 className="font-semibold text-[25px] text-gray-800  ">Explore</h6>
          </div>
          <div className="flex flex-col gap-y-6">
            {
              blogs &&
              blogs.map( ({ _id, title, summary, author, readTime, topics, blogUrl, isNative, slug, coverImage }) => (
                <div key={_id}>
                  <div className="flex flex-col tablet:flex-row gap-x-[20px]">
                    <div className="flex-1">
                      <Link href={getBlogLink(isNative, slug?.current, blogUrl )} passHref>
                        <div className="rounded-[15px] cursor-pointer overflow-hidden bg-gray-100 max-h-[245px]">
                          <Image objectFit="cover" alt={title} width={1100} height={900} layout="responsive" src={coverImage as unknown as string}/>
                        </div>
                      </Link>
                      <div>
                      </div>
                    </div>
                    <div className="flex-1 mt-[15px] tablet:mt-0">
                      <Link href={getBlogLink(isNative, slug?.current, blogUrl )} passHref>
                        <h1 className="font-bold text-[20px] cursor-pointer text-gray-700">{title}</h1>
                      </Link>

                      <div className="flex gap-[8px] items-center mt-[10px] mb-[20px]">
                        <RiHashtag size={18}/>
                          {
                            topics?.map( (topic: string, index: number) => (
                              <div key={topic+index+1} className="flex items-center gap-[5px] min-h-[6px]">
                                <div className="w-[6px] h-[6px] bg-orange-600 rounded-full"></div>

                                <p className="text-sm">{topic}</p>
                              </div>
                            ))
                          }
                      </div>
                      
                      <Link href={getBlogLink(isNative, slug?.current, blogUrl )} passHref>
                        <p className="text-[18px] cursor-pointer hidden laptop:block">{summary?.slice(0,180)}</p>
                      </Link>

                      <div className="flex items-center gap-x-4 mt-[5px] mb-[15px]">
                        <div className="flex items-center gap-x-[5px]">
                          <BiTime size={18} className="text-gray-600"/>

                          <p className="text-gray-600 font-semibold text-[14px]">{readTime} mins read</p>
                        </div>
                        <div className="flex items-center gap-x-[5px]">
                          <BiUserCircle size={18} className="text-gray-600"/>

                          <p className="text-gray-600 font-semibold text-[14px]">{author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href={getBlogLink(isNative, slug?.current, blogUrl )} passHref>
                    <p className="text-[18px] cursor-pointer hidden tablet:block laptop:hidden mt-[20px] mb-[30px]">{summary?.slice(0,180)}</p>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center my-[30px]">
          <div onClick={handleLoadMore} className="flex gap-x-3 justify-center items-center h-[40px] w-[150px] cursor-pointer rounded-[20px] shadow-orange-600 shadow">
            <div className="w-[20px] h-[20px] rounded-full">
              <Image alt='vector art' src={ellipseOrange}/>
            </div>
            <p className="text-[15px] font-semibold text-gray-600">{loadingBlog ? "Loading .." : "Load more"}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const [seoData, homePageData, featuredBlog] = await Promise.all([
    getSEOData(),
    getHomePageData(),
    getFeaturedBlogs(),
  ])

  const data = {seoData, homePageData, featuredBlog}

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
