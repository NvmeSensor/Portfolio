import React from 'react'
import { FaServicestack } from "react-icons/fa";

const Services = () => {
  return (
    <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
    <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
        <div className='flex justify-center items-center gap-4 self-start'>
            <h1 className='text-2xl font-medium self-start text-slate-300 flex gap-2 items-center'>Services <FaServicestack className='text-3xl' /></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
        </div>
    </div>
</section>
  )
}

export default Services