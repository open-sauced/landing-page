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
        name: 'isBlackBG',
        type: 'boolean',
        required: true,
      },
      {
        title: 'SVG Logo',
        name: 'svgLogo',
        type: 'image',
        required: true,
      },
      {
        title: 'PNG Logo',
        name: 'pngLogo',
        type: 'image',
        required: true,
      },
    ],
  }
  