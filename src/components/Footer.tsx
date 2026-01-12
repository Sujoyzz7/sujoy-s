import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 relative overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span 
              className="font-display text-2xl font-bold glow-text"
              whileHover={{ scale: 1.05 }}
            >
              Sujoy Roy
            </motion.span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved. Built with ❤️
            </p>
          </div>
          <SocialLinks size={18} />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
