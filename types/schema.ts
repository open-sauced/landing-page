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
 * Author
 *
 *
 */
export interface SanityAuthor extends SanityDocument {
  _type: 'author'

  /**
   * Name — `string`
   *
   *
   */
  name?: string

  /**
   * Bio — `markdown`
   *
   *
   */
  bio?: SanityMarkdown

  /**
   * Portrait — `image`
   *
   *
   */
  portrait?: {
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
   * URL — `string`
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

  /**
   * Title (Rich Text) — `array`
   *
   *
   */
  titleRich?: Array<SanityKeyed<SanityBlock>>
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

  /**
   * Title (Rich Text) — `array`
   *
   *
   */
  titleRich?: Array<SanityKeyed<SanityBlock>>
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

/**
 * Featured Blog
 *
 *
 */
export interface SanityFeaturedBlog extends SanityDocument {
  _type: 'featuredBlog'

  /**
   * Is it native blog? — `boolean`
   *
   *
   */
  isNative?: boolean

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Summary — `string`
   *
   *
   */
  summary?: string

  /**
   * Author — `string`
   *
   *
   */
  author?: string

  /**
   * Read Time — `number`
   *
   *
   */
  readTime?: number

  /**
   * Topic — `array`
   *
   *
   */
  topics?: Array<SanityKeyed<string>>

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Blog Url — `url`
   *
   *
   */
  blogUrl?: string

  /**
   * Blog Content — `array`
   *
   *
   */
  blogContent?: Array<SanityKeyed<SanityBlock>>
}

/**
 * Blog
 *
 *
 */
export interface SanityBlog extends SanityDocument {
  _type: 'blog'

  /**
   * Is it native blog? — `boolean`
   *
   * Please select yes if it is a native blog, for external blogs please select no.
   */
  isNative?: boolean

  /**
   * Title — `string`
   *
   * Please enter the title of the blog, title should be less than 100 characters.
   */
  title?: string

  /**
   * Summary — `string`
   *
   * Please enter the summary of the blog, this will be used in the blog listing page, summary should be less than 30 characters.
   */
  summary?: string

  /**
   * Author — `reference`
   *
   * Reference an Author document that wrote this blog
   */
  author?: SanityReference<SanityAuthor>

  /**
   * Published Date — `date`
   *
   * Please enter when this blog was written.
   */
  published_date?: string

  /**
   * Topic — `array`
   *
   * Please add the topics for the blog.
   */
  topics?: Array<SanityKeyed<string>>

  /**
   * Slug — `slug`
   *
   * Click generate button to generate the slug automatically, or you can enter the slug manually making sure it is unique.
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Cover Image — `image`
   *
   * Please select the cover image for the blog.
   */
  coverImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Social sharing image — `image`
   *
   * Click the dot icon on top of the right corner and then select browse.
   */
  ogImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Blog Url — `url`
   *
   * Please enter the blog url (Only if it is not a native blog).
   */
  blogUrl?: string

  /**
   * Blog Content — `markdown`
   *
   * Markdown content for the blog
   */
  blogContent?: SanityMarkdown
}

/**
 * Press
 *
 *
 */
export interface SanityPress extends SanityDocument {
  _type: 'press'

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
   * Feature Image — `image`
   *
   *
   */
  featureImage?: {
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
   * CTA Button Link — `string`
   *
   *
   */
  CTAButtonLink?: string

  /**
   * All Assets — `file`
   *
   *
   */
  AllAssets?: { _type: 'file'; asset: SanityReference<any> }

  /**
   * Last Updated — `date`
   *
   *
   */
  LastUpdated?: string

  /**
   * dos — `array`
   *
   *
   */
  dos?: Array<SanityKeyed<string>>

  /**
   * donts — `array`
   *
   *
   */
  donts?: Array<SanityKeyed<string>>

  /**
   * OpenSauced Logo — `array`
   *
   *
   */
  openSaucedLogo?: Array<SanityKeyedReference<SanityOpenSaucedLogo>>
}

/**
 * OpenSauced Logo
 *
 *
 */
export interface SanityOpenSaucedLogo extends SanityDocument {
  _type: 'openSaucedLogo'

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
   * Black Background? — `boolean`
   *
   *
   */
  isBlackBG?: boolean

  /**
   * SVG Logo — `image`
   *
   *
   */
  svgLogo?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * PNG Logo — `image`
   *
   *
   */
  pngLogo?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Changelog
 *
 *
 */
export interface SanityChangelog extends SanityDocument {
  _type: 'changelog'

  /**
   * Title — `string`
   *
   * Please enter the title of the changelog.
   */
  title?: string

  /**
   * Category — `object`
   *
   * Please select the category for the changelog.
   */
  changelogCategory?: {
    _type: 'changelogCategory'
    /**
     * Category — `reference`
     *
     *
     */
    changelogCategory?: SanityReference<SanityChangelogCategory>
  }

  /**
   * Date — `date`
   *
   * Please select the date for the changelog.
   */
  date?: string

  /**
   * Topic — `array`
   *
   * Please add the topics for the content.
   */
  topics?: Array<SanityKeyed<string>>

  /**
   * Slug — `slug`
   *
   * Click generate button to generate the slug automatically, or you can enter the slug manually making sure it is unique.
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Changelog Summary — `string`
   *
   * Please enter a short (less than 50 characters) summary of the changelog entry.
   */
  summary?: string

  /**
   * Changelog Content — `markdown`
   *
   * Markdown content for the changelog
   */
  changelogContent?: SanityMarkdown
}

/**
 * Changelog Category
 *
 *
 */
export interface SanityChangelogCategory extends SanityDocument {
  _type: 'changelogCategory'

  /**
   * Label — `string`
   *
   *
   */
  label?: string
}

export type SanityPricingPage = {
  _type: 'pricingPage'
  /**
   * Introduction Section — `object`
   *
   *
   */
  introduction?: {
    _type: 'introduction'
    /**
     * Heading — `text`
     *
     * Heading of the section.
     */
    heading?: string

    /**
     * Subheading — `text`
     *
     * Subheading of the section.
     */
    subheading?: string
  }

  /**
   * Package Options — `array`
   *
   * List of all the available packages to purchase.
   */
  packageOptions?: Array<
    SanityKeyed<{
      _type: 'packageDetails'
      /**
       * Package Name — `string`
       *
       *
       */
      packageName?: string

      /**
       * Price for price. — `number`
       *
       * Enter a monthly price. (Enter "0" if the package is for free, enter "-1" if the price is not applicable)
       */
      packagePrice?: number

      /**
       * Key features — `array`
       *
       * The key features that are included in the package.
       */
      keyFeatures?: Array<SanityKeyed<string>>

      /**
       * CTA — `object`
       *
       * Call to action for the package.
       */
      cta?: {
        _type: 'cta'
        /**
         * CTA Text — `string`
         *
         *
         */
        ctaText?: string

        /**
         * CTA Link — `string`
         *
         *
         */
        ctaLink?: string
      }
    }>
  >

  /**
   * Premium feature Introduction — `object`
   *
   *
   */
  premiumFeatureIntro?: {
    _type: 'premiumFeatureIntro'
    /**
     * Heading — `text`
     *
     * Heading of the section.
     */
    heading?: string

    /**
     * Subheading — `text`
     *
     * Subheading of the section.
     */
    subheading?: string
  }

  /**
   * Premium Features Details — `array`
   *
   * Details section for the premium features.
   */
  premiumFeatures?: Array<
    SanityKeyed<{
      /**
       * Feature title — `string`
       *
       *
       */
      feature?: string

      /**
       * Feature Description — `text`
       *
       * Detailed description of the feature.
       */
      featureDescription?: string

      /**
       * Feature Icon — `image`
       *
       * This is the icon that will be displayed for the feature.
       */
      featureIcon?: {
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
      }
    }>
  >
}

export type SanityAboutPage = {
  _type: 'aboutPage'
  /**
   * Introduction section — `object`
   *
   *
   */
  introduction?: {
    _type: 'introduction'
    /**
     * Heading — `text`
     *
     * Heading of the section.
     */
    heading?: string

    /**
     * Subheading — `text`
     *
     * Subheading of the section.
     */
    subheading?: string
  }

  /**
   * Numeral highlight — `array`
   *
   *
   */
  numeralHighlight?: Array<
    SanityKeyed<{
      /**
       * Numerical value — `string`
       *
       * The numerical value to be highlighted. Accepts numbers and strings. Example: "1,000" or "1K".
       */
      numericalValue?: string

      /**
       * Context — `string`
       *
       * The context of the numerical value.
       */
      context?: string
    }>
  >

  /**
   * Social links — `array`
   *
   * Open Sauced social links to be displayed.
   */
  socialLinks?: Array<
    SanityKeyed<{
      /**
       * Social link placeholder — `string`
       *
       * Placeholder for the social link. Example: "Twitter"
       */
      socialLinkPlaceholder?: string

      /**
       * Social Url — `string`
       *
       * The actual social link.
       */
      socialUrl?: string

      /**
       * Social icon — `image`
       *
       * The social icon to be displayed.
       */
      socialIcon?: {
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
      }
    }>
  >

  /**
   * Services section — `array`
   *
   * Services by Open Sauced.
   */
  services?: Array<
    SanityKeyed<{
      /**
       * Service name — `string`
       *
       * Name of the service.
       */
      serviceName?: string

      /**
       * Service url — `string`
       *
       * The url of the service. Example: "https://app.opensauced.pizza".
       */
      serviceUrl?: string

      /**
       * Service description — `text`
       *
       * Description of the service.
       */
      serviceDescription?: string
    }>
  >
}

export type SanityHomePage = {
  _type: 'homePage'
  /**
   * Hero — `object`
   *
   * All information here will be displayed in the hero section of the home page.
   */
  hero?: {
    _type: 'hero'
    /**
     * Title — `string`
     *
     * Title will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading will be displayed in larger font size below the title.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * The summary of the Open Sauced should be written here.
     */
    description?: string

    /**
     * CTA — `array`
     *
     *
     */
    cta?: Array<
      SanityKeyed<{
        /**
         * CTA Label — `string`
         *
         *
         */
        ctaLabel?: string

        /**
         * CTA Link — `string`
         *
         *
         */
        ctaLink?: string
      }>
    >

    /**
     * Hero Image — `image`
     *
     * This image will be displayed on the right side of the hero section.
     */
    image?: {
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }

    /**
     * Users — `array`
     *
     *
     */
    users?: Array<SanityKeyedReference<SanityUser>>
  }

  /**
   * More heading — `array`
   *
   *
   */
  moreHeading?: Array<SanityKeyed<string>>

  /**
   * Top feature — `object`
   *
   * The most attractive feature of Open Sauced should be displayed here.
   */
  topFeature?: {
    _type: 'topFeature'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

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
   * CTA Section — `object`
   *
   *
   */
  ctaSection?: {
    _type: 'ctaSection'
    /**
     * Heading — `string`
     *
     * Heading for the CTA section.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * Description for the CTA section.
     */
    description?: string

    /**
     * CTA Label — `string`
     *
     *
     */
    ctaLabel?: string

    /**
     * CTA Link — `string`
     *
     *
     */
    ctaLink?: string
  }

  /**
   * Features — `array`
   *
   * All the features of Open Sauced should be displayed here.
   */
  features?: Array<
    SanityKeyed<{
      _type: 'feature'
      /**
       * Title — `string`
       *
       * Title will be displayed in smaller font size on top the heading.
       */
      title?: string

      /**
       * heading — `string`
       *
       * Heading will be displayed in larger font size bellow the title.
       */
      heading?: string

      /**
       * description — `text`
       *
       *
       */
      description?: string

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
    }>
  >

  /**
   * Second CTA Section — `object`
   *
   *
   */
  secondCtaSection?: {
    _type: 'secondCtaSection'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

    /**
     * CTA Label — `string`
     *
     *
     */
    ctaLabel?: string

    /**
     * CTA Link — `string`
     *
     *
     */
    ctaLink?: string
  }

  /**
   * Testimonials Section — `object`
   *
   *
   */
  testimonialsSection?: {
    _type: 'testimonialsSection'
    /**
     * Title — `string`
     *
     * Title for the testimonial section, it will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading for the testimonial section, it will be displayed in larger bellow the title font size.
     */
    heading?: string

    /**
     * Testimonials — `array`
     *
     *
     */
    testimonials?: Array<SanityKeyedReference<SanityTestimonial>>
  }

  /**
   * Blog Section — `object`
   *
   *
   */
  blogSection?: {
    _type: 'blogSection'
    /**
     * Title — `string`
     *
     * Title for the blog section, it will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading for the blog section, it will be displayed in larger bellow the title font size.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * Description for the blog section, it will be displayed bellow the heading.
     */
    description?: string
  }
}

export type SanityTeamsPage = {
  _type: 'teamsPage'
  /**
   * Hero — `object`
   *
   * All information here will be displayed in the hero section of the home page.
   */
  hero?: {
    _type: 'hero'
    /**
     * Title — `string`
     *
     * Title will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading will be displayed in larger font size below the title.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * The summary of the Open Sauced should be written here.
     */
    description?: string

    /**
     * CTA — `array`
     *
     *
     */
    cta?: Array<
      SanityKeyed<{
        /**
         * CTA Label — `string`
         *
         *
         */
        ctaLabel?: string

        /**
         * CTA Link — `string`
         *
         *
         */
        ctaLink?: string
      }>
    >

    /**
     * Hero Image — `image`
     *
     * This image will be displayed on the right side of the hero section.
     */
    image?: {
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }

    /**
     * Users — `array`
     *
     *
     */
    users?: Array<SanityKeyedReference<SanityUser>>
  }

  /**
   * Top Use Case — `object`
   *
   * An overview how teams can use OpenSauced for their engineering needs.
   */
  topUseCase?: {
    _type: 'topUseCase'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

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

    /**
     * Subsections — `array`
     *
     *
     */
    subsections?: Array<
      SanityKeyed<{
        _type: 'subsection'
        /**
         * Heading — `string`
         *
         *
         */
        heading?: string

        /**
         * Description — `text`
         *
         *
         */
        description?: string
      }>
    >
  }

  /**
   * Features — `array`
   *
   * All the features of Open Sauced should be displayed here.
   */
  features?: Array<
    SanityKeyed<{
      _type: 'feature'
      /**
       * Title — `string`
       *
       * Title will be displayed in smaller font size on top the heading.
       */
      title?: string

      /**
       * heading — `string`
       *
       * Heading will be displayed in larger font size bellow the title.
       */
      heading?: string

      /**
       * description — `text`
       *
       *
       */
      description?: string

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
    }>
  >

  /**
   * CTA Section — `object`
   *
   *
   */
  ctaSection?: {
    _type: 'ctaSection'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

    /**
     * CTA Label — `string`
     *
     *
     */
    ctaLabel?: string

    /**
     * CTA Link — `string`
     *
     *
     */
    ctaLink?: string
  }

  /**
   * Testimonials Section — `object`
   *
   *
   */
  testimonialsSection?: {
    _type: 'testimonialsSection'
    /**
     * Title — `string`
     *
     * Title for the testimonial section, it will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading for the testimonial section, it will be displayed in larger bellow the title font size.
     */
    heading?: string

    /**
     * Testimonials — `array`
     *
     *
     */
    testimonials?: Array<SanityKeyedReference<SanityTestimonial>>
  }
}

export type SanityStudentsPage = {
  _type: 'studentsPage'
  /**
   * Hero — `object`
   *
   * All information here will be displayed in the hero section of the home page.
   */
  hero?: {
    _type: 'hero'
    /**
     * Title — `string`
     *
     * Title will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading will be displayed in larger font size below the title.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * The summary of the Open Sauced should be written here.
     */
    description?: string

    /**
     * CTA — `array`
     *
     *
     */
    cta?: Array<
      SanityKeyed<{
        /**
         * CTA Label — `string`
         *
         *
         */
        ctaLabel?: string

        /**
         * CTA Link — `string`
         *
         *
         */
        ctaLink?: string
      }>
    >

    /**
     * Hero Image — `image`
     *
     * This image will be displayed on the right side of the hero section.
     */
    image?: {
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }

    /**
     * Users — `array`
     *
     *
     */
    users?: Array<SanityKeyedReference<SanityUser>>
  }

  /**
   * Features — `array`
   *
   * All the features of Open Sauced should be displayed here.
   */
  features?: Array<
    SanityKeyed<{
      _type: 'feature'
      /**
       * Title — `string`
       *
       * Title will be displayed in smaller font size on top the heading.
       */
      title?: string

      /**
       * heading — `string`
       *
       * Heading will be displayed in larger font size bellow the title.
       */
      heading?: string

      /**
       * description — `text`
       *
       *
       */
      description?: string

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
    }>
  >

  /**
   * CTA Section — `object`
   *
   *
   */
  ctaSection?: {
    _type: 'ctaSection'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

    /**
     * CTA Label — `string`
     *
     *
     */
    ctaLabel?: string

    /**
     * CTA Link — `string`
     *
     *
     */
    ctaLink?: string
  }

  /**
   * Testimonials Section — `object`
   *
   *
   */
  testimonialsSection?: {
    _type: 'testimonialsSection'
    /**
     * Title — `string`
     *
     * Title for the testimonial section, it will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading for the testimonial section, it will be displayed in larger bellow the title font size.
     */
    heading?: string

    /**
     * Testimonials — `array`
     *
     *
     */
    testimonials?: Array<SanityKeyedReference<SanityTestimonial>>
  }
}

export type SanityContributorsPage = {
  _type: 'contributorsPage'
  /**
   * Hero — `object`
   *
   * All information here will be displayed in the hero section of the home page.
   */
  hero?: {
    _type: 'hero'
    /**
     * Title — `string`
     *
     * Title will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading will be displayed in larger font size below the title.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * The summary of the Open Sauced should be written here.
     */
    description?: string

    /**
     * CTA — `array`
     *
     *
     */
    cta?: Array<
      SanityKeyed<{
        /**
         * CTA Label — `string`
         *
         *
         */
        ctaLabel?: string

        /**
         * CTA Link — `string`
         *
         *
         */
        ctaLink?: string
      }>
    >

    /**
     * Hero Image — `image`
     *
     * This image will be displayed on the right side of the hero section.
     */
    image?: {
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }

    /**
     * Users — `array`
     *
     *
     */
    users?: Array<SanityKeyedReference<SanityUser>>
  }

  /**
   * Top Use Case — `object`
   *
   * An overview how teams can use OpenSauced for their engineering needs.
   */
  topUseCase?: {
    _type: 'topUseCase'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

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

    /**
     * Subsections — `array`
     *
     *
     */
    subsections?: Array<
      SanityKeyed<{
        _type: 'subsection'
        /**
         * Heading — `string`
         *
         *
         */
        heading?: string

        /**
         * Description — `text`
         *
         *
         */
        description?: string
      }>
    >
  }

  /**
   * Features — `array`
   *
   * All the features of Open Sauced should be displayed here.
   */
  features?: Array<
    SanityKeyed<{
      _type: 'feature'
      /**
       * Title — `string`
       *
       * Title will be displayed in smaller font size on top the heading.
       */
      title?: string

      /**
       * heading — `string`
       *
       * Heading will be displayed in larger font size bellow the title.
       */
      heading?: string

      /**
       * description — `text`
       *
       *
       */
      description?: string

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
    }>
  >

  /**
   * CTA Section — `object`
   *
   *
   */
  ctaSection?: {
    _type: 'ctaSection'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

    /**
     * CTA Label — `string`
     *
     *
     */
    ctaLabel?: string

    /**
     * CTA Link — `string`
     *
     *
     */
    ctaLink?: string
  }

  /**
   * Testimonials Section — `object`
   *
   *
   */
  testimonialsSection?: {
    _type: 'testimonialsSection'
    /**
     * Title — `string`
     *
     * Title for the testimonial section, it will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading for the testimonial section, it will be displayed in larger bellow the title font size.
     */
    heading?: string

    /**
     * Testimonials — `array`
     *
     *
     */
    testimonials?: Array<SanityKeyedReference<SanityTestimonial>>
  }
}

export type SanityMaintainersPage = {
  _type: 'maintainersPage'
  /**
   * Hero — `object`
   *
   * All information here will be displayed in the hero section of the home page.
   */
  hero?: {
    _type: 'hero'
    /**
     * Title — `string`
     *
     * Title will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading will be displayed in larger font size below the title.
     */
    heading?: string

    /**
     * Description — `text`
     *
     * The summary of the Open Sauced should be written here.
     */
    description?: string

    /**
     * CTA — `array`
     *
     *
     */
    cta?: Array<
      SanityKeyed<{
        /**
         * CTA Label — `string`
         *
         *
         */
        ctaLabel?: string

        /**
         * CTA Link — `string`
         *
         *
         */
        ctaLink?: string
      }>
    >

    /**
     * Hero Image — `image`
     *
     * This image will be displayed on the right side of the hero section.
     */
    image?: {
      _type: 'image'
      asset: SanityReference<SanityImageAsset>
      crop?: SanityImageCrop
      hotspot?: SanityImageHotspot
    }

    /**
     * Users — `array`
     *
     *
     */
    users?: Array<SanityKeyedReference<SanityUser>>
  }

  /**
   * Top Use Case — `object`
   *
   * An overview how teams can use OpenSauced for their engineering needs.
   */
  topUseCase?: {
    _type: 'topUseCase'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

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

    /**
     * Subsections — `array`
     *
     *
     */
    subsections?: Array<
      SanityKeyed<{
        _type: 'subsection'
        /**
         * Heading — `string`
         *
         *
         */
        heading?: string

        /**
         * Description — `text`
         *
         *
         */
        description?: string
      }>
    >
  }

  /**
   * Features — `array`
   *
   * All the features of Open Sauced should be displayed here.
   */
  features?: Array<
    SanityKeyed<{
      _type: 'feature'
      /**
       * Title — `string`
       *
       * Title will be displayed in smaller font size on top the heading.
       */
      title?: string

      /**
       * heading — `string`
       *
       * Heading will be displayed in larger font size bellow the title.
       */
      heading?: string

      /**
       * description — `text`
       *
       *
       */
      description?: string

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
    }>
  >

  /**
   * CTA Section — `object`
   *
   *
   */
  ctaSection?: {
    _type: 'ctaSection'
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string

    /**
     * CTA Label — `string`
     *
     *
     */
    ctaLabel?: string

    /**
     * CTA Link — `string`
     *
     *
     */
    ctaLink?: string
  }

  /**
   * Testimonials Section — `object`
   *
   *
   */
  testimonialsSection?: {
    _type: 'testimonialsSection'
    /**
     * Title — `string`
     *
     * Title for the testimonial section, it will be displayed in smaller font size on top the heading.
     */
    title?: string

    /**
     * Heading — `string`
     *
     * Heading for the testimonial section, it will be displayed in larger bellow the title font size.
     */
    heading?: string

    /**
     * Testimonials — `array`
     *
     *
     */
    testimonials?: Array<SanityKeyedReference<SanityTestimonial>>
  }
}

export type Documents =
  | SanityAbout
  | SanityUser
  | SanityAuthor
  | SanityNavigation
  | SanitySeo
  | SanityGithubMock
  | SanityCalender
  | SanityFeature
  | SanityTestimonial
  | SanityFooter
  | SanityFeaturedBlog
  | SanityBlog
  | SanityPress
  | SanityOpenSaucedLogo
  | SanityChangelog
  | SanityChangelogCategory

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type SanityMarkdown = any
