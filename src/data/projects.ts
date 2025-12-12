export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    description: "A clean, Medium-inspired personal website built with Next.js and Tailwind CSS.",
    longDescription: "This website serves as my digital home on the internet. Built with modern technologies and a focus on readability, it showcases my writing, projects, and professional journey. The design draws inspiration from Medium's clean aesthetic while maintaining its own unique character.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "A minimalist task management application with drag-and-drop functionality.",
    longDescription: "A productivity tool designed to help individuals and teams organize their work efficiently. Features include customizable boards, real-time collaboration, and smart notifications. The focus is on simplicity without sacrificing powerful features.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A beautiful weather application with detailed forecasts and interactive maps.",
    longDescription: "An elegant weather application that provides accurate forecasts with stunning visualizations. Features include 7-day forecasts, hourly breakdowns, interactive radar maps, and severe weather alerts. Designed with a focus on both functionality and aesthetics.",
    technologies: ["Vue.js", "OpenWeather API", "Mapbox", "Chart.js"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: "markdown-editor",
    title: "Markdown Editor",
    description: "A distraction-free writing environment with live preview and export options.",
    longDescription: "A focused writing tool for developers and writers who love Markdown. Features include split-pane live preview, syntax highlighting, multiple export formats, and cloud sync. Built with writers in mind, emphasizing a clean, distraction-free interface.",
    technologies: ["Electron", "React", "CodeMirror", "Marked"],
    github: "#",
    featured: false
  }
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
