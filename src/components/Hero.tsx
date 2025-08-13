import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-60 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-primary rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Greeting */}
          <p className="text-lg text-muted-foreground fade-in-up">
            Hi there! I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-gradient fade-in-up">
            Paul
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground fade-in-up">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed fade-in-up">
            I craft exceptional digital experiences using the MERN stack, 
            with a passion for clean code, innovative solutions, and bringing ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
            <Button size="lg" className="btn-glow px-8 py-3 text-lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg glass-card border-glass-border hover:bg-glass">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-up">
            <a 
              href="#" 
              className="p-3 glass-card border-glass-border hover:bg-glass transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-card border-glass-border hover:bg-glass transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-card border-glass-border hover:bg-glass transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;