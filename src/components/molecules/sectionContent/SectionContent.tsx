import Paragraph from "../../atoms/paragraph/Paragraph";

interface SectionContentProps {
  text: string;
}
const SectionContent = ({ text }: SectionContentProps) => (
  <div className="w-2xl text-justify my-4">
    <Paragraph text={text} />
  </div>
);

export default SectionContent;
