export default {
    title: 'Press',
    name: 'press',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Subtitle',
        name: 'subtitle',
        type: 'string',
      },
      {
        title: 'Feature Image',
        name: 'featureImage',
        type: 'image',
      },
      {
        title: 'CTA Button Label',
        name: 'CTAButtonLabel',
        type: 'string',
      },
      {
        title: 'CTA Button Link',
        name: 'CTAButtonLink',
        type: 'string',
      },
      {
        title: 'All Assets',
        name: 'AllAssets',
        type: 'file',
      },
      {
        title: 'Last Updated',
        name: 'LastUpdated',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
      {
        title: 'dos',
        name: 'dos',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'donts',
        name: 'donts',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'OpenSauced Logo',
        name: 'openSaucedLogo',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'openSaucedLogo' }],
          },
        ],
      },
    ],
  }
  