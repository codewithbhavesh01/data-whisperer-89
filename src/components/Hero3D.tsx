import { motion } from "framer-motion";
import { Mail, ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const Hero3D = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl float-slow" />
      
      {/* Floating decorative elements */}
      <FloatingCard className="absolute top-32 right-[15%] hidden lg:block" delay={0.5}>
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Data Science</span>
          </div>
        </div>
      </FloatingCard>
      
      <FloatingCard className="absolute bottom-32 left-[10%] hidden lg:block" delay={0.8}>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-sm font-mono text-accent">
            model.fit(X, y)
          </div>
        </div>
      </FloatingCard>
      
      <FloatingCard className="absolute top-[40%] right-[8%] hidden lg:block" delay={1.1}>
        <div className="glass-card p-3 rounded-lg">
          <div className="text-xs text-muted-foreground">Accuracy</div>
          <div className="text-lg font-bold text-primary">98.5%</div>
        </div>
      </FloatingCard>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image - 3D Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="perspective-1000"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-3d">
                  <img 
                    src={profilePhoto} 
                    alt="Bhavesh Nishad" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-16 h-16 glass-card rounded-full flex items-center justify-center shadow-glow"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-2xl">🧠</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center lg:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient-shine">Bhavesh Nishad</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-primary font-medium mb-6"
              >
                Data Scientist | Machine Learning Enthusiast
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
              >
                I build data-driven solutions to solve real-world business problems 
                using Python and Machine Learning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="#projects">
                    View Projects
                    <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#contact">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild className="text-muted-foreground hover:text-primary">
                  <a href="#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
