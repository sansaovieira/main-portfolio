import { useState } from "react";

interface ParagraphProps {
  text: string;
}
const Paragraph = ({ text }: ParagraphProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <p
        className={`${
          isExpanded ? "block" : "line-clamp-3"
        } transition-all duration-300`}
      >
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#f84e54] hover:text-[#ff7a7e] font-medium mt-2 transition-all duration-300"
      >
        {isExpanded ? "Show Less" : "More..."}
      </button>
    </div>
  );
};

export default Paragraph;

