import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cloud, ChartBar } from "lucide-react";

const projects = [
  {
    title: "UIDAI Demographic Intelligence Platform",
    icon: Database,
    problem: "Analyzing large-scale demographic data for pattern discovery and decision-making insights.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    approach: "Applied machine learning techniques for pattern and trend discovery in demographic datasets.",
    outcomes: [
      "Large-scale demographic data analysis",
      "Pattern & trend discovery using ML",
      "Insight generation for decision-making",
      "Interactive visualization dashboards"
    ]
  },
  {
    title: "Weather Forecast Prediction System",
    icon: Cloud,
    problem: "Predicting weather conditions using historical data and time-series analysis.",
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    approach: "Built regression and time-series models to predict weather patterns from historical data.",
    outcomes: [
      "Historical weather data analysis",
      "Regression & time-series models",
      "Prediction visualization",
      "Python-based ML solution"
    ]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
    >
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <project.icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.problem}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Approach:</h4>
          <p className="text-muted-foreground text-sm">{project.approach}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Outcomes:</h4>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChartBar className="w-4 h-4 text-primary flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Tools Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
