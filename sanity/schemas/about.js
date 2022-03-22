export default {
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    {
      title: 'Navigation URLs',
      name: 'navigationURLs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navigation' }],
        },
      ],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      required: true,
    },
    {
      title: 'Preview Image',
      name: 'previewImage',
      type: 'image',
      required: true,
    },
    {
      title: 'CTA Button Label',
      name: 'CTAButtonLabel',
      type: 'string',
      required: true,
    },
    {
      title: 'CTA Button URL',
      name: 'CTAButtonURL',
      type: 'url',
      required: true,
    },
    {
      title: 'Users',
      name: 'users',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
  ],
}
