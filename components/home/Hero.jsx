import React from 'react'

const Hero = () => {

    const name = "Priyanshu Chahar";
    const developer = "MERN Stack Developer";
    const tagline = "I'm a passionate MERN-stack developer with expertise in building modern, scalable, and user-friendly web applications.";

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 py-20'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 lg:self-start'>
                    {/* <div className='lg:h-[75px] lg:w-[75px] h-[50px] w-[50px]'>
                        <img src="/profileimage.png" alt="" className='h-full w-full rounded-full hover:translate-y-1 transition ease-in-out shadow shadow-slate-600' />
                    </div> */}
                    <div className='flex flex-col justify-start items-center gap-2'>
                        <h1 className='lg:text-3xl text-2xl font-semibold text-slate-100 self-start'>{name}</h1>
                        <h2 className='lg:text-2xl text-xl font-medium text-slate-200 self-start'>{developer}</h2>
                        <h3 className='lg:text-xl font-medium text-slate-200 self-start'>{tagline}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;