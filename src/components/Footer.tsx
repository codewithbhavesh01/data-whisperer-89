import { Github, Linkedin, FileText, Mail, Phone } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1JFS-v8o6UpCeD8P2iCH9hyNIbXOaQXgs/view";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Bhavesh Nishad</h3>
            <p className="text-background/70">Data Scientist | Machine Learning Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/codewithbhavesh01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-nishad-49453a331"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bhaveshkumar272175@gmail.com"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+917985407868"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2026 Bhavesh Nishad | Data Scientist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
