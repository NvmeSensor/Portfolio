import React from 'react'
import achievements from '@/data/achievements';

const Achievements = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-5 mb-14">
      <div className="flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-3xl font-semibold self-start text-slate-300 flex gap-2 items-center">
            Achievements
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-5 w-full p-4 rounded-lg card">
            {achievements.map((ach , index)=>(
                <div key={index} className='flex flex-col justify-start items-center gap-2 p-4 rounded-md h-full ach'>
                    <h1 className="text-xl font-semibold text-slate-200 self-start mt-0">{ach.name}</h1>
                    <p className="text-[18px] font-medium text-slate-300 self-start my-auto">{ach.desc}</p>
                    <p className="text-[18px] font-semibold text-slate-300 self-start mb-0">{ach.date}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements;