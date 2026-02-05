import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const responsibilities = [
  "Data cleaning, preprocessing, and feature engineering on real-world datasets",
  "Built predictive and classification models for business use cases",
  "Performed EDA to identify trends, patterns, and insights",
  "Converted business requirements into data-driven solutions"
];

const Experience3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey in data science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
            
            {/* Experience card */}
            <div className="relative pl-20">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute left-5 top-8 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-glow z-10"
              >
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="glass-card rounded-2xl p-8 shadow-3d hover:shadow-3d-hover transition-all duration-500"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Data Scientist</h3>
                    <p className="text-primary font-semibold text-lg">Hanumant Technology Private Limited</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">6 Months</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {responsibilities.map((resp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {resp}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience3D;
