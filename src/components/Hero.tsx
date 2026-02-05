import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent/30 shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Bhavesh Nishad" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Bhavesh</span>{" "}
            <span className="text-gradient">Nishad</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Data Scientist
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Transforming raw data into actionable insights. Specialized in predictive modeling, 
            statistical analysis, and building data-driven solutions for real-world business problems.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="mailto:bhaveshkumar272175@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">bhaveshkumar272175@gmail.com</span>
            </a>
            <a href="tel:+917985407868" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 7985407868</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">India</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-10">
            <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;