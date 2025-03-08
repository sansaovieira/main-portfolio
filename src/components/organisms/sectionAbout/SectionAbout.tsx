import { useState } from "react";
import SectionContent from "../../molecules/sectionContent/SectionContent";
import SectionHeader from "../../molecules/sectionHeader/SectionHeader";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import Modal from "../../molecules/modal/Modal";
import Table from "../../organisms/table/Table";

interface SectionAboutProps {
  title?: string;
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
        className={`flex flex-col md:flex-row items-start mb-32 md:items-center text-white gap-6 ${
          layout === "aboutMe" ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={src} alt={alt} className="max-w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between px-8">
          <SectionHeader title={title || ""} subtitle={subtitle} />
          <SectionContent text={text} />
          {layout === "resume" && <SocialLinks />}

          {layout === "aboutMe" && (
            <div>
              <div className="w-2xl p-6 rounded-lg shadow-lg">
                <Table title="User Information" />
              </div>
              <div className="mt-4">
                <button
                  onClick={openModal}
                  className="rounded bg-[#f84e54] p-4 cursor-pointer transition-transform duration-300 hover:scale-105"
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
