import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoTracker",
      description: "A full-stack sustainability tracking app that helps users monitor their carbon footprint and environmental impact.",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "TaskFlow Pro",
      description: "Modern project management platform with real-time collaboration, built with MERN stack and Socket.io.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "CryptoPortfolio",
      description: "Real-time cryptocurrency portfolio tracker with advanced analytics and market insights.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "API Integration"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "FoodieShare",
      description: "Social platform for food enthusiasts to share recipes and culinary experiences.",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "StudyBuddy",
      description: "AI-powered learning assistant that creates personalized study plans and tracks progress.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      tags: ["Python", "React", "AI/ML", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "WeatherWise",
      description: "Beautiful weather app with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Weather API", "PWA"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass-card overflow-hidden hover:scale-105 transition-all duration-500 fade-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <Button size="sm" className="btn-glow">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card border-glass-border">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" className="btn-glow">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card border-glass-border">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gradient">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-muted/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
