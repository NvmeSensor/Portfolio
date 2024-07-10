import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';

const Hero = () => {

    const conxtants = [
        {
            name: "Github",
            icon: <IoLogoGithub />,
            url: "https://github.com/nvmesensor",
        },
        {
            name: "Linkedin",
            icon: <FaLinkedinIn />,
            url: "https://www.linkedin.com/in/priyannxhuu",
        },
        {
            name: "Twitter",
            icon: <FaXTwitter />,
            url: "https://twitter.com/priyannxhuu",
        },
        {
            name: "More",
            icon: <BiLinkExternal />,
            url: "https://nvmesensor.vercel.app",
        },
    ]

    const name = "Priyanshu Chahar";
    const developer = "MERN Stack Developer";

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 py-20'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex flex-col justify-start items-center gap-4 self-start'>
                    <div className='flex flex-col justify-start items-center gap-2 w-full'>
                        <h1 className='text-4xl font-semibold text-slate-200 self-start'>{name}</h1>
                        <h2 className='text-2xl font-semibold text-slate-200 self-start'>{developer}</h2>
                    </div>
                        <div className='flex flex-wrap justify-start items-center gap-3
                        self-start'>
                    {conxtants.map((conxtant, index) => (
                        <Link href={conxtant.url} key={index} target='blank' className='text-4xl text-slate-200 p-2 hover:bg-slate-200 hover:text-zinc-800 rounded-lg transition ease-in-out self-start'>
                            <p>{conxtant.icon}</p>
                        </Link>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;