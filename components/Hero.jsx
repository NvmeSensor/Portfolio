import React from 'react'

const Hero = () => {

    const name = "Priyanshu Chahar";
    const developer = "MERN Stack Developer";
    const tagline = "I'm a passionate MERN-stack developer with expertise in building modern, scalable, and user-friendly web applications.";

  return (
    <section className='flex flex-col justify-center items-center w-full px-10 py-20'>
        <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
            <div className='flex justify-center items-center gap-7 self-start'>
                <div className='h-[150px] w-[150px]'>
                <img src="/profile-image.png" alt="" className='h-full w-full rounded-full'/>
                </div>
                <div className='flex flex-col justify-start items-center gap-2'>
                    <h1 className='text-3xl font-semibold text-slate-100 self-start'>{name}</h1>
                    <h2 className='text-2xl font-medium text-slate-200 self-start'>{developer}</h2>
                    <h3 className='text-xl font-medium text-slate-300 self-start max-w-[550px]'>{tagline}</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero