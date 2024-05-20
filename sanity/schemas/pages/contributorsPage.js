export default {
  title: 'Contributors Page',
  name: 'contributorsPage',
  type: 'object',
  fields: [
    {
      title: 'Hero',
      name: 'hero',
      type: 'object',
      description: 'All information here will be displayed in the hero section of the home page.',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          description: 'Title will be displayed in smaller font size on top the heading.',
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
          description: 'Heading will be displayed in larger font size below the title.',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
          description: 'The summary of the Open Sauced should be written here.',
        },
        {
          title: 'CTA',
          name: 'cta',
          type: 'array',
          of: [
            {
              type: 'object',
              description: 'This CTA will be displayed only on hero section.',
              fields: [
                {
                  title: 'CTA Label',
                  name: 'ctaLabel',
                  type: 'string',
                },
                {
                  title: 'CTA Link',
                  name: 'ctaLink',
                  type: 'string',
                }
              ]
            }
          ]
          
        },
        {
          title: 'Hero Image',
          name: 'image',
          type: 'image',
          description: 'This image will be displayed on the right side of the hero section.',
        },
        {
          title: 'Users',
          name: 'users',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                {
                  type: 'user',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Top Use Case',
      name: 'topUseCase',
      type: 'object',
      description: "An overview how teams can use OpenSauced for their engineering needs.",
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string'
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        { 
          title: 'Subsections',
          name: 'subsections',
          type: 'array',
          of: [
            { 
              title: 'Subsection',
              name: 'subsection',
              type: 'object',
              fields: [
                {
                  title: 'Heading',
                  name: 'heading',
                  type: 'string',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      description: 'All the features of Open Sauced should be displayed here.',
      of: [
        {
          title: 'Feature',
          name: 'feature',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              description: 'Title will be displayed in smaller font size on top the heading.',
            },
            {
              title: 'heading',
              name: 'heading',
              type: 'string',
              description: 'Heading will be displayed in larger font size bellow the title.',
            },
            {
              title: 'description',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            }
          ]
        }
      ]
    },
    {
      title: 'CTA Section',
      name: 'ctaSection',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          title: 'CTA Label',
          name: 'ctaLabel',
          type: 'string',
        },
        {
          title: 'CTA Link',
          name: 'ctaLink',
          type: 'string',
        }
      ]
    },
    {
      title: 'Testimonials Section',
      name: 'testimonialsSection',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          description: 'Title for the testimonial section, it will be displayed in smaller font size on top the heading.',
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
          description: 'Heading for the testimonial section, it will be displayed in larger bellow the title font size.',
        },
        {
          title: 'Testimonials',
          name: 'testimonials',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                {
                  type: 'testimonial',
                }
              ]

            }
          ]
        }
      ]
    },
  ]
}
