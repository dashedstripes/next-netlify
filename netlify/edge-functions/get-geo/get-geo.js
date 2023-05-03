export default async (request, context) => {
  return new Response(JSON.stringify({ message: `You are visiting from ${context.geo.city}, ${context.geo.subdivision.name}!` }), {
    headers: { 'content-type': 'application/json' },
  })
}
