import About from "@/components/About";
import GithubStats from "@/components/GithubStats";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
   <div>
       <Navbar/>
       <Hero/>
       <GithubStats/>
       <About/>
       <Projects/>
   </div>
  );
}
