import Navbar3D from "@/components/Navbar3D";
import Hero3D from "@/components/Hero3D";
import About3D from "@/components/About3D";
import Experience3D from "@/components/Experience3D";
import Projects3D from "@/components/Projects3D";
import Skills3D from "@/components/Skills3D";
import Education3D from "@/components/Education3D";
import Certifications from "@/components/Certifications";
import Contact3D from "@/components/Contact3D";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar3D />
      <Hero3D />
      <About3D />
      <Experience3D />
      <Projects3D />
      <Skills3D />
      <Education3D />
      <Certifications />
      <Contact3D />
      <Footer />
    </div>
  );
};

export default Index;
