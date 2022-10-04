export default {
    title: 'Feature',
    name: 'feature',
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
        title: 'Subtitle',
        name: 'subtitle',
      },
      {
        type: 'slug',
        validation: Rule => Rule.required(),
        required: true,
        title: 'Slug',
        name: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        type: 'image',
        required: true,
        title: 'Preview Image',
        name: 'previewImage',
      },
      {
        type: 'url',
        required: true,
        title: 'Preview Video Url',
        name: 'previewVideoUrl',
      },
      {
        type: 'string',
        required: true,
        title: 'Description',
        name: 'description',
      },
    ],
  }
  