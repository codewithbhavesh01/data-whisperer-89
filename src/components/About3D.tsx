import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, User } from "lucide-react";

const About3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Mail, label: "Email", value: "bhaveshkumar272175@gmail.com", href: "mailto:bhaveshkumar272175@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7985407868", href: "tel:+917985407868" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="perspective-1000"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 shadow-3d hover:shadow-3d-hover transition-all duration-500">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow flex-shrink-0">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Data Scientist</h3>
                  <p className="text-primary font-medium">Building the future with data</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                I am a Data Scientist with hands-on experience in data analysis, statistics, and machine learning. 
                I work with real-world datasets to extract insights and build predictive models that support 
                data-driven decision making. My passion lies in solving complex business problems through 
                innovative data solutions.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About3D;
