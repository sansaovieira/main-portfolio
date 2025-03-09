import { useEffect, useRef, useState } from "react";
import Card from "../../components/molecules/card/Card";
import data from "../../service/data.json";

type Project = {
    title: string;
    description: string;
    githubLink: string;
    imageUrl: string;
    category: string;
};

const Portfolio = () => {
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(data.cardData);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const filterProjects = (category: string) => {
        if (category === "all") {
            setFilteredProjects(data.cardData);
        } else {
            setFilteredProjects(data.cardData.filter((project) => project.category === category));
        }
        setSelectedCategory(category);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const windowHeight = window.innerHeight;
                const containerTop = containerRef.current.getBoundingClientRect().top;

                if (containerTop < windowHeight) {
                    setVisibleProjects((prev) => [...prev, ...filteredProjects.map((_, index) => index)]);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [filteredProjects]);

    return (
        <div className="text-center my-6">
            <div className="pb-8">
                <h1 className="text-3xl uppercase font-semibold pb-4 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-24 after:h-[3px] after:bg-[#f84e54] after:translate-x-[-20%]">
                    My <span className="text-[#f84e54]">Portfolio</span>
                </h1>
            </div>


            <div className="w-full mt-4 flex justify-center gap-6 font-bold">
                {["all", "frontend", "backend"].map((category) => (
                    <button
                        key={category}
                        className={`py-2 px-4 rounded-xl cursor-pointer uppercase transition-transform duration-300 ${selectedCategory === category ? "bg-[#f84e54] text-white hover:scale-105" : "bg-[#f84e54] text-white hover:scale-105"
                            }`}
                        onClick={() => filterProjects(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>


            <div ref={containerRef} className="flex flex-wrap justify-center gap-12 pt-12 pb-20">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-600 ease-in-out transform ${visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"}`}
                    >
                        <Card
                            title={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                            imageUrl={project.imageUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
