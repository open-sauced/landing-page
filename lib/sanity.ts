import sanityClient from '@sanity/client'
import { SanityAbout } from '../types/schema'

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
  about: SanityAbout
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
	users[]->{
	  ...,
	  "logo": logo.asset->url
	},
      }
    `
  )

  return {
    about: aboutData,
  }
}
