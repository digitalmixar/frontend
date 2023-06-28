import ButtonLink from "@/components/elements/button-link";
import Image from "next/image";
import { getButtonAppearance } from "utils/button";
import { getStrapiMedia } from "utils/media";
import Markdown from "react-markdown";
import NextImage from "@/components/elements/image";
import HighlightedText from "@/components/elements/HighlightedText";

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
const Variant2 = ({ content }) => {
  return (
    <section className="bg-primary-100 py-12 px-2">
      <div className="container flex rounded-4xl bg-butterfly-bush-700 p-12 text-primary-100">
        <div className="hidden p-8 lg:block lg:w-1/3">
          <div className="relative h-full w-full">
            <Image
              src={getStrapiMedia(content.decorativeMedia[0].url)}
              layout="fill"
              className="pointer-events-none select-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center lg:w-2/3 lg:px-12">
          {content.heading && (
            <h2 className="text-5xl font-bold tracking-wider lg:text-5xl lg:leading-snug">
              {content.heading}
            </h2>
          )}
          {content.text && (
            <div
              className="prose mt-12 text-xl text-butterfly-bush-200 prose-strong:text-butterfly-bush-50"
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Variant2;
