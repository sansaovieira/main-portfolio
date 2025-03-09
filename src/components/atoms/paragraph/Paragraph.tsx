import { useState } from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8">
      <p
        className={`text-base sm:text-lg lg:text-sm ${isExpanded ? "block" : "line-clamp-3"} transition-all duration-300`}
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
