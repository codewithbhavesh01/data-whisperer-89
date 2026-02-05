const skillCategories = [
  {
    title: "Programming & Data",
    skills: ["Python", "SQL", "NumPy", "Pandas"]
  },
  {
    title: "Data Science",
    skills: ["Statistics", "EDA", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "Machine Learning",
    skills: ["Regression", "Classification", "Clustering"]
  },
  {
    title: "Visualization",
    skills: ["Matplotlib", "Seaborn"]
  },
  {
    title: "Tools",
    skills: ["Jupyter Notebook", "Git", "GitHub", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Core competencies in data science, machine learning, and analytics
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
