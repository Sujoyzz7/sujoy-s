import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions to complex challenges",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-foreground font-medium">Sujoy Roy</span>, a passionate software developer experienced in building real-world applications using modern frontend and backend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I focus on writing clean, maintainable code and delivering efficient, user-centric solutions. My expertise spans across multiple programming languages, frameworks, and cloud technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm highly motivated, quick to learn, and eager to contribute to professional teams while continuously growing as a software engineer.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start gap-4 hover:border-primary/40 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
