import React from 'react';
interface SectionHeaderProps {
  title: string | React.JSX.Element; 
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="font-bold uppercase text-center px-4 sm:px-6">
      <h1 className="text-[#f84e54] text-xl sm:text-2xl lg:text-3xl my-2 sm:my-4">
        {title}
      </h1>
      <h2 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
