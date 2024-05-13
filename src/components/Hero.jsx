import Link from "next/link";

const Hero = () => {

    const hi = "Hi There I'm"
    const name = "Priyanshu Chahar"
    const developer = "Full Stack Developer"
    const xyz = "I'm a passionate full-stack developer with expertise in building modern, scalable, and user-friendly web applications."

    return (
        <section className="lg:w-[80vw] w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start items-center gap-3 px-7 max-w-[450px] lg:max-w-[550px]">
                <h1 className="text-xl lg:text-2xl font-medium text-cyan-500 self-start">{hi}</h1>
                <h1 className="text-4xl lg:text-5xl font-semibold text-slate-200 self-start">{name}</h1>
                <h1 className="text-3xl lg:text-5xl font-medium text-slate-200 self-start">{developer}</h1>
                <p className="text-xl lg:text-2xl font-medium text-slate-300 self-start">{xyz}</p>
                <div className="flex flex-wrap justify-center items-center gap-3 w-full mt-2">
                    <Link href=''>
                    <button className="px-5 py-3 rounded-full text-xl text-slate-300 font-medium bg:transparent border-2 border-cyan-500 hover:bg-cyan-500 transition ease-in-out">View My Work</button>
                    </Link>
                    <Link href=''>
                    <button className="px-5 py-3 rounded-full text-xl text-slate-300 font-medium bg:transparent border-2 border-cyan-500 hover:bg-cyan-500 transition ease-in-out">More Links</button>
                    </Link>
                </div>
            </div>
        </section>
    );
    }

export default Hero;