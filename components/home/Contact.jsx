import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';

const Contact = () => {

    const conxtants = [
        {
            name: "Github",
            icon: <IoLogoGithub />,
            url: "https://github.com/priyannxhuu",
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

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-bold self-start text-slate-300 flex gap-2 items-center'>Connect With Me</h1>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-7 my-4'>
                    {conxtants.map((conxtant, index) => (
                        <Link href={conxtant.url} key={index} target='blank' className='text-4xl text-slate-200 hover:text-slate-400 transition ease-in-out p-4 rounded-full self-start card'>
                            <p>{conxtant.icon}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact;
