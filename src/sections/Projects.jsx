import React from "react";
import { myProjects } from "../constants";
import { div } from "three/tsl";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);
  const currentProject = myProjects[currentProjectIndex];
  const handleNavigation = (direction) => {
    if (direction === "previous") {
      setCurrentProjectIndex((prevIndex) => {
        
      });
    }
  };
  return (
    <section className="c-space my-20">
      <p className="head-text">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 w-full">
        <div className="flex flex-col relative gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5 ">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              className="flex items-center gap-2 cursor-pointer text-white-600"
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            ></button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
