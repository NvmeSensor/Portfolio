import React from 'react'
import experience from '@/data/experience';

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-5 mb-14">
      <div className="flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-3xl font-semibold self-start text-slate-300 flex gap-2 items-center">
            Experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-5 w-full p-4 rounded-lg card">
            {experience.map((exp , index)=>(
                <div key={index} className='flex flex-col justify-start items-center gap-2 p-4 rounded-md h-full exp'>
                    <h1 className="text-xl font-semibold text-slate-200 self-start mt-0">{exp.name}</h1>
                    <p className="text-[18px] font-medium text-slate-300 self-start my-auto">{exp.desc}</p>
                    <p className="text-[18px] font-semibold text-slate-300 self-start mb-0">{exp.date}({exp.role})</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;