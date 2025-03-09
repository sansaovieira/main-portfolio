import React from "react";

interface CardProps {
  title: string;
  description: string;
  githubLink: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  githubLink,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm min-h-[450px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-[#f84e54] transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-black text-justify flex-grow">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center bg-[#f84e54] text-white py-2 rounded hover:bg-[#d63f40] transition-all duration-300"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
