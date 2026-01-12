import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { allSocialsData } from "@/data/socials";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  BookOpen, 
  Facebook, 
  Instagram,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  BookOpen,
  Facebook,
  Instagram,
  Mail,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

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
            Get In Touch
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={itemVariants}
              className="font-display text-3xl font-semibold mb-6"
            >
              Let's Work Together
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-5 mb-10">
              <motion.div 
                className="flex items-center gap-5 p-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-lg group-hover:text-primary transition-colors">contact@sujoyroy.dev</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-5 p-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-lg group-hover:text-primary transition-colors">Bangladesh</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm text-muted-foreground mb-5 font-medium">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {allSocialsData.map((social) => {
                  const Icon = iconMap[social.icon];
                  if (!Icon) return null;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      aria-label={social.name}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={22} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card-hover p-10 relative"
          >
            <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="space-y-7">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-secondary/50 border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-secondary/50 border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-secondary/50 border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-3 glow-shadow transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Send size={20} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                Send Message
                <ArrowRight size={18} className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
