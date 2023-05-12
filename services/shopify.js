const URL = `${process.env.SHOPIFY_STOREFRONT_URL}/api/2023-04/graphql.json`;

export async function fetchProducts() {

  const QUERY = `
    {
      products(first:5) {
        edges {
          node {
            id
            title
            images(first: 1) {
              nodes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  `;

  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': `${process.env.SHOPIFY_STOREFRONT_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: QUERY, variables: {} })
    })
    const json = await req.json();

    console.log(json)
    console.log(JSON.stringify(json.data.products.edges))

    return json.data.products.edges || []
  } catch (error) {
    return []
  }
}