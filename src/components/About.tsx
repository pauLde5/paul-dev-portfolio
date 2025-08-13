import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Globe, techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"] },
    { category: "Backend", icon: Database, techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"] },
    { category: "Mobile", icon: Smartphone, techs: ["React Native", "Flutter", "iOS", "Android"] },
    { category: "Tools", icon: Code, techs: ["Git", "Docker", "AWS", "Jest", "Figma"] }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications 
            and mobile solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6 fade-in-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my coding journey in college with a simple "Hello World" in Java. 
                  What began as curiosity quickly became a passion for creating digital solutions 
                  that solve real-world problems.
                </p>
                <p>
                  Today, I specialize in the MERN stack, building everything from responsive 
                  web applications to scalable APIs. I love the challenge of turning complex 
                  requirements into elegant, user-friendly experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient">20+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 fade-in-up">
            <h3 className="text-2xl font-semibold text-gradient">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={skill.category} className="glass-card p-6 hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">{skill.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.techs.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="bg-muted/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;