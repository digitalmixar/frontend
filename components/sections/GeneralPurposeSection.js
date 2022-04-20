import Variant1 from "./GeneralPurposeSectionVariants/Variant1";

const variants = {
  variant_1: Variant1,
};

const GeneralPurposeSection = ({ data }) => {
  const Section = variants[data.variant] ?? variants.variant_1;
  return <Section data={data} />;
};

export default GeneralPurposeSection;
