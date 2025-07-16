import About from "@/components/About";
import GithubStats from "@/components/GithubStats";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <div>
       <Navbar/>
       <Hero/>
       <GithubStats/>
       <About/>
   </div>
  );
}
