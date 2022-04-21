/**
 * Merges singleContent and sharedContent into one object. The content of singleContent is prioritized over sharedContent.
 *
 * @param {*} singleContent data.content
 * @param {*} sharedContent data.sharedContentPiece.content
 * @returns {*} content
 */
export function getContent(singleContent, sharedContent) {
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
