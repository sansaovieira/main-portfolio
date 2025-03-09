import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Resume from "../../components/resume/Resume";
import AboutMe from "../../components/aboutMe/AboutMe";
import Contact from "../../components/contact/Contact";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  const [visibleAboutMe, setVisibleAboutMe] = useState(false);
  const [visibleContact, setVisibleContact] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (aboutMeRef.current) {
        const aboutMeTop = aboutMeRef.current.getBoundingClientRect().top;
        if (aboutMeTop < windowHeight / 1.5) {
          setVisibleAboutMe(true);
        }
      }

      if (contactRef.current) {
        const contactTop = contactRef.current.getBoundingClientRect().top;
        if (contactTop < windowHeight / 1.5) {
          setVisibleContact(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "+5511939051373";
  const whatsappMessage = `Hello, Sansão! I came across your portfolio and I'm interested in your work. 
Can we schedule a quick chat to discuss potential opportunities? Looking forward to hearing from you!`;

  return (
    <div>
      <div>
        <Resume />
      </div>

      <div
        ref={aboutMeRef}
        className={`transition-all duration-600 ease-in-out ${visibleAboutMe ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"}`}
      >
        <AboutMe />
      </div>

      <div>
        <Portfolio />
      </div>

      <div ref={contactRef} className={`transition-all duration-600 ease-in-out ${visibleContact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"}`}>
        <Contact />
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={32} />
      </a>

    </div>
  );
};

export default Home;
