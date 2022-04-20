export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }/api${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

/**
 *
 * @param {object} params The router params object with slug: { slug: [<slug>] }
 * @param {string} locale The current locale specified in router.locale
 * @param {boolean} preview router isPreview value
 */
export async function getPageData(params, locale, preview) {
  const slug = params.slug.join("/");
  // Find the pages that match this slug
  const pagesData = (
    await fetchAPI(
      `/pages?filters[slug]=${slug}&locale=${locale}&publicationState=${
        preview ? "preview" : "live"
      }&populate=deep,10`
    )
  ).data;

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0];
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale) {
  const global = await fetchAPI(`/global?locale=${locale}&populate=deep,10`);
  return global.data;
}
