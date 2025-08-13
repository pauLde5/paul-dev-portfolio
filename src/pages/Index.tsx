import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-glass-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to turn your ideas into reality? Let's connect and create something extraordinary.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Paul. Built with React, TypeScript, and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
