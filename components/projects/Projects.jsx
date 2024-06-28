import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import projexts from '@/data/data';

const Projects = () => {

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 py-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-between items-center gap-4 w-full'>
                    <h1 className='text-3xl font-semibold text-slate-300 flex gap-2 items-center'>Projects</h1>
                    <Link href='/' className='px-3 py-2 font-semibold text-gray-800 bg-slate-200 hover:bg-slate-300  transition ease-in-out rounded-lg m-2'>Home Page</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5'>
                    {projexts.map((projext, index) => (
                        <Link href={projext.link} target="blank" key={index} className='flex flex-col justify-center items-center gap-1 p-4 rounded-lg border-b-2 border-slate-400 card h-full'>
                            <h1 className='text-4xl font-semibold text-slate-200 text-center mt-0 p-5 w-full rounded-lg proj'>{projext.name}</h1>
                            <h2 className='text-xl font-medium text-slate-300 self-start mt-0'>{projext.desc}</h2>
                            <h2 className='font-semibold text-slate-200 self-start my-auto'>{projext.tech}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects