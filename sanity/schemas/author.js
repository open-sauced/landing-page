export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      required: true,
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'markdown',
      required: true
    },
    {
      title: 'Portrait',
      name: 'portrait',
      type: 'image',
      required: false
    },
  ]
}
