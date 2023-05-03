const URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`;

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
`

const handler = async (event) => {
  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CONTENTFUL_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: QUERY, variables: { slug: "contenda-builds-with-netlify-and-astro-to-share-gated-content-previews" } })
    })
    const json = await req.json();

    const results = json?.data?.productCollection?.items || [];

    return {
      statusCode: 200,
      body: JSON.stringify({post: results[0] || {}})
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
