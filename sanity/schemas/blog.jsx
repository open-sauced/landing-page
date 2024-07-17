import React from 'react'
import { MediaEditor } from '@catherineriver/sanity-plugin-generate-ogimage';
import DefaultOgLayout from '../layouts/DefaultOgLayout.tsx';

export default {
    title: 'Blog',
    name: 'blog',
    type: 'document',
    fields: [
      {
        type: 'boolean',
        name: 'isNative',
        title: 'Is it native blog?',
        description: 'Please select yes if it is a native blog, for external blogs please select no.',
        initialValue: true,
        validation: Rule => Rule.required(),
      },
      {
        type: 'string',
        name: 'title',
        title: 'Title',
        description: 'Please enter the title of the blog, title should be less than 100 characters.',
        validation: Rule => Rule.required(),
      },
      {
        type: 'string',
        name: 'summary',
        title: 'Summary',
        description: 'Please enter the summary of the blog, this will be used in the blog listing page, summary should be less than 30 characters.',
        validation: Rule => Rule.required(),
      },
      {
        type: 'reference',
        title: 'Author',
        name: 'author',
        to: [{ type: 'author' }],
        description: 'Reference an Author document that wrote this blog',
        required: true,
      },
      {
        type: 'date',
        title: 'Published Date',
        name: 'published_date',
        description: 'Please enter when this blog was written.',
        required: true,
      },
      {
        type: 'array',
        title: 'Topic',
        name: 'topics',
        description: 'Please add the topics for the blog.',
        of: [{type: 'string'}]
      },
      {
        type: 'slug',
        title: 'Slug',
        name: 'slug',
        description: 'Click generate button to generate the slug automatically, or you can enter the slug manually making sure it is unique.',
        validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        },
        // validation: Rule => Rule.required(),
      },
      {
        type: 'image',
        title: 'Cover Image',
        name: 'coverImage',
        description: 'Please select the cover image for the blog.',
        validation: Rule => Rule.required(),
      },
      {
        type: 'image',
        name: 'ogImage',
        title: 'Social sharing image',
        description: "Click the dot icon on top of the right corner and then select browse.",
        options: {
          sources: [
            {
              name: 'sharing-image',
              title: 'Generate sharing image',
              component: (props) => (
                <MediaEditor
                  {...props}

                  layouts={[
                    DefaultOgLayout,
                  ]}

                  dialog={{
                    title: 'Create sharing image',
                  }}
                />
              ),
              icon: () => <div>🎨</div>,
            }
          ],
        },
      },
      {
        type: 'url',
        title: 'Blog Url',
        name: 'blogUrl',
        description: 'Please enter the blog url (Only if it is not a native blog).',
      },
      {
        type: "markdown",
        title: 'Blog Content', 
        name: 'blogContent',
        description: "Markdown content for the blog",
        validation: Rule => Rule.required(),
      }
    ],
  }
  
