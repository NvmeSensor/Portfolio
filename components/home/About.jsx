import React from 'react'

const About = () => {

    const hello1 = "My name is Priyanshu Chahar and I'm a computer science student with a passion for programming. I'm deeply interested in web development and enjoy exploring new technologies to build innovative solutions."
    const hello2 = "As a MERN stack developer, I specialize in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, React JS, Next JS, NodeJS, ExpressJS, MongoDB, Mongoose, Python, along with foundational knowledge in C#, Java, C++, and Rust. I'm always eager to expand my skill set and learn new technologies to stay updated with industry trends."

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start   flex gap-2 items-center'>About me</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-4 rounded-lg card'>
                    <h1 className='text-[18px]   self-start font-medium'>{hello1}</h1>
                    <h1 className='text-[18px]   self-start font-medium'>{hello2}</h1>
                </div>
            </div>
        </section>
    )
}

export default About;