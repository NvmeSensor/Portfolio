import React from 'react'
import { VscServerProcess } from "react-icons/vsc";

const Services = () => {

  const servixes = [
    {
      "name": "Custom Web Application Development",
      "desc": "Tailored solutions for web apps, utilizing MERN stack, meeting your unique needs."
    },
    {
      "name": "Legacy System Modernization",
      "desc": "Revitalize old systems with modern tech, updating and migrating for enhanced performance."
    },
    {
      "name": "Full Stack Development and Maintenance",
      "desc": "End-to-end development and support, ensuring seamless operation of your application."
    },
    {
      "name": "Frontend Development Services",
      "desc": "Expert frontend development using HTML, CSS, JavaScript, React, and Next.js for dynamic, responsive, and visually appealing interfaces."
    }
  ];


  return (
    <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
      <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
        <div className='flex justify-center items-center gap-4 self-start'>
          <h1 className='text-3xl font-semibold self-start dark:text-slate-300 text-gray-900 flex gap-2 items-center'>Services</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5'>
          {servixes.map((servixe, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-1 p-4 rounded-lg card h-full'>
              <h1 className='text-2xl font-semibold dark:text-slate-200 text-gray-800 self-start mt-0'>{servixe.name}</h1>
              <h2 className='font-medium dark:text-slate-300 text-gray-900 self-start my-auto'>{servixe.desc}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;