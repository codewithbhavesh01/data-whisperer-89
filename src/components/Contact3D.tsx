import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "bhaveshkumar272175@gmail.com",
    href: "mailto:bhaveshkumar272175@gmail.com",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7985407868",
    href: "tel:+917985407868",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    color: "from-blue-500 to-cyan-500"
  }
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" }
];

const Contact3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration? Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 shadow-3d"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      className="block p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all text-center"
                    >
                      <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg mb-4 group-hover:shadow-glow-accent transition-shadow`}>
                        <link.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{link.label}</p>
                      <p className="text-sm font-medium text-foreground break-all">{link.value}</p>
                    </a>
                  ) : (
                    <div className="p-6 rounded-2xl bg-secondary/50 text-center">
                      <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg mb-4`}>
                        <link.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{link.label}</p>
                      <p className="text-sm font-medium text-foreground">{link.value}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="mailto:bhaveshkumar272175@gmail.com">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Bhavesh Nishad. Built with{" "}
          <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React
        </p>
      </motion.div>
    </section>
  );
};

export default Contact3D;
