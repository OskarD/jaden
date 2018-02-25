'use strict'

export default {
  type: 'articles',
  relationships: [
    {
      name: 'author',
      type: 'people'
    },
    {
      name: 'comments',
      type: Array,
      containsType: 'comments'
    }
  ]
}
