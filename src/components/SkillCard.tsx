import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Cloud, Wrench, LucideIcon } from "lucide-react";
import { SkillCategory } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  const Icon = iconMap[category.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card-hover p-7 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div 
          className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary border border-primary/20"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon size={26} />
        </motion.div>
        <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
          {category.title}
        </h3>
      </div>
      <motion.div 
        className="flex flex-wrap gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05, delayChildren: 0.2 + index * 0.1 },
          },
        }}
      >
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill.name}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ 
              scale: 1.08, 
              backgroundColor: "hsl(var(--primary) / 0.15)",
              borderColor: "hsl(var(--primary) / 0.4)",
            }}
            className="skill-pill"
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
