import { CreditCard, Building2, UtensilsCrossed, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description: "Analyzed transaction data to identify fraudulent credit card activities using machine learning techniques.",
    icon: CreditCard,
    highlights: [
      "Data preprocessing and class imbalance handling",
      "Model evaluation using precision, recall, F1-score",
      "ROC-AUC metrics optimization"
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "Classification"]
  },
  {
    title: "Loan Approval Prediction",
    description: "Built a data-driven system to predict loan approval outcomes based on applicant data.",
    icon: Building2,
    highlights: [
      "Exploratory data analysis for key approval factors",
      "Feature engineering techniques",
      "Model evaluation and accuracy improvement"
    ],
    tags: ["Python", "NumPy", "Feature Engineering", "ML"]
  },
  {
    title: "Restaurant Analysis",
    description: "Analyzed restaurant datasets to identify trends in ratings, pricing, and customer preferences.",
    icon: UtensilsCrossed,
    highlights: [
      "Data cleaning and exploratory analysis",
      "Location-wise performance insights",
      "Visualization of popular cuisines"
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Real-world data science projects showcasing analytical and machine learning skills
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <project.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
