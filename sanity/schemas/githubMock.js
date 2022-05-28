export default {
    title: 'GitHub Mock',
    name: 'githubMock',
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
        type: 'image',
        required: true,
        title: 'Mock Image',
        name: 'mockimage',
      },
      {
        title: 'Title (Rich Text)', 
        name: 'titleRich',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ],
  }
  