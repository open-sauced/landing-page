export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      type: 'string',
      required: true,
      title: 'Name',
      name: 'name',
    },
    {
      type: 'url',
      required: true,
      title: 'Website',
      name: 'website',
    },
    {
      type: 'image',
      required: true,
      title: 'Logo',
      name: 'logo',
    },
  ],
}
