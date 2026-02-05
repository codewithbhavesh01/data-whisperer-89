import Navbar3D from "@/components/Navbar3D";
import Hero3D from "@/components/Hero3D";
import About3D from "@/components/About3D";
import Skills3D from "@/components/Skills3D";
import Experience3D from "@/components/Experience3D";
import Projects3D from "@/components/Projects3D";
import Education3D from "@/components/Education3D";
import Contact3D from "@/components/Contact3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar3D />
      <Hero3D />
      <About3D />
      <Skills3D />
      <Experience3D />
      <Projects3D />
      <Education3D />
      <Contact3D />
    </div>
  );
};

export default Index;