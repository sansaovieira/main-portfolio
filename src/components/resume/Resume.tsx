import { useEffect, useState } from "react";
import SectionAbout from "../organisms/sectionAbout/SectionAbout";
import './Resume.css';

const typingWords = ["WELCOME", "BEM-VINDO", "Bienvenido", "BIENVENUE"];

const Resume = () => {
  const [currentWord, setCurrentWord] = useState(typingWords[0]);
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % typingWords.length;
      setCurrentWord(typingWords[index]);
      setAnimationKey(Date.now());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SectionAbout
        title={<span className="typing-effect" key={animationKey}>{currentWord}</span>}
        subtitle="I Am Software Analyst"
        text="I am a Systems Analyst focused on developing end-to-end solutions,
delivering robust and scalable products. My expertise lies in the
backend with Java and Spring, creating performant and secure APIs (using
JWT). On the frontend, I develop interactive and responsive applications
using Angular or React, in addition to integrating services with Axios.
I work collaboratively with UX, DevOps, QA and Product, following agile
methodologies such as Scrum and Kanban to ensure efficient deliveries. I
have experience with Microsoft Azure Cloud Services, Docker and
Kubernetes, adding value in system automation and scalability."
        src="https://ik.imagekit.io/ios4z1d4u/eu.png?updatedAt=1741384332783"
        alt="Profile Picture"
        layout="resume"
      />
    </>
  );
};

export default Resume;
