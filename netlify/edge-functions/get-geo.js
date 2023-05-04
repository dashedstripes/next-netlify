export default async (_, context) => {
  const response = await context.next();

  const page = await response.text();
  const updated = page.replace(/{{USER_LOCATION}}/g, `${context.geo.city}, ${context.geo.subdivision.name}`);

  return new Response(updated, response);
}
