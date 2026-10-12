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
    technologies: [".NET 6", "C#", "SQL Server", "REST API", "Swagger", "Microservice"]
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
    category: "Freelance / Portfolio / Static Website",
    description:
      "Designed and developed a fast, responsive portfolio website for THUANGARCHITECT, a Medan-based architecture studio specializing in minimalist private and commercial spaces. Project photos are automatically optimized into clean galleries, and the site is set up to be easy to find on Google and AI search.",
    impact:
      "Helped the studio present its work through a polished portfolio that scores 90+ on mobile Lighthouse, with automated tests checking every change before it goes live.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Static Export",
      "SEO / GEO",
      "Playwright",
      "Lighthouse",
      "GitHub Actions",
      "Netlify",
      "Claude Code"
    ],
    link: "https://www.thuangarchitect.com"
  },
  {
    title: "Fintrac",
    category: "Freelance / Personal Finance / Web App",
    description:
      "Designed and developed a personal finance web app that keeps accounts, bills, credit cards, and installments in one record book. Installments are visualized as a garden of trees that grow with every recorded payment, alongside cash flow reports, maintenance schedules, and upcoming bill reminders. The whole app was built end-to-end with Claude agents.",
    impact:
      "Makes personal money management calmer and faster with receipt-photo drafts, an AI assistant that answers from the user's own records, and CSV/Excel exports, with every AI suggestion waiting for user confirmation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vercel AI SDK",
      "Playwright",
      "Claude Code",
      "Obsidian",
      "Context7"
    ],
    link: "https://fintrac.my.id"
  }
];
