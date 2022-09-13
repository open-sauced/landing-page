export default {
    title: 'Press',
    name: 'press',
    type: 'document',
    fields: [
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
  