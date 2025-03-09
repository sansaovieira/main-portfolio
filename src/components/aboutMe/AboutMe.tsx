import SectionAbout from "../organisms/sectionAbout/SectionAbout";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <SectionAbout
        subtitle="My journey in technology"
        text="My journey in technology began when I sought alternatives to traditional careers in Angola. I have always been fascinated by electronics and computers, which led me to study IT Management in High School, where I led a web project for online registrations using HTML, CSS, PHP, and XAMP.
        Today, I am eager to contribute to challenging projects and innovative solutions, leveraging my practical experience, resilience, and adaptability, which are reflected in my journey of moving to Brazil alone in pursuit of professional growth. I am always ready to learn and add value to the team."
        src="https://ik.imagekit.io/ios4z1d4u/IMG_2922-removebg-preview.png?updatedAt=1741402366567"
        alt="Profile Picture"
        layout="aboutMe"
      />
    </div>
  );
};

export default AboutMe;
