import sanityClient from '@sanity/client'
import {
  SanityAbout,
  SanityCalender,
  SanityFeature,
  SanityGithubMock,
  SanitySeo,
  SanityTestimonial,
  SanityFooter,
  SanityFeaturedBlog,
  SanityBlog,
  SanityPress,
  SanityKeyedReference,
  SanityNavigation,
} from '../types/schema'

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2021-10-21',
  ignoreBrowserTokenWarning: true,
})

type CommonData = () => Promise<{
  navigationLinks: SanityNavigation[]
  seoData: SanitySeo
  footer: SanityFooter[]
}>

export const getCommonData: CommonData = async () => {
  const navigationLinks = await client.fetch(
    `
    *[_id == "da83ea19-890f-43be-9757-d4eab5271392"][0] {
	      navigationURLs[]->,
      }
    `
  )
  const seoData = await getSEOData()
  const footer =
    await await client.fetch(`*[_type == 'footer'] | order(_createdAt asc) {
    ...,
    "icon": icon.asset->url,
  }`)

  return {
    navigationLinks,
    seoData,
    footer,
  }
}

export const getHomePageData: () => Promise<{
  about: SanityAbout
  githubMock: SanityGithubMock
  calender: SanityCalender
  feature: SanityFeature[]
  testimonial: SanityTestimonial[]
}> = async () => {
  const aboutData = await client.fetch(
    `
    *[_id == "da83ea19-890f-43be-9757-d4eab5271392"][0] {
	CTAButtonLabel,
	CTAButtonURL,
	navigationURLs[]->,
	"previewImage": previewImage.asset->url,
	subtitle,
	title,
  projectsButtonLabel,
  projectsButtonUrl,
	users[]->{
	  ...,
	  "logo": logo.asset->url
	},
      }
    `
  )

  const githubMockData: SanityGithubMock =
    await client.fetch(`*[_type == 'githubMock'][0]{
    ...,
    "mockimage": mockimage.asset->url
  }`)

  const getCalenderData: SanityCalender =
    await client.fetch(`*[_type == 'calender'][0]{
    ...,
    "calenderImage": calenderImage.asset->url
  }`)

  const getFeatureData: SanityFeature[] =
    await client.fetch(`*[_type == 'feature' && !(_id in path('drafts.**'))] | order(_createdAt asc) {
    ...,
    "previewImage": previewImage.asset->url,
    "previewVideo": previewVideo.asset->url
  }`)

  const getTestimonialData: SanityTestimonial[] =
    await client.fetch(`*[_type == 'testimonial' && !(_id in path('drafts.**')) ] | order(_createdAt asc) {
    ...,
    "userImage": userImage.asset->url,
  }`)

  return {
    about: aboutData,
    githubMock: githubMockData,
    calender: getCalenderData,
    feature: getFeatureData,
    testimonial: getTestimonialData,
  }
}

export const getSEOData: () => Promise<SanitySeo> = async () => {
  const seoData = await client.fetch(
    `
    *[_id == "fab1dc19-7089-4b59-ac49-3481046078fc"][0] {
	...,
	"image": image.asset->url
      }
    `
  )

  return seoData
}

export const getFeaturePageDataBySlug: (
  slug: string
) => Promise<SanityFeature> = async (slug: string) => {
  const getFeatureData: SanityFeature =
    await client.fetch(`*[_type == 'feature' && slug.current == '${slug}'][0] {
    ...,
    "previewImage": previewImage.asset->url,
    "previewVideo": previewVideo.asset->url
  }`)

  return getFeatureData
}

export const getFeaturedBlogs: () => Promise<
  SanityFeaturedBlog[]
> = async () => {
  const saucyBlog: SanityFeaturedBlog[] = await client.fetch(
    `*[_type == 'featuredBlog'] {
      ...,
      "coverImage": coverImage.asset->url,
    }`
  )

  return saucyBlog
}

export const getBlogs: (limit: number) => Promise<SanityBlog[]> = async (
  limit: number = 2
) => {
  const saucyBlog: SanityBlog[] = await client.fetch(
    `*[_type == 'blog' && !(_id in path('drafts.**'))] {
      ...,
      "coverImage": coverImage.asset->url,
    }[0..${limit - 1}]`
  )

  return saucyBlog
}

export const getAllBlogs: () => Promise<SanityBlog[]> = async () => {
  const allBlogs: SanityBlog[] = await client.fetch(
    `*[_type == 'blog' && !(_id in path('drafts.**'))]  {
      ...,
      "coverImage": coverImage.asset->url,
    }`
  )

  return allBlogs
}

export const getBlogBySlug: (slug: string) => Promise<SanityBlog> = async (
  slug: string
) => {
  const getBlogData: SanityBlog =
    await client.fetch(`*[_type == 'blog' && slug.current == '${slug}'][0] {
    ...,
    "coverImage": coverImage.asset->url,
  }`)
  return getBlogData
}

export const getFeaturedBlogBySlug: (
  slug: string
) => Promise<SanityFeaturedBlog> = async (slug: string) => {
  const getBlogData: SanityFeaturedBlog =
    await client.fetch(`*[_type == 'featuredBlog' && slug.current == '${slug}'][0] {
    ...,
    "coverImage": coverImage.asset->url,
  }`)
  return getBlogData
}

export const getPressData: () => Promise<SanityPress> = async () => {
  const getPressData: SanityPress = await client.fetch(`*[_type == 'press'][0] {
    ...,
    "featureImage": featureImage.asset->url,
    "AllAssets": AllAssets.asset->url,
    openSaucedLogo[]-> {
      ...,
      "svgLogo": svgLogo.asset->url,
      "pngLogo": pngLogo.asset->url,
    },
  }`)
  return getPressData
}
