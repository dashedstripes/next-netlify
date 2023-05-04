const URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`;

const QUERY = `
query {
  productCollection {
    items {
      title
      slug
      description {
        json
      }
      image {
        url(transform: { format: JPG })
      }
    }
  }
}
`

async function fetchPosts() {
    try {
        const req = await fetch(URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.CONTENTFUL_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: QUERY, variables: {} })
        })
        const json = await req.json();
        return json.data.productCollection.items || []
    } catch (error) {
        return []
    }
}

export default fetchPosts;