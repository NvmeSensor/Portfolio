const WhatIKnow = () => {

    const skills = [
        {
            name:"HTML",
        },
        {
            name:"CSS",
        },
        {
            name:"Javascript",
        },
        {
            name:"Typescript",
        },
        {
            name:"TailwindCSS",
        },
        {
            name:"Bootstrap",
        },
        {
            name:"React JS",
        },
        {
            name:"Next JS",
        },
        {
            name:"Node JS",
        },
        {
            name:"Express JS",
        },
        {
            name:"MongoDB",
        },
        {
            name:"MYSQL",
        },
        {
            name:"Python",
        },
        {
            name:"Basic C++",
        },
        {
            name:"Basic C#",
        },
        {
            name:"Basic Java",
        },
        {
            name:"Git",
        },
        {
            name:"Github",
        },
        {
            name:"Windows",
        },
        {
            name:"Linux",
        },
    ]

    return(
        <section className="flex flex-col justify-center items-center gap-5 lg:w-[80vw] w-[95vw] mb-12">
            <div className="flex justify-start items-center self-start">
                <h1 className="text-2xl font-semibold text-slate-200">What I Know</h1>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-5 rounded-3xl border-b-2 border-cyan-500 p-7 card">
                {skills.map((skill,index)=>(
                    <p key={index} className="text-xl font-medium text-slate-300 px-3 py-2 rounded-lg cursor-pointer hover:text-cyan-600 transition ease-in-out skills">
                        {skill.name}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default WhatIKnow;