import About from "@/components/About";
import BottomBar from "@/components/BottomBar";
import HeroComp from "@/components/HeroComp";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen pb-16 bg-black"> {/* Space for bottom bar */}
      <HeroComp />
      <About />
      <Projects />
      <BottomBar />
    </div>
  );
}
