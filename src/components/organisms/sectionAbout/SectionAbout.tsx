import { useState, JSX } from "react";
import SectionContent from "../../molecules/sectionContent/SectionContent";
import SectionHeader from "../../molecules/sectionHeader/SectionHeader";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import Modal from "../../molecules/modal/Modal";
import Table from "../../organisms/table/Table";

interface SectionAboutProps {
  title?: string | JSX.Element; 
  subtitle: string;
  text: string;
  src: string;
  alt: string;
  layout?: "resume" | "aboutMe";
}

const SectionAbout = ({ title, subtitle, text, src, alt, layout = "resume" }: SectionAboutProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex flex-col lg:flex-row items-start mb-16 lg:items-center text-white gap-6 ${layout === "aboutMe" ? "" : "lg:flex-row-reverse"}`}
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={src} alt={alt} className="max-w-full h-auto rounded-lg shadow-md" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 lg:px-10">
          <SectionHeader title={title || ""} subtitle={subtitle} />
          <SectionContent text={text} />
          
          {layout === "resume" && <SocialLinks />}

          {layout === "aboutMe" && (
            <div>
              <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg">
                <Table title="User Information" />
              </div>
              <div className="mt-6">
                <button
                  onClick={openModal}
                  className="font-bold rounded bg-[#f84e54] p-3 w-full sm:w-auto mx-auto block cursor-pointer hover:bg-white hover:text-[#e74c3c] transition duration-300 ease-in-out text-center"
                >
                  <i className="fa-light fa-folder-arrow-down"></i>
                  Download CV
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default SectionAbout;
