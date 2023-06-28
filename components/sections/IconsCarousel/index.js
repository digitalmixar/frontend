import ChevronIcon from "@/components/SVGicons/ChevronIcon";
import Image from "next/image";
import React from "react";

const icons = [
  "/logo/semrush-logo.png",
  "/logo/aws-logo.png",
  "/logo/google-tag-manager-logo.png",
  "/logo/google-ads-logo.png",
  "/logo/mailchimp-logo.png",
];

/**
 * @param {{data: {
 *  heading: string,
 * }}} props - props
 *
 * @returns JSX.Element
 */
const IconsCarousel = ({ data }) => {
  const { scrollContainerRef, handleScrollRight, handleScrollLeft } =
    useCarousel();

  return (
    <section className="bg-primary-100 py-16">
      <h1 className="text-center text-5xl font-bold text-primary-900">
        {data.heading}
      </h1>
      <div className="container mt-12">
        <div className="relative px-8">
          {icons.length > 5 && (
            <button
              className="absolute top-1/2 left-0 hidden -translate-y-1/2 -translate-x-1/2 p-4 lg:block"
              onClick={handleScrollLeft}
            >
              <ChevronIcon direction="left" />
            </button>
          )}
          <div
            className="lg:no-scrollbar flex flex-wrap justify-center overflow-y-hidden scroll-smooth lg:snap-x lg:snap-mandatory lg:flex-nowrap lg:justify-start lg:overflow-x-scroll"
            ref={scrollContainerRef}
          >
            {icons.map((icon) => (
              <div
                className="w-1/2 shrink-0 snap-start p-8 lg:w-1/5"
                key={icon}
              >
                <Image
                  src={icon}
                  width={128}
                  height={128}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          {icons.length > 5 && (
            <button
              className="absolute top-1/2 right-0 hidden -translate-y-1/2 translate-x-1/2 p-4 lg:block"
              onClick={handleScrollRight}
            >
              <ChevronIcon direction="right" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

function useCarousel() {
  const scrollPositionRef = React.useRef(0);
  const scrollContainerRef = React.useRef(null);

  const handleScrollRight = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollLeft += 200;
  };

  const handleScrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollLeft -= 200;
  };

  return {
    scrollContainerRef,
    handleScrollRight,
    handleScrollLeft,
  };
}

export default IconsCarousel;
