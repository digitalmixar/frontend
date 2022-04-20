import { NextSeo } from "next-seo";
import { getStrapiMedia } from "utils/media";

const Seo = ({ metadata, globalMetadata }) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;

  return (
    <NextSeo
      title={`${metadata.metaTitle} | ${globalMetadata.metaTitleSuffix}`}
      description={metadata.metaDescription}
      // Careful: if you disable image optimization in Strapi or shareImage doesn't have formats, this will break
      openGraph={{
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        ...(metadata.shareImage && {
          images: Object.values(metadata.shareImage.formats).map((image) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            };
          }),
        }),
      }}
      // Only included Twitter data if we have it
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        // Handle is the twitter username of the content creator
        ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
      }}
    />
  );
};

export default Seo;
