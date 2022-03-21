export default {
  title: 'Navigation',
  name: 'navigation',
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
      title: 'URL',
      name: 'url',
    },
  ],
}
