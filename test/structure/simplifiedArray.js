export default [
  {
    _type: 'articles',
    id: '1',
    title: 'JSON API paints my bikeshed!',
    author: {
      id: 9,
      type: 'people',
      firstname: 'Dan',
      lastname: 'Gebhardt',
      twitter: 'dgeb'
    },
    comments: [
      {
        id: 5,
        body: 'First!',
        author: {id: 2}
      },
      {
        id: 12,
        body: 'I like XML better',
        author: {
          id: 9,
          firstname: 'Dan',
          lastname: 'Gebhardt',
          twitter: 'dgeb'
        }
      }
    ]
  }
]
