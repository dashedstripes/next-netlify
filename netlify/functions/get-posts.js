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
    }
  }
}
`

const handler = async (event) => {
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

    const results = json?.data?.productCollection?.items || [];

    return {
      statusCode: 200,
      body: JSON.stringify({ posts: results })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
