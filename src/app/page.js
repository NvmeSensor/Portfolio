import Hero from "@/components/Hero";
import WhatIKnow from "@/components/WhatIKnow";

const Home = ()=>{
  return(
    <section className="w-full flex flex-col justify-center items-center">
      <Hero />
      <WhatIKnow />
    </section>
  )
}
export default Home;