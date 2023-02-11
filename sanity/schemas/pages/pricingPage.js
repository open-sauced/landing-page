import { FaMoneyCheckAlt } from 'react-icons/fa'

export default {
  title: 'Pricing Page',
  name: 'pricingPage',
  type: 'object',
  icon: FaMoneyCheckAlt,
  fields: [
    {
      title: 'Introduction Section',
      name: 'introduction',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'text',
          description: 'Heading of the section.'
        },
        {
          title: 'Subheading',
          name: 'subheading',
          type: 'text',
          description: 'Subheading of the section.'
        },
      ]
    },
    {
      title: 'Package Options',
      name: 'packageOptions',
      type: 'array',
      description: 'List of all the available packages to purchase.',
      of: [
        {
          title: 'Package details',
          name: 'packageDetails',
          type: 'object',
          fields: [
            {
              title: 'Package Name',
              name: 'packageName',
              type: 'string',
            },
            {
              title: 'Price for price.',
              name: 'packagePrice',
              type: 'number',
              description: 'Enter a monthly price. (Enter "0" if the package is for free, enter "-1" if the price is not applicable)',
            },
            {
              title: 'Key features',
              name: 'keyFeatures',
              type: 'array',
              description: 'The key features that are included in the package.',
              of: [
                {
                  title: 'Feature',
                  name: 'feature',
                  type: 'string',
                }
              ]
            },
            {
              title: 'CTA',
              name: 'cta',
              type: 'object',
              description: 'Call to action for the package.',
              fields: [
                {
                  title: 'CTA Text',
                  name: 'ctaText',
                  type: 'string',
                },
                {
                  title: 'CTA Link',
                  name: 'ctaLink',
                  type: 'string',
                }
              ]
            }
          ]  
        },        
      ]
    },
    {
      title: 'Premium feature Introduction',
      name: 'premiumFeatureIntro',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'text',
          description: 'Heading of the section.'
        },
        {
          title: 'Subheading',
          name: 'subheading',
          type: 'text',
          description: 'Subheading of the section.'
        },
      ]
    },
    {
      title: 'Premium Features Details',
      name: 'premiumFeatures',
      type: 'array',
      description: 'Details section for the premium features.',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Feature title',
              name: 'feature',
              type: 'string',
            },
            {
              title: 'Feature Description',
              name: 'featureDescription',
              description: 'Detailed description of the feature.',
              type: 'text',
            },
            {
              title: 'Feature Icon',
              name: 'featureIcon',
              description: 'This is the icon that will be displayed for the feature.',
              type: 'image',
            }
          ]
        }
      ]
    }
  ]
}