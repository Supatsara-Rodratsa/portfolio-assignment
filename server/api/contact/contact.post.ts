export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const queryParams = getQuery(event);
  return { ok: true };
});
