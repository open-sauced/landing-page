import sanityClient from '@sanity/client'
import { SanityAbout, SanityCalender, SanityFeature, SanityGithubMock, SanitySeo, SanityTestimonial, SanityFooter, SanitySaucyBlog, SanityBlog } from '../types/schema'

const client = sanityClient({
  projectId: 'r7m53vrk',
  dataset: 'production',
  token:
    'sk6OanHgHjyCsp3AtPZN9a5izH8tAXInlzsgYMr6PqMSJv60vb2DE3dBeEToqm8tSvjTgF5IiETTZPkz7o716xDQhHdmLSPdvypcPL9a0d2pyqQ3rPmXekkLFkjbtMaTBqwwmkAvzB3PJB0MxaGw85Y0Q0iHWymcumgRaXUI30FJooEPm1md',
  useCdn: false,
  apiVersion: '2021-10-21',
  ignoreBrowserTokenWarning: true,
})

export const getHomePageData: () => Promise<{
about: SanityAbout,
githubMock: SanityGithubMock,
calender: SanityCalender,
feature: SanityFeature[],
testimonial: SanityTestimonial[],
footer: SanityFooter[]

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

  const githubMockData: SanityGithubMock = await client.fetch(`*[_type == 'githubMock'][0]{
    ...,
    "mockimage": mockimage.asset->url
  }`);

  const getCalenderData: SanityCalender = await client.fetch(`*[_type == 'calender'][0]{
    ...,
    "calenderImage": calenderImage.asset->url
  }`);

  const getFeatureData: SanityFeature[] = await client.fetch(`*[_type == 'feature'] | order(_createdAt asc) {
    ...,
    "previewImage": previewImage.asset->url,
    "previewVideo": previewVideo.asset->url
  }`);

  const getTestimonialData: SanityTestimonial[] = await client.fetch(`*[_type == 'testimonial'] | order(_createdAt asc) {
    ...,
    "userImage": userImage.asset->url,
  }`);

  const getFooterData: SanityFooter[] = await client.fetch(`*[_type == 'footer'] | order(_createdAt asc) {
    ...,
    "icon": icon.asset->url,
  }`);
  




  return {
    about: aboutData,
    githubMock: githubMockData,
    calender: getCalenderData,
    feature: getFeatureData,
    testimonial: getTestimonialData,
    footer: getFooterData

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

export const getFeaturePageDataBySlug: ( slug: string  ) => Promise<SanityFeature> = async ( slug: string  ) => {
  const getFeatureData: SanityFeature = await client.fetch(`*[_type == 'feature' && slug.current == '${slug}'][0] {
    ...,
    "previewImage": previewImage.asset->url,
    "previewVideo": previewVideo.asset->url
  }`);

  return getFeatureData;

}

export const getSaucyBlogs: () => Promise<SanitySaucyBlog> = async () => {
  const saucyBlog: SanitySaucyBlog = await client.fetch(
    `*[_type == 'saucyBlog'] {
      ...,
      "coverImage": coverImage.asset->url,
    }`);

  return saucyBlog;
}

export const getBlogs: () => Promise<SanityBlog> = async () => {
  const saucyBlog: SanityBlog = await client.fetch(
    `*[_type == 'blog'] {
      ...,
      "coverImage": coverImage.asset->url,
    }`);

  return saucyBlog;
}