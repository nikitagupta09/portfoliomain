import Navigation from "@/components/Navigation";
import HeroSequence from "@/components/HeroSequence";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import Academic from "@/components/Academic";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] overflow-x-hidden text-white w-full">
      <Navigation />
      <HeroSequence />
      <About />
      <Experience />
      <ProjectsGrid />
      <Skills />
      <Academic />
      <Contact />
    </main>
  );
}
