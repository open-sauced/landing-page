export default {
    title: 'Footer',
    name: 'footer',
    type: 'document',
    fields: [
      {
        type: 'string',
        required: true,
        title: 'Label',
        name: 'label',
      },
      {
        type: 'url',
        required: true,
        title: 'Url',
        name: 'url',
      },
      {
        type: 'image',
        required: true,
        title: 'Icon',
        name: 'icon',
      },
    ],
  }
  