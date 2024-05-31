import React from 'react'
import { LuMessageSquare } from "react-icons/lu";

const Message = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-medium self-start text-slate-300 flex gap-2 items-center'>Drop a Message <LuMessageSquare className='text-3xl' /></h1>
                </div>
                <form action="" className='p-5 rounded-lg flex flex-col justify-center items-center gap-2 w-full card'>
                    <label htmlFor="" className='text-slate-100 font-medium self-start text-xl'>Name</label>
                    <input type="text" name="" id="" placeholder='Your Name' className='text-slate-200 font-medium px-3 py-2 rounded-lg w-full outline-none input'/>
                    <label htmlFor="" className='text-slate-100 font-medium self-start text-xl'>Email</label>
                    <input type="email" name="" id="" placeholder='Your Email' className='text-slate-200 font-medium px-3 py-2 rounded-lg w-full outline-none input'/>
                    <label htmlFor="" className='text-slate-100 font-medium self-start text-xl'>Message</label>
                    <textarea name="" id="" placeholder='Drop Your Message' className='text-slate-200 font-medium px-3 py-2 rounded-lg w-full outline-none input'></textarea>
                    <button className='btn text-slate-800 bg-slate-200 hover:bg-slate-300 transition ease-in-out text-xl font-medium px-3 py-2 rounded-lg self-start mt-2'>Message</button>
                </form>
            </div>
        </section>
    )
}

export default Message