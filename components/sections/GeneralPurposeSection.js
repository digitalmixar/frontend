import { getContent } from "utils/content";
import Variant1 from "./GeneralPurposeSectionVariants/Variant1";
import Variant2 from "./GeneralPurposeSectionVariants/Variant2";

const variants = {
  variant_1: Variant1,
  variant_2: Variant2,
};

const GeneralPurposeSection = ({ data }) => {
  const content = getContent(data);
  const Variant = variants[data.variant] ?? variants.variant_1;
  return <Variant content={content} />;
};

export default GeneralPurposeSection;
