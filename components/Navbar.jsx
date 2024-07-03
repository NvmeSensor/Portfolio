import { FaGithubSquare } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

const Navbar = () => {

    const currentDate = new Date();


    return (
        <nav className="flex justify-center items-center w-full">
            <div className="flex justify-between items-center lg:w-[75vw] px-5 py-3 mx-5 mt-3 w-full rounded-lg card">
                <Link href='/' className="text-3xl font-medium text-slate-200">
                <FaTerminal />
                </Link>
                <Link target="blank" href="https://github.com/NvmeSensor" className="flex items-center gap-1 px-3 py-2 font-semibold text-gray-800 bg-slate-200 hover:bg-slate-300  transition ease-in-out rounded-lg">
                    <FaGithubSquare className="text-2xl"/>
                    Github
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;