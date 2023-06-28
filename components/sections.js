import { useRouter } from "next/router";
import GeneralPurposeSection from "./sections/GeneralPurposeSection";
import MainHero from "./sections/MainHero";
import Products from "./sections/Products";
import Services from "./sections/Services";
import FeaturesList from "./sections/FeaturesList";
import IconsCarousel from "./sections/IconsCarousel";
import Contact from "./sections/Contact";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.general-purpose-section": GeneralPurposeSection,
  "sections.main-hero": MainHero,
  "sections.products": Products,
  "sections.services": Services,
  "sections.features-list": FeaturesList,
  "sections.icons-carousel": IconsCarousel,
  "sections.contact": Contact,
};

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <div className="bg-red-600 py-4 font-semibold uppercase tracking-wide text-red-100">
      <div className="container">
        Preview mode is on.{" "}
        {/* <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a> */}
      </div>
    </div>
  );
};

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__component}${section.id}`}
        />
      ))}
    </div>
  );
};

export default Sections;
