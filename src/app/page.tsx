import About from "@/components/About";
// import GithubStats from "@/components/GithubStats";
// import Hero from "@/components/Hero";
import HeroComp from "@/components/HeroComp";
// import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
   <div>
       {/* <Navbar/> */}
       {/* <Hero/> */} <HeroComp/>
       {/* <GithubStats/> */}
       <About/>
       <Projects/>
   </div>
  );
}
