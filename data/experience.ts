export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "IT Developer",
    company: "PT. Mega Central Finance",
    period: "May 2022 - Present",
    description:
      "Developing and maintaining internal business applications, backend API services, stored procedures, monitoring pages, automation tools, and system integration features.",
    highlights: [
      "Designed and developed the Insurance Service microservice.",
      "Migrated legacy console applications to .NET 8.",
      "Built data synchronization and monitoring between vendor and internal applications.",
      "Gathered requirements with users and Project Managers and translated them into technical designs.",
      "Ran system testing and fixed bugs to improve performance, stability, and reliability."
    ]
  },
  {
    role: "IT MIS",
    company: "PT. Mega Central Finance",
    period: "May 2021 - June 2022",
    description:
      "Provided data based on user requests, developed SQL queries, and supported users with data-related problem solving.",
    highlights: [
      "Provided data based on business user requests.",
      "Developed SQL queries for reporting and operational needs.",
      "Helped solve data-related issues."
    ]
  }
];

export const education = {
  university: "Bunda Mulia University",
  major: "Information System",
  location: "Jakarta, Indonesia",
  period: "2014 - 2018"
};
