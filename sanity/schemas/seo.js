export default {
  title: 'SEO',
  name: 'seo',
  type: 'document',
  fields: [
    {
      type: 'string',
      required: true,
      title: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      required: true,
      title: 'Description',
      name: 'description',
    },
    {
      type: 'url',
      required: true,
      title: 'URL',
      name: 'url',
    },
    {
      type: 'image',
      required: true,
      title: 'Image',
      name: 'image',
    },
  ],
}
