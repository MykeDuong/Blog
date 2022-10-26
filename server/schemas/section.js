export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'sectionName',
      title: 'sectionName',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }
  ],
}