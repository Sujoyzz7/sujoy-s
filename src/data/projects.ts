export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Chatbot Web App",
    description: "An intelligent conversational AI platform built with modern NLP techniques, featuring real-time responses and context awareness.",
    image: "/placeholder.svg",
    technologies: ["React", "Python", "OpenAI", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with cart management, secure payments, and inventory tracking.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "School Management System",
    description: "Comprehensive educational management solution for tracking students, courses, grades, and attendance.",
    image: "/placeholder.svg",
    technologies: ["C#", ".NET", "SQL Server", "Angular"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Cybersecurity Scanner",
    description: "Automated vulnerability detection tool that scans networks and web applications for security flaws.",
    image: "/placeholder.svg",
    technologies: ["Python", "Docker", "PostgreSQL"],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Video Streaming Platform",
    description: "A scalable video uploading and streaming service with transcoding and adaptive bitrate playback.",
    image: "/placeholder.svg",
    technologies: ["React", "AWS", "Node.js", "FFmpeg"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
