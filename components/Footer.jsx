import React from 'react'
import { IoLogoWebComponent } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='flex justify-center items-center w-full card'>
            <div className='flex flex-col justify-center items-center gap-1 lg:w-[80vw] py-5 w-full'>
                <h1 className='text-slate-300 font-medium text-center'>Developed By Priyanshu</h1>
                <h2 className='text-slate-300 font-medium text-center'>Crafted with Simplicity in Mind</h2>
            </div>
        </footer>
    )
}

export default Footer