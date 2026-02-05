import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CreditCard, Building2, UtensilsCrossed, ExternalLink, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description: "Fraud detection using transaction data with advanced ML techniques",
    icon: CreditCard,
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    highlights: [
      "Fraud detection using transaction data",
      "Handled class imbalance effectively",
      "Metrics: Precision, Recall, F1-score, ROC-AUC"
    ],
    tools: ["Python", "Pandas", "Machine Learning"]
  },
  {
    title: "Loan Approval Prediction",
    description: "Predict loan approval outcomes with high accuracy",
    icon: Building2,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    highlights: [
      "Predict loan approval outcomes",
      "Identified key factors via EDA",
      "Improved accuracy using feature engineering"
    ],
    tools: ["Python", "Machine Learning"]
  },
  {
    title: "Restaurant Data Analysis",
    description: "Comprehensive analysis of restaurant performance metrics",
    icon: UtensilsCrossed,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    highlights: [
      "Analyzed ratings, pricing, and preferences",
      "Visualized trends and performance",
      "Location-wise insights"
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="perspective-1000 group"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 8 : 0,
          rotateY: isHovered ? -8 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="preserve-3d relative"
      >
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        
        <div className="relative glass-card rounded-2xl overflow-hidden shadow-3d group-hover:shadow-3d-hover transition-all duration-500">
          {/* Header with gradient */}
          <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
          
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>

            <ul className="space-y-3 mb-6">
              {project.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing analytical and ML skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
