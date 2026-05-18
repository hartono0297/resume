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
      "Designed and developed Insurance Service microservice.",
      "Migrated legacy console applications to .NET 8.",
      "Implemented data synchronization between vendor and internal applications.",
      "Created monitoring pages to track unsynchronized data.",
      "Developed stored procedures to automate data processing.",
      "Fixed bugs to improve performance, stability, and reliability.",
      "Gathered user requirements and translated them into functional and technical designs.",
      "Collaborated with Project Manager to clarify requirements and align priorities.",
      "Created and executed system testing."
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
