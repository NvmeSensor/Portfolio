import React from "react";

const Services = () => {
  const servixes = [
    {
      name: "Legacy System Modernization",
      desc: "Revitalize old systems with modern tech, updating and migrating for enhanced performance.",
    },
    {
      name: "Full Stack Development and Maintenance",
      desc: "End-to-end development and support, ensuring seamless operation of your application.",
    },
    {
      name: "Frontend Development",
      desc: "Expert frontend development using ReactJS or NextJS for dynamic, responsive, and visually appealing interfaces.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full px-5 mb-14">
      <div className="flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full">
        <div className="flex justify-center items-center gap-4 self-start">
          <h1 className="text-3xl font-semibold self-start flex gap-2 items-center">
            Areas of expertise
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5">
          {servixes.map((servixe, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-1 p-4 rounded-lg card h-full"
            >
              <p className="text-xl font-semibold self-start mt-0">
                {servixe.name}
              </p>
              <p className="text-[18px] font-medium self-start my-auto">
                {servixe.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;