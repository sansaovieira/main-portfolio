import AboutMe from "../../components/aboutMe/AboutMe";
import Navbar from "../../components/navbar/Navbar";
import Resume from "../../components/resume/Resume";

const Home = () => {
  return (
    <div>
      <div className="pb-36">
        <Navbar />
      </div>
      <Resume />
      <AboutMe />
    </div>
  );
};

export default Home;
