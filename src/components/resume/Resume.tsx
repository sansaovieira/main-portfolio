import SectionAbout from "../organisms/sectionAbout/SectionAbout";

const Resume = () => {
  return (
    <>
      <SectionAbout
        title="Welcome!"
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
