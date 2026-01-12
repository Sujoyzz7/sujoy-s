import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import ParticleBackground from "@/components/ParticleBackground";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-glow-tertiary/10 blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pt-20 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles size={16} className="animate-pulse" />
              Available for opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="glow-text">Sujoy Roy</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-8 h-14 font-light"
          >
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Full Stack Engineer",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
            <span className="animate-pulse ml-1">|</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building scalable web applications & efficient backend systems.
            <br className="hidden md:block" />
            Passionate about clean code and user-centric solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold overflow-hidden glow-shadow transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="#"
              className="group px-8 py-4 rounded-2xl border-2 border-border text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} className="group-hover:animate-bounce-subtle" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks className="justify-center" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium tracking-wide uppercase">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
