'use strict'

export default {
  type: 'comments',
  relationships: [
    {
      name: 'author',
      type: 'people'
    }
  ]
}
