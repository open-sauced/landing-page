export default {
    title: 'Featured Blog',
    name: 'featuredBlog',
    type: 'document',
    fields: [
      {
        title: 'Is it native blog?',
        name: 'isNative',
        type: 'boolean',
        required: true,
      },
      {
        type: 'string',
        required: true,
        title: 'Title',
        name: 'title',
      },
      {
        type: 'string',
        required: true,
        title: 'Summary',
        name: 'summary',
      },
      {
        type: 'string',
        required: true,
        title: 'Author',
        name: 'author',
      },
      {
        type: 'number',
        required: true,
        title: 'Read Time',
        name: 'readTime',
      },
      {
        title: 'Topic',
        name: 'topics',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        type: 'slug',
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
        title: 'Cover Image',
        name: 'coverImage',
      },
      {
        type: 'url',
        required: true,
        title: 'Blog Url',
        name: 'blogUrl',
      },
      {
        title: 'Blog Content', 
        name: 'blogContent',
        type: 'array',
        required: false, 
        of: [{type: 'block'}]
      },
    ],
  }
  
