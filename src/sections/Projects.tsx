import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-semibold text-center mb-8"
            >
              Other Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
