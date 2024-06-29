import React from 'react'
import Link from 'next/link';
import projexts from '@/data/data';

const Projects = () => {

    const displayProjexts = projexts.slice(0,3)

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-bold self-start text-slate-300 flex gap-2 items-center'>Projects</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5'>
                    {displayProjexts.map((projext, index) => (
                        <Link href={projext.link} target="blank" key={index} className='flex flex-col justify-center items-center gap-1 p-4 rounded-lg border-b-2 border-slate-400 card h-full'>
                        <h1 className='text-4xl font-bold text-slate-200 text-center mt-0 p-5 w-full rounded-lg proj'>{projext.name}</h1>
                        <h2 className='text-xl font-semibold text-slate-300 self-start mt-0'>{projext.desc}</h2>
                        <h2 className='text-[18px] font-semibold text-slate-200 hover:text-slate-300 self-start my-auto'>{projext.tech}</h2>
                    </Link>
                    ))}
                </div>
                <Link href='/projects' className='px-3 py-2 font-semibold text-gray-800 bg-slate-200 hover:bg-slate-300 text-[18px] transition ease-in-out rounded-lg mt-2'>More Projects</Link>
            </div>
        </section>
    )
}

export default Projects;