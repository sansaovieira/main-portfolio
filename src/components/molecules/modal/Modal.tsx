
interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  const handleDownload = (language: "en" | "pt") => {
    const cvLinks = {
      en: "https://drive.google.com/file/d/1LP8Jko64RH3HOSQ7_4bvO5IGst2KPcQo/view?usp=drive_link",
      pt: "https://drive.google.com/file/d/1YKSP7G8qwNnaI2-xqx4Eqbka_us-Bd4H/view?usp=drive_link",
    };
    window.open(cvLinks[language], "_blank");
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96 relative">

        <button
          onClick={closeModal} 
          className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
          &times;
        </button>
        
        <h2 className="text-white text-xl font-bold mb-4">Choose CV Language</h2>
        <button
          onClick={() => handleDownload("en")}
          className="w-full bg-[#f84e54] text-white px-4 py-2 rounded mb-2 flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <i className="fa-light fa-folder-arrow-down"></i>
          Download in English
        </button>
        <button
          onClick={() => handleDownload("pt")}
          className="w-full bg-white text-[#f84e54] px-4 py-2 rounded flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <i className="fa-light fa-folder-arrow-down"></i>
          Download in Portuguese
        </button>
      </div>
    </div>
  );
};

export default Modal;
