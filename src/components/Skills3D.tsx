import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Database, Brain, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Data",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "SQL", "NumPy", "Pandas"]
  },
  {
    title: "Data Science",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["Statistics", "EDA", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    skills: ["Regression", "Classification", "Clustering"]
  },
  {
    title: "Visualization",
    icon: BarChart3,
    color: "from-orange-500 to-yellow-500",
    skills: ["Matplotlib", "Seaborn"]
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-rose-500 to-red-500",
    skills: ["Jupyter Notebook", "Git", "GitHub", "VS Code"]
  }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
          z: isHovered ? 50 : 0
        }}
        transition={{ duration: 0.3 }}
        className="preserve-3d"
      >
        <div className={`glass-card rounded-2xl p-6 h-full transition-all duration-500 ${isHovered ? 'shadow-3d-hover' : 'shadow-3d'}`}>
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg`}>
            <category.icon className="w-7 h-7 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
          
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies in data science, machine learning, and analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills3D;
