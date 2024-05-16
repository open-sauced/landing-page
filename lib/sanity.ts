import sanityClient from '@sanity/client'
import {
  SanityFeature,
  SanitySeo,
  SanityFooter,
  SanityFeaturedBlog,
  SanityBlog,
  SanityPress,
  SanityNavigation,
  SanityPricingPage,
  SanityAboutPage,
  SanityHomePage,
  SanityChangelog,
  SanityTeamsPage,
  SanityAuthor,
  SanityContributorsPage,
  SanityMaintainersPage,
} from '../types/schema'

const client = sanityClient({
  projectId: 'r7m53vrk',
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

export const getHomePageData: () => Promise<SanityHomePage> = async () => {
  const homePageData = await client.fetch(
    `
    *[_type == "homePage"][0] {
      ...,
      hero {
        ...,
        "image": image.asset->url,
        users[] {
          ...,
          "name": *[ _type == "user" && _id == ^._ref][0].name,
          "website": *[ _type == "user" && _id == ^._ref][0].website,
          "logo": *[ _type == "user" && _id == ^._ref][0].logo.asset->url,
        }
      },
      topFeature {
        ...,
        "image": image.asset->url,
      },
      features[] {
        ...,
        "image": image.asset->url,
      },
      testimonialsSection {
        ...,
        testimonials[] {
          ...,
          "twitterUsername": *[ _type == "testimonial" && _id == ^._ref][0].twitterUsername,
          "twitterName": *[ _type == "testimonial" && _id == ^._ref][0].twitterName,
          "userImage": *[ _type == "testimonial" && _id == ^._ref][0].userImage.asset->url,
          "testimonial": *[ _type == "testimonial" && _id == ^._ref][0].testimonial,
          "testimonial": *[ _type == "testimonial" && _id == ^._ref][0].testimonial,
          "tweetLink": *[ _type == "testimonial" && _id == ^._ref][0].tweetLink,
        }
      }
    }
    `
  )
  
  return homePageData
}

export const getTeamsPageData: () => Promise<SanityTeamsPage> = async () => {
  const teamsPageData = await client.fetch(
    `
    *[_type == "teamsPage"][0] {
      ...,
      hero {
        ...,
        "image": image.asset->url,
        users[] {
          ...,
          "name": *[ _type == "user" && _id == ^._ref][0].name,
          "website": *[ _type == "user" && _id == ^._ref][0].website,
          "logo": *[ _type == "user" && _id == ^._ref][0].logo.asset->url,
        }
      },
      topUseCase {
        ...,
        "image": image.asset->url,
      },
      features[] {
        ...,
        "image": image.asset->url,
      },
    }
    `
  );
  return teamsPageData;
}

export const getMaintainersPageData: () => Promise<SanityMaintainersPage> = async () => {
  const maintainersPageData = await client.fetch(
    `
    *[_type == "maintainersPage"][0] {
      ...,
      hero {
        ...,
        "image": image.asset->url,
        users[] {
          ...,
          "name": *[ _type == "user" && _id == ^._ref][0].name,
          "website": *[ _type == "user" && _id == ^._ref][0].website,
          "logo": *[ _type == "user" && _id == ^._ref][0].logo.asset->url,
        }
      },
      topUseCase {
        ...,
        "image": image.asset->url,
      },
      features[] {
        ...,
        "image": image.asset->url,
      },
    }
    `
  );
  return maintainersPageData;
}

export const getContributorsPageData: () => Promise<SanityContributorsPage> = async () => {
  const contributorsPageData = await client.fetch(
    `
    *[_type == "contributorsPage"][0] {
      ...,
      hero {
        ...,
        "image": image.asset->url,
        users[] {
          ...,
          "name": *[ _type == "user" && _id == ^._ref][0].name,
          "website": *[ _type == "user" && _id == ^._ref][0].website,
          "logo": *[ _type == "user" && _id == ^._ref][0].logo.asset->url,
        }
      },
      topUseCase {
        ...,
        "image": image.asset->url,
      },
      features[] {
        ...,
        "image": image.asset->url,
      },
    }
    `
  );
  return contributorsPageData;
}

export const getStudentsPageData: () => Promise<SanityTeamsPage> = async () => {
  const teamsPageData = await client.fetch(
    `
    *[_type == "studentsPage"][0] {
      ...,
      hero {
        ...,
        "image": image.asset->url,
        users[] {
          ...,
          "name": *[ _type == "user" && _id == ^._ref][0].name,
          "website": *[ _type == "user" && _id == ^._ref][0].website,
          "logo": *[ _type == "user" && _id == ^._ref][0].logo.asset->url,
        }
      },
      features[] {
        ...,
        "image": image.asset->url,
      },
    }
    `
  );
  console.log('fetch', { teamsPageData });
  return teamsPageData;
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
      author->{
        ...,
        "portrait": portrait.asset->url
      }
    }[0..${limit - 1}]`
  )

  return saucyBlog
}

export const getAllBlogs: () => Promise<(Omit<SanityBlog, "author"> & { author: SanityAuthor })[]> = async () => {
  const allBlogs: (Omit<SanityBlog, "author"> & { author: SanityAuthor })[] = await client.fetch(
    `*[_type == 'blog' && !(_id in path('drafts.**'))] | order(_createdAt desc)  {
      ...,
      "coverImage": coverImage.asset->url,
      "ogImage": ogImage.asset->url,
      author->{
        ...,
        "portrait": portrait.asset->url
      }
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
    author->{
      ...,
      "portrait": portrait.asset->url
    }
  }`)
  return getBlogData
}

export const getFeaturedBlogBySlug: (
  slug: string
) => Promise<SanityFeaturedBlog> = async (slug: string) => {
  const getBlogData: SanityFeaturedBlog =
    await client.fetch(`*[_type == 'featuredBlog' && slug.current == '${slug}'][0] {
    ...,
    author->{
      ...,
      "portrait": portrait.asset->url
    },
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

export const getPricingPageData: () => Promise<SanityPricingPage> = async () => {
  const getPricingPageData: SanityPricingPage = await client.fetch(`*[_type == 'pricingPage'][0] {
    ...,
    premiumFeatures[] {
      ...,
      "featureIcon": featureIcon.asset->url,
    }
  }`)
  return getPricingPageData
}

export const getAboutPageData: () => Promise<SanityAboutPage> = async () => {
  const getAboutPageData: SanityAboutPage = await client.fetch(`*[_type == 'aboutPage'][0] {
    ...,
    socialLinks[] {
      ...,
      "socialIcon": socialIcon.asset->url,
    }
  }`)
  return getAboutPageData
}

export const getAllChangelog: () => Promise<SanityChangelog[]> = async () => {
  const allChangelog: SanityChangelog[] = await client.fetch(
    `*[_type == 'changelog' && !(_id in path('drafts.**'))] | order(_createdAt desc)  {
      ...,
    }`
  )
  return allChangelog
}

export const getChangelog: (limit: number) => Promise<SanityChangelog[]> = async (
  limit: number = 2
) => {
  const changelog: SanityChangelog[] = await client.fetch(
    `*[_type == 'changelog' && !(_id in path('drafts.**'))] | order(date desc) {
      ...,
    }[0..${limit - 1}]`
  )

  return changelog
}

export const getChangelogBySlug: (slug: string) => Promise<SanityChangelog> = async (slug) => {
  const changelog : SanityChangelog = await client.fetch(`
    *[_type == 'changelog' && !(_id in path('drafts.**')) && slug.current == '${slug}'] {
      ...,
    }[0]
  `);

  return changelog;
}

export const getLatestChangelogsExceptSlug: (slug: string) => Promise<SanityChangelog[]> = async (slug) => {
  const changelogs : SanityChangelog[] = await client.fetch(`
    *[_type == 'changelog' && !(_id in path('drafts.**')) && !(slug.current == '${slug}')] {
      ...,
    } [0...3]
  `)

  return changelogs;
}
