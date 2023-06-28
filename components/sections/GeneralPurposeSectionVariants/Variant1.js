import { getStrapiMedia } from "@/utils/media";
import Image from "next/image";

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
const Variant1 = ({ content }) => {
  return (
    <section className="bg-primary-900 text-primary-100">
      <div className="container py-16 lg:py-28 lg:px-24">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="mx-auto mt-12 w-1/3 shrink-0 lg:mt-0">
            <Image
              src={getStrapiMedia(content.decorativeMedia[0].url)}
              width={content.decorativeMedia[0].width}
              height={content.decorativeMedia[0].height}
              alt={content.decorativeMedia[0].alternativeText}
            />
          </div>
          <div className="w-full shrink-0 lg:ml-24 lg:w-2/3">
            <div className="flex h-full flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-wider lg:text-5xl lg:leading-snug">
                {content.heading}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: content.text }}
                className="prose mt-12 text-xl text-butterfly-bush-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variant1;
