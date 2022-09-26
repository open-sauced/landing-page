export default {
    title: 'OpenSauced Logo',
    name: 'openSaucedLogo',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        required: true,
      },
      {
        title: 'Description',
        name: 'description',
        type: 'string',
        required: true,
      },
      {
        title: 'Black Background?',
        name: 'isBackBG',
        type: 'boolean',
        required: true,
      },
      {
        title: 'Logo',
        name: 'logo',
        type: 'image',
        required: true,
      },
    ],
  }
  