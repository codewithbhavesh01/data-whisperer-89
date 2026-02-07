import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building, Calendar, MapPin } from "lucide-react";

const Education3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 card-shadow"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-lg text-primary font-semibold mb-3">
                  Computer Science / Information Technology
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="w-4 h-4" />
                    <span>Himalayan Institute of Technology and Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2022 – 2026</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Currently Pursuing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* University Affiliation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 card-shadow"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-8 h-8 text-muted-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Bachelor of Technology
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Lucknow, India</span>
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
