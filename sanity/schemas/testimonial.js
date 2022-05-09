export default {
    title: 'Testimonial',
    name: 'testimonial',
    type: 'document',
    fields: [
      {
        type: 'string',
        required: true,
        title: 'Twitter username',
        name: 'twitterUsername',
      },
      {
        type: 'image',
        required: true,
        title: 'User Image',
        name: 'userImage',
      },
      {
        type: 'date',
        required: true,
        title: 'date',
        name: 'date',
      },
      {
        type: 'string',
        required: true,
        title: 'Testimonial',
        name: 'testimonial',
      }
    ],
  }
  