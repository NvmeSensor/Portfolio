import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import Link from 'next/link';
import projexts from '@/data/data';

const Projects = () => {

    const displayProjexts = projexts.slice(0,3)

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start dark:text-slate-300 text-gray-900 flex gap-2 items-center'>Projects</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5'>
                    {displayProjexts.map((projext, index) => (
                        <Link href={projext.link} target="blank" key={index} className='flex flex-col justify-center items-center gap-1 p-4 rounded-lg card h-full'>
                            <h1 className='text-5xl font-semibold dark:text-slate-200 text-gray-800 text-center mt-0 p-5 w-full rounded-lg proj'>{projext.name}</h1>
                            <h2 className='text-xl font-medium dark:text-slate-300 text-gray-900 self-start my-auto'>{projext.desc}</h2>
                            <h2 className='font-medium dark:text-slate-200 text-gray-800 self-start my-auto'>{projext.tech}</h2>
                        </Link>
                    ))}
                </div>
                <Link href='/projects' className='btn text-slate-200 dark:text-gray-800 dark:bg-slate-200 bg-gray-900 dark:hover:bg-slate-300 hover:bg-gray-800 transition ease-in-out text-xl font-medium px-3 py-2 rounded-lg mt-2'>More Projects</Link>
            </div>
        </section>
    )
}

export default Projects;