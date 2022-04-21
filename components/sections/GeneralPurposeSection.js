import { getContent } from "utils/content";
import Variant1 from "./GeneralPurposeSectionVariants/Variant1";

const variants = {
  variant_1: Variant1,
};

const GeneralPurposeSection = ({ data }) => {
  const content = getContent(data.content, data.sharedContentPiece.content);
  const Variant = variants[data.variant] ?? variants.variant_1;
  return <Variant content={content} />;
};

export default GeneralPurposeSection;
