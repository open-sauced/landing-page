export default {
    title: 'Calender',
    name: 'calender',
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
        title: 'Calender Image',
        name: 'calenderImage',
      },
      {
        title: 'Title (Rich Text)', 
        name: 'titleRich',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ],
  }
  