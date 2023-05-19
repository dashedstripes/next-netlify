const URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`;

export async function fetchPosts() {

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
  `;

  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
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


export async function getPostBySlug(slug) {

  const QUERY = `
    query($slug: String) {
      productCollection(where: {
        slug: $slug
      }, limit: 1) {
        items {
          title
          slug
          description {
            json
          }
        }
      }
    }
  `;

  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: QUERY, variables: { slug } })
    })
    const json = await req.json();
    const results = json?.data?.productCollection?.items || [];
    return { post: results[0] || {} }
  } catch (error) {
    return { post: {} }
  }
}
