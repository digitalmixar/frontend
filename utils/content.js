/**
 *
 * @param {{
 *  content: {
 *    heading: string,
 *    subheading: string,
 *    text: string,
 *    media: array<object>,
 *    decorativeMedia: array<object>,
 *    CTAs: array<object>
 * }}} props
 * @returns JSX.Element
 */
export function getContent(data) {
  let singleContent = data.content;
  let sharedContent = data.sharedContentPiece?.content;

  if (!sharedContent) return singleContent;

  let content = {};
  for (let key in singleContent) {
    if (
      singleContent[key] === null ||
      singleContent[key] === "" ||
      singleContent[key]?.length === 0
    ) {
      content[key] = sharedContent[key];
    } else {
      if (singleContent[key] === "no_text") content[key] = "";
      else if (
        Array.isArray(singleContent[key]) &&
        singleContent[key][0]?.name === "no_media.png"
      )
        content[key] = null;
      else if (
        Array.isArray(singleContent[key]) &&
        singleContent[key][0]?.label === "no_cta"
      )
        content[key] = [];
      else content[key] = singleContent[key];
    }
  }

  return content;
}
