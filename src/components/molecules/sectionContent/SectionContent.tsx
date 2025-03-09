import Paragraph from "../../atoms/paragraph/Paragraph";

interface SectionContentProps {
  text: string;
}

const SectionContent = ({ text }: SectionContentProps) => (
  <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-justify my-4">
    <Paragraph text={text} />
  </div>
);

export default SectionContent;
