import About from "@/components/About";
import BottomBar from "@/components/BottomBar";
import HeroComp from "@/components/HeroComp";

import Projects from "@/components/Projects";


export default function Home() {
  return (
   <div>
        <HeroComp/>
       <About/>
       <Projects/>
        <BottomBar/>
   </div>
  );
}
