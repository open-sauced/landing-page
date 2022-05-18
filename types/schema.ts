import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * About
 *
 *
 */
export interface SanityAbout extends SanityDocument {
  _type: 'about'

  /**
   * Navigation URLs — `array`
   *
   *
   */
  navigationURLs?: Array<SanityKeyedReference<SanityNavigation>>

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * CTA Button Label — `string`
   *
   *
   */
  CTAButtonLabel?: string

  /**
   * CTA Button URL — `url`
   *
   *
   */
  CTAButtonURL?: string

  /**
   * Projects Button Label — `string`
   *
   *
   */
  projectsButtonLabel?: string

  /**
   * Projects Button URL — `url`
   *
   *
   */
  projectsButtonUrl?: string

  /**
   * Users — `array`
   *
   *
   */
  users?: Array<SanityKeyedReference<SanityUser>>
}

/**
 * User
 *
 *
 */
export interface SanityUser extends SanityDocument {
  _type: 'user'

  /**
   * Name — `string`
   *
   *
   */
  name?: string

  /**
   * Website — `url`
   *
   *
   */
  website?: string

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Navigation
 *
 *
 */
export interface SanityNavigation extends SanityDocument {
  _type: 'navigation'

  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * URL — `url`
   *
   *
   */
  url?: string
}

/**
 * SEO
 *
 *
 */
export interface SanitySeo extends SanityDocument {
  _type: 'seo'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Description — `string`
   *
   *
   */
  description?: string

  /**
   * URL — `url`
   *
   *
   */
  url?: string

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * GitHub Mock
 *
 *
 */
export interface SanityGithubMock extends SanityDocument {
  _type: 'githubMock'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Mock Image — `image`
   *
   *
   */
  mockimage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Calender
 *
 *
 */
export interface SanityCalender extends SanityDocument {
  _type: 'calender'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Calender Image — `image`
   *
   *
   */
  calenderImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Feature
 *
 *
 */
export interface SanityFeature extends SanityDocument {
  _type: 'feature'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Preview Video Url — `url`
   *
   *
   */
  previewVideoUrl?: string

  /**
   * Description — `string`
   *
   *
   */
  description?: string
}

/**
 * Testimonial
 *
 *
 */
export interface SanityTestimonial extends SanityDocument {
  _type: 'testimonial'

  /**
   * Twitter username — `string`
   *
   *
   */
  twitterUsername?: string

  /**
   * Twitter Name — `string`
   *
   *
   */
  twitterName?: string

  /**
   * User Image — `image`
   *
   *
   */
  userImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * date — `date`
   *
   *
   */
  date?: string

  /**
   * Testimonial — `string`
   *
   *
   */
  testimonial?: string

  /**
   * Tweet Link — `url`
   *
   *
   */
  tweetLink?: string
}

/**
 * Footer
 *
 *
 */
export interface SanityFooter extends SanityDocument {
  _type: 'footer'

  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * Url — `url`
   *
   *
   */
  url?: string

  /**
   * Icon — `image`
   *
   *
   */
  icon?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type Documents =
  | SanityAbout
  | SanityUser
  | SanityNavigation
  | SanitySeo
  | SanityGithubMock
  | SanityCalender
  | SanityFeature
  | SanityTestimonial
  | SanityFooter
