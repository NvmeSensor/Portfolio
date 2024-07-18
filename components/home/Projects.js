import React from "react";
import Link from "next/link";
import projexts from "@/data/data";
import { IoArrowForwardOutline } from "react-icons/io5";

const Projects = () => {
  const displayProjexts = projexts.slice(0, 3);

  return (
    <section className="flex flex-col justify-center items-center w-full px-5 mb-14">
      <div className="flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full">
        <div className="flex justify-center items-center gap-4 self-start">
          <h1 className="text-3xl font-semibold self-start flex gap-2 items-center">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5">
          {displayProjexts.map((projext, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-1 p-4 rounded-lg card h-full"
            >
              <h2 className="text-4xl font-semibold text-center mt-0 p-5 w-full rounded-lg proj">
                {projext.name}
              </h2>
              <p className="text-xl font-semibold self-start mt-0">
                {projext.desc}
              </p>
              <p className="text-[18px] font-medium   self-start my-auto">
              Developed using {projext.tech}
              </p>
              <div className="flex justify-start items-center gap-2 w-full">
              <Link href={projext.link} target="blank" className="">
                <p className="flex gap-1 items-center transition ease-in-out font-semibold px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-md mt-2 visit">
                  Visit
                </p>
              </Link>
              <Link href={projext.github} target="blank" className="">
                <p className="flex gap-1 items-center transition ease-in-out font-semibold px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-md mt-2 visit">
                  Github
                </p>
              </Link>
            </div>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="px-3 py-2 font-semibold text-[16px] text-zinc-800 bg-slate-200 hover:bg-slate-300 transition ease-in-out rounded-lg mt-2"
        >
          More Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;