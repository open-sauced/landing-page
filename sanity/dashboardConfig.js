export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Recent edited documents',
        order: '_updatedAt desc',
        limit: 7,
      },
      layout: {
        width: 'auto',
        height: 'large'
      }
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    }
  ]
}