import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { buildWith } from "@/data/skills";

const BuiltWith = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-5 mb-14">
      <div className="flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-3xl font-semibold self-start flex gap-2 items-center">
            I build with
          </h1>
          <div className="flex flex-wrap justify-start items-center gap-5 w-full p-4 rounded-lg card">
            {buildWith.map((bw, index) => (
              <div className="flex justify-start items-center" key={index}>
                <h1 className="font-semibold text-[16px] flex gap-1 items-center rounded-lg px-3 py-2 transition ease-in-out cursor-pointer hover:bg-slate-300 hover:text-zinc-800">
                  <span className="text-2xl">
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  <p className="flex gap-2 items-center">
                    {bw.name}
                    {bw.icon}
                  </p>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWith;