import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Project visual */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-glow-tertiary/30" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.8 }}
        />
        
        {/* Large letter */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="font-display text-8xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
            {project.title.charAt(0)}
          </span>
        </motion.div>

        {/* Hover overlay with links */}
        <motion.div 
          className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-primary text-primary-foreground"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={22} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-secondary text-foreground border border-border"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={22} />
            </motion.a>
          )}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div 
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium flex items-center gap-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Featured
            <ArrowUpRight size={12} />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
