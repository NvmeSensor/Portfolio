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
import { VscVscode } from "react-icons/vsc";
import { SiMongoose } from "react-icons/si";

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
        name: "ReactJS",
        icon: <RiReactjsFill />,
    },
    {
        name: "NextJS",
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
        name: "Mongoose",
        icon: <SiMongoose />,
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
        name: "Windows",
        icon: <FaWindows />,
    },
    {
        name: "Linux",
        icon: <FaLinux />,
    }
]

const buildWith = [
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
        name: "Tailwind",
        icon: <RiTailwindCssFill />,
    },
    {
        name: "ReactJS",
        icon: <RiReactjsFill />,
    },
    {
        name: "NextJS",
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
        name: "Mongoose",
        icon: <SiMongoose />,
    },
]

export { skills, tools, os, buildWith };