import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain, BarChart3, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "R", "C", "SQL"]
  },
  {
    title: "Data Science & AI",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "NLP", "AI", "Statistics"]
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL", "Data Modeling"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Fast Learner", "Problem Solving", "Teamwork"]
  }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <category.icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills3D = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies in data science, machine learning, and analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills3D;
