import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { skillsData } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
