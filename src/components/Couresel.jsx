import { useState } from 'react';
import { data } from '../data/data';
const Projects = data;

function Couresel() {
  const [index, setIndex] = useState(0);
  const currentProject = Projects[index];
  const handlePrevious = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, Projects.length - 1));
  };

  return (
    <div
      id="project"
      className="  flex bg-slate-100 mt-[120px] flex-col  items-center justify-center gap-10 h-screen lg:hidden mx-[50px] "
    >
      <h2 className=" flex justify-center  text-2xl font-semibold ">Project</h2>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={handlePrevious}
          className=" relative border rounded-full  bg-orange-300  pl-3 pr-3 w-[50px]  h-[50px]"
        >
          left
        </button>
        <div
          key={index}
          style={{ backgroundImage: `url(${currentProject.image})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div  "
        >
          {/* Hover effect for images */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              {currentProject.name}
            </span>
            <div className="pt-8 text-center ">
              {/* eslint-disable-next-line */}
              <a
                href={currentProject.github}
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
              </a>
              {/* eslint-disable-next-line */}
              <a
                href={currentProject.live}
                target="_blank"
              >
                <button
                  className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="rel border rounded-full bg-orange-300  pl-3 pr-3 w-[50px]  h-[50px]"
        >
          right
        </button>
      </div>
    </div>
  );
}

export default Couresel;
