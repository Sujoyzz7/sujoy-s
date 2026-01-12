import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions to complex challenges with elegant approaches",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
    gradient: "from-glow-tertiary to-glow-tertiary/50",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimizing for speed, efficiency, and user experience",
    gradient: "from-primary to-accent",
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Get to <span className="glow-text">Know Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card-hover p-10 relative"
          >
            <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm <span className="text-foreground font-semibold">Sujoy Roy</span>, a passionate software developer with expertise in building real-world applications using modern frontend and backend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I focus on writing clean, maintainable code and delivering efficient, user-centric solutions. My expertise spans across multiple programming languages, frameworks, and cloud technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm highly motivated, quick to learn, and eager to contribute to professional teams while continuously growing as a software engineer.
              </p>
            </div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "3+", label: "Years Exp" },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="text-center">
                  <div className="text-3xl font-display font-bold glow-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="glass-card-hover p-6 flex items-start gap-5 group cursor-default"
              >
                <motion.div 
                  className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-primary-foreground flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon size={24} />
                </motion.div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
