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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon size={24} />
        </div>
        <h3 className="font-display font-semibold text-lg">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
