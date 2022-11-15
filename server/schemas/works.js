export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'types',
        title: 'Types',
        type:'array',
        of: [
          {
            name:'type',
            title:'Type',
            type:'string'
          }
       ]
      },
     
    ],
  };