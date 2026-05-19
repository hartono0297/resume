export type Project = {
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  link?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Insurance Service",
    category: "Backend / Microservice / Internal Core App",
    description:
      "Designed and developed a new Insurance Service microservice to support insurance cover-related business processes, including backend API services and frontend implementation.",
    impact:
      "Helped separate insurance-related processes into a dedicated service, improving maintainability and supporting clearer business workflows.",
    technologies: [".NET 6", "C#", "SQL Server", "REST API", "Swagger", "Microservice"],
    note: "Used AI-assisted development tools to speed up UI implementation and development workflow."
  },
  {
    title: "Monitoring App",
    category: "Full-stack / Data Synchronization / Internal App",
    description:
      "Built a monitoring page to track unsynchronized data between vendor applications and internal applications.",
    impact:
      "Improved visibility for operational teams by making synchronization issues easier to identify and follow up.",
    technologies: [".NET 8", "C#", "SQL Server", "Vue.js", "Swagger"]
  },
  {
    title: "Console App Automation",
    category: "Automation / Document Generation / Internal App",
    description:
      "Developed an internal console application to automatically generate Word and PDF documents for memo creation in the company's EMemo web application.",
    impact:
      "Reduced manual document creation work and improved consistency in memo generation.",
    technologies: [".NET Framework", ".NET 8", "C#", "SQL Server", "Word/PDF Automation"]
  },
  {
    title: "Epayment",
    category: "Finance App / Internal System / Integration",
    description:
      "Enhanced an existing internal finance application by developing upload modules, supporting finance workflows, integrating with other internal systems, and maintaining existing features.",
    impact:
      "Supported daily finance operations and improved data flow between internal systems.",
    technologies: [".NET Framework", "C#", "SQL Server"]
  },
  {
    title: "thuangarchitect.com",
    category: "Freelance / Portfolio",
    description:
      "Designed and developed a responsive portfolio website for THUANGARCHITECT, an architecture studio specializing in minimalist private and commercial spaces. The website highlights project showcases, studio information, and contact access through a clean and professional user interface.",
    impact:
      "Helped the studio present architectural work through a polished digital portfolio with direct access to project showcases and contact channels.",
    technologies: ["Next.js", "Tailwind CSS", "Responsive", "AI Prompt"],
    link: "https://thuangarchitect.com"
  }
];
