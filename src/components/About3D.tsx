import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, FileText, GraduationCap, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1JFS-v8o6UpCeD8P2iCH9hyNIbXOaQXgs/view";

const highlights = [
  { icon: GraduationCap, text: "B.Tech CS/IT (2022-2026)" },
  { icon: Briefcase, text: "6 Months Internship Experience" },
  { icon: Zap, text: "Strong in Python, ML, DL, NLP" },
];

const About3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-10 card-shadow"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am a <strong className="text-foreground">B.Tech Computer Science/IT student</strong> (2022-2026) 
              with a strong foundation in data science and machine learning. With{" "}
              <strong className="text-foreground">6 months of hands-on experience</strong> as a Data Scientist Intern, 
              I specialize in building predictive models and extracting meaningful insights from complex datasets.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am proficient in <strong className="text-foreground">Python, Machine Learning, Deep Learning, and NLP</strong>, 
              with practical experience working on real-world datasets. I am a fast learner with a 
              leadership mindset, always eager to tackle challenging problems and deliver data-driven solutions.
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:bhaveshkumar272175@gmail.com" className="hover:text-primary transition-colors">
                  bhaveshkumar272175@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+917985407868" className="hover:text-primary transition-colors">
                  +91 7985407868
                </a>
              </div>
            </div>

            <Button asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About3D;
