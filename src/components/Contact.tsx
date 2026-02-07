import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Interested in collaboration or have a project in mind? Let's connect!
        </p>
        
        <div className="max-w-xl mx-auto">
          <div className="grid gap-4">
            <a 
              href="mailto:bhaveshkumar272175@gmail.com"
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">bhaveshkumar272175@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+917985407868"
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 7985407868</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <a href="mailto:bhaveshkumar272175@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
