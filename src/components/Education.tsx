import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Education</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Academic background and relevant coursework
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-accent font-medium mb-2">
                  Computer Science / Information Technology
                </p>
                <p className="text-sm text-muted-foreground mb-6">Currently Pursuing</p>
                
                <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python Programming",
                    "Data Structures",
                    "Database Management Systems",
                    "Operating Systems",
                    "Machine Learning Fundamentals"
                  ].map((course, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
