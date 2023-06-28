import Image from "next/image";
import React from "react";

const defaultFeatures = [
  {
    heading: "Stability and security",
    text: "<p>React's stability and security are excellent as it is a mature, well-documented library maintained by Meta® and a large community of developers.</p>",
    icon: "/icons/squares-icon-darker.svg",
  },
  {
    heading: "Strong Community Support",
    text: "<p> React has a large and active community of developers who are constantly developing and improving the library, making it a great choice for any project.</p>",
    icon: "/icons/conversation-icon-darker.svg",
  },
  {
    heading: "SEO Friendly",
    text: "<p>React applications can be easily optimized for search engines, resulting in better visibility and increased traffic.</p>",
    icon: "/icons/magnifier-icon-darker.svg",
  },
  {
    heading: "Reusable Components",
    text: "<p>React allows developers to create reusable components, which make it easier provides a competitive advantage in SEO and SEM. to maintain and scale the code.</p>",
    icon: "/icons/blocks-icon-darker.svg",
  },
  {
    heading: "Speed and Performance",
    text: "<p>React uses virtual DOM which increases the digital product speed and performance as it only updates the necessary components. React-based digital products, such as e commerce and websites, tend to yield a 50-100% improvement in results when tested with Google Page Speed Insights.</p>",
    icon: "/icons/rocket-icon.svg",
  },
];

/**
 * @param {{data: {
 *  heading: string,
 *  subheading: string,
 *  features: array<object>
 * }}} props - props
 *
 * @returns {JSX.Element} JSX.Element
 */
const FeaturesList = ({ data }) => {
  data.features = data.features || defaultFeatures;

  return (
    <div className="bg-primary-100-d py-20">
      <div className="container">
        <h3 className="text-center text-4xl font-bold text-primary-900">
          {data.heading}
        </h3>
        <div className="-ml-16 mt-20 flex flex-col flex-wrap items-center lg:max-h-[560px]">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="ml-16 flex py-4 lg:w-[calc(50%-64px)] 2xl:w-[calc(33.3%-64px)]"
            >
              <div className="mt-4 mr-4 h-24 w-24 flex-shrink-0 text-primary-925">
                <Image src={feature.icon} width={96} height={96} />
              </div>
              <div key={index} className="ml-4 flex flex-col">
                <h4>
                  <span className="text-2xl font-bold uppercase text-primary-900">
                    {feature.heading}
                  </span>
                </h4>
                <div
                  className="mt-4 text-primary-700-d"
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
