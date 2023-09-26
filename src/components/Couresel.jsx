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
      className="flex w-[100%] w-max-[80%] mt-[150px] flex-col  items-center justify-center gap-10 h-screen lg:hidden"
    >
      <h2 className="flex justify-center  text-2xl font-semibold mt-6">
        Project
      </h2>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={handlePrevious}
          className=" relative border rounded bg-slate-400 pl-3 pr-3"
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
          className="rel border rounded bg-slate-400 pl-3 pr-3"
        >
          right
        </button>
      </div>
    </div>
  );
}

export default Couresel;
