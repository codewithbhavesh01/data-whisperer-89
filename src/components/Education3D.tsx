import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Python Programming",
  "Data Structures",
  "DBMS",
  "Operating Systems",
  "Machine Learning Fundamentals"
];

const Education3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and relevant coursework
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateY: 3 }}
            className="perspective-1000"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-3d hover:shadow-3d-hover transition-all duration-500">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow flex-shrink-0"
                >
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-2">
                    Computer Science / Information Technology
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-accent">Currently Pursuing</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Relevant Coursework</h4>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {coursework.map((course, index) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="px-4 py-2 rounded-xl bg-card text-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education3D;
