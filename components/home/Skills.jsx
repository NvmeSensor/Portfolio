import { SiHtml5, SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import {
    RiTailwindCssFill,
    RiBootstrapFill,
    RiReactjsFill,
    RiNextjsFill,
} from "react-icons/ri";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { FaGitAlt, FaGithub, FaLanguage } from "react-icons/fa";
import { FaWindows, FaLinux, FaUbuntu } from "react-icons/fa6";
import { FaPython, FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaRust } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";
import React from 'react'
import { VscVscode } from "react-icons/vsc";

const Skills = () => {


    const skills = [
        {
            name: "HTML",
            icon: <SiHtml5 />,
        },
        {
            name: "CSS",
            icon: <SiCss3 />,
        },
        {
            name: "Javascript",
            icon: <SiJavascript />,
        },
        {
            name: "Typescript",
            icon: <SiTypescript />,
        },
        {
            name: "Tailwind",
            icon: <RiTailwindCssFill />,
        },
        {
            name: "Bootstrap",
            icon: <RiBootstrapFill />,
        },
        {
            name: "React JS",
            icon: <RiReactjsFill />,
        },
        {
            name: "Next JS",
            icon: <RiNextjsFill />,
        },
        {
            name: "NodeJS",
            icon: <FaNodeJs />,
        },
        {
            name: "ExpressJS",
            icon: <SiExpress />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "MySql",
            icon: <SiMysql />,
        },

        // {
        //   name: "Ubuntu",
        //   icon: <FaUbuntu />,
        // },
        {
            name: "Python",
            icon: <FaPython />,
        },
        {
            name: "Basic C#",
            icon: "",
        },
        {
            name: "Basic Java",
            icon: <FaJava />,
        },
        {
            name: "Basic C++",
            icon: "",
        },
        {
            name: "Basic Rust",
            icon: <FaRust />,
        },
    ];

    const tools = [
        {
            name: "Git",
            icon: <FaGitAlt />,
        },
        {
            name: "Github",
            icon: <FaGithub />,
        },
        {
            name: "VsCode",
            icon: <VscVscode />,
        }
    ]

    const os = [
        {
            name: "Ubuntu",
            icon: <FaUbuntu />,
        },
        {
            name: "Windows",
            icon: <FaWindows />,
        },
        {
            name: "Linux",
            icon: <FaLinux />,
        }
    ]

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start dark:text-slate-300 text-gray-900 flex gap-2 items-center'>My Skills</h1>
                </div>
                <div className="flex flex-wrap justify-start items-center  gap-4 w-full">
                    {skills.map((skill, index) => (
                        <div className="flex justify-start items-center" key={index}>
                            <h1 className="font-semibold dark:text-slate-200 text-gray-800 flex gap-2 items-center rounded-lg px-3 py-2 dark:hover:text-slate-400 hover:text-gray-700 transition ease-in-out cursor-pointer card">{skill.name}{skill.icon}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-medium self-start dark:text-slate-300 text-gray-900 flex gap-2 items-center'>My Tools</h1>
                </div>
                <div className="flex flex-wrap justify-start items-center  gap-4 w-full">
                    {tools.map((tool, index) => (
                        <div className="flex justify-start items-center" key={index}>
                            <h1 className="font-medium dark:text-slate-200 text-gray-800 flex gap-2 items-center rounded-lg px-3 py-2 dark:hover:text-slate-400 hover:text-gray-700 transition ease-in-out cursor-pointer card">{tool.name}{tool.icon}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start dark:text-slate-300 text-gray-900 flex gap-2 items-center'>My Operating System</h1>
                </div>
                <div className="flex flex-wrap justify-start items-center  gap-4 w-full">
                    {os.map((o, index) => (
                        <div className="flex justify-start items-center" key={index}>
                            <h1 className="font-semibold dark:text-slate-200 text-gray-800 flex gap-2 items-center rounded-lg px-3 py-2 dark:hover:text-slate-400 hover:text-gray-700 transition ease-in-out cursor-pointer card">{o.name}{o.icon}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;