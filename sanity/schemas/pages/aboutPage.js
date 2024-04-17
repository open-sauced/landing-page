import { FaInfoCircle } from 'react-icons/fa'

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'object',
  icon: FaInfoCircle,
  fields: [
    {
      title: 'Introduction section',
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
      title: 'Numeral highlight',
      name: 'numeralHighlight',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Numerical value',
              name: 'numericalValue',
              type: 'string',
              description: 'The numerical value to be highlighted. Accepts numbers and strings. Example: "1,000" or "1K".'
            },
            {
              title: 'Context',
              name: 'context',
              type: 'string',
              description: 'The context of the numerical value.'
            }
          ]
        }
      ]
    },
    {
      title: 'Social links',
      name: 'socialLinks',
      type: 'array',
      description: 'Open Sauced social links to be displayed.',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Social link placeholder',
              name: 'socialLinkPlaceholder',
              type: 'string',
              description: 'Placeholder for the social link. Example: "Twitter"'
            },
            {
              title: 'Social Url',
              name: 'socialUrl',
              type: 'string',
              description: 'The actual social link.'
            },
            {
              title: 'Social icon',
              name: 'socialIcon',
              type: 'image',
              description: 'The social icon to be displayed.'
            }
          ]
        }
      ]
    },
    {
      title: 'Services section',
      name: 'services',
      type: 'array',
      description: 'Services by Open Sauced.',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Service name',
              name: 'serviceName',
              type: 'string',
              description: 'Name of the service.'
            },
            {
              title: 'Service url',
              name: 'serviceUrl',
              type: 'string',
              description: 'The url of the service. Example: "https://app.opensauced.pizza".'
            },
            {
              title: 'Service description',
              name: 'serviceDescription',
              type: 'text',
              description: 'Description of the service.'
            }
          ]
        }
      ]
    }
  ]
}