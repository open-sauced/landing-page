import React from 'react'

export default {
    title: 'Changelog',
    name: 'changelog',
    type: 'document',
    fields: [
      {
        type: 'string',
        name: 'title',
        title: 'Title',
        description: 'Please enter the title of the changelog.',
        validation: Rule => Rule.required(),
      },
      {
        type: 'object',
        title: 'Category',
        name: 'changelogCategory',
        description: 'Please select the category for the changelog.',
        fields: [
          {
            title: 'Category',
            name: 'changelogCategory',
            type: 'reference',
            to: [{type: 'changelogCategory'}]
          }
        ],
        validation: Rule => Rule.required(),
      },
      {
        type: 'date',
        title: 'Date',
        name: 'date',
        description: 'Please select the date for the changelog.',
        validation: Rule => Rule.required(),
      },
      {
        type: 'array',
        title: 'Topic',
        name: 'topics',
        description: 'Please add the topics for the content.',
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
      },
      {
        type: 'string',
        name: 'summary',
        title: 'Changelog Summary',
        description: 'Please enter a short (less than 50 characters) summary of the changelog entry.',
        options: {
          maxLength: 50,
        },
        validation: Rule => Rule.required(),
      },
      {
        type: "markdown",
        title: 'Changelog Content', 
        name: 'changelogContent',
        description: "Markdown content for the changelog",
        validation: Rule => Rule.required(),
      },
    ],
  }
  