export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "C#" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "PHP" },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Angular.js" },
      { name: "Alpine.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: ".NET" },
      { name: "Node.js" },
      { name: "PHP" },
      { name: "Rails" },
      { name: "Deno" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "DynamoDB" },
      { name: "Couchbase" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "Cloudflare" },
      { name: "Apache" },
      { name: "Spark" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Anaconda" },
      { name: "Canva" },
    ],
  },
];
