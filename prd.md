PRD WEBSITE PORTFOLIO - HARTONO HONG
=======================================

Document Type : Product Requirements Document
Project Name  : Personal Portfolio Website
Owner         : Hartono Hong
Role Focus    : Software Developer / IT Developer
Stack         : Next.js, TypeScript, Tailwind CSS
Deployment    : Netlify
Reference     : https://www.hartono.dev/


1. PRODUCT OVERVIEW
-------------------

Website portfolio personal ini dibuat untuk menampilkan profil profesional Hartono Hong sebagai Software Developer yang berfokus pada backend development, internal business applications, system integration, automation, dan full-stack development.

Website ini akan menjadi pusat informasi profesional yang berisi profil singkat, pengalaman kerja, project, skill, education, contact, serta link download CV.

Website harus memiliki tampilan modern, clean, minimalis, dan developer-oriented. Referensi visual menggunakan https://www.hartono.dev/ dengan pendekatan dark mode, typography besar, section yang rapi, dan tone profesional.


2. OBJECTIVES
-------------

Tujuan utama website:

1. Membangun personal branding sebagai Software Developer.
2. Menampilkan pengalaman profesional secara lebih menarik dibanding CV biasa.
3. Menonjolkan project yang pernah dibuat, terutama project internal perusahaan.
4. Mempermudah recruiter, HR, atau tech lead memahami skill dan pengalaman Hartono.
5. Menyediakan akses cepat ke CV, LinkedIn, GitHub, email, dan project.
6. Menunjukkan kemampuan frontend modern menggunakan Next.js dan Tailwind CSS.


3. TARGET USERS
---------------

Target user website:

1. HR / Recruiter
2. Tech Lead
3. Engineering Manager
4. Hiring Manager
5. Client freelance potensial
6. Koneksi LinkedIn
7. Orang yang ingin melihat portfolio dan pengalaman teknis Hartono


4. POSITIONING
--------------

Main positioning:

"Software Developer building reliable backend services, internal business applications, and automation tools with .NET, SQL Server, and Vue.js."

Alternative shorter positioning:

"Software Developer focused on backend services, internal business applications, and system integration."

Hero section copy:

"Hartono Hong."

"Software Developer building reliable backend services, internal business applications, and automation tools with .NET, SQL Server, and Vue.js."


5. VISUAL DIRECTION
-------------------

Tone visual:

1. Dark mode dominant.
2. Minimalist and clean.
3. Developer-oriented.
4. Editorial layout.
5. Large typography.
6. Thin borders.
7. Smooth spacing.
8. Subtle animation.
9. Numbered sections, for example:
   - 01 About
   - 02 Work
   - 03 Experience
   - 04 Contact

Color palette:

Primary Background   : #080808
Secondary Background : #111111
Card Background      : #161616
Text Primary         : #F5F5F0
Text Secondary       : #A1A1AA
Muted Text           : #71717A
Border Color         : #2A2A2A
Accent Color         : #A3E635

Recommended accent:

Accent Green: #A3E635

Reason:
This color gives a modern developer feel, looks clean on dark mode, and can be used for highlights, badges, active states, and small visual details.


6. TYPOGRAPHY
-------------

Recommended fonts:

Heading Font : Geist Sans
Body Font    : Geist Sans
Mono Font    : JetBrains Mono

Alternative:

Heading Font : Space Grotesk
Body Font    : Inter
Mono Font    : JetBrains Mono

Final recommendation:

Use Geist Sans for the main font and JetBrains Mono for small technical labels, code-like text, section numbers, and stack tags.


7. TECH STACK
-------------

Main stack:

Framework       : Next.js
Language        : TypeScript
Styling         : Tailwind CSS
Animation       : Framer Motion
Deployment      : Netlify
Package Manager : pnpm or npm
Font            : Geist Sans + JetBrains Mono
Content Source  : Local TypeScript data files
Icons           : Lucide React
SEO             : Next.js Metadata API

Recommended stack:

1. Next.js
2. TypeScript
3. Tailwind CSS
4. Framer Motion
5. Lucide React
6. Netlify
7. Local data config using TypeScript


8. WHY NEXT.JS
--------------

Next.js is selected because:

1. It is widely used for modern portfolio websites.
2. It supports SEO-friendly rendering.
3. It has strong TypeScript support.
4. It is easy to structure using reusable components.
5. It works well with Tailwind CSS.
6. It can be deployed to Netlify.
7. It gives a professional impression to recruiters and tech leads.
8. It can be extended later with blog, project detail pages, or MDX content.


9. DEPLOYMENT TARGET
--------------------

Deployment platform:

Netlify

Deployment requirements:

1. Website must be connected to GitHub repository.
2. Netlify should automatically deploy from the main branch.
3. Build command should be configured properly.
4. Custom domain can be connected later.
5. Environment variables are not required for MVP.
6. Website must be HTTPS-enabled.

Recommended Netlify config:

Build command:
npm run build

Publish directory:
.next

If using Netlify Next.js runtime, install the official Netlify plugin if needed.

Suggested netlify.toml:

[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"


10. WEBSITE STRUCTURE
---------------------

Website type:

Single-page portfolio website.

Main sections:

1. Navbar
2. Hero
3. About
4. Skills
5. Selected Work / Projects
6. Experience
7. Education
8. Contact
9. Footer


11. NAVIGATION
--------------

Navbar items:

1. About
2. Work
3. Experience
4. Contact
5. Resume

Navbar behavior:

1. Sticky navbar on top.
2. Transparent or semi-transparent dark background.
3. Smooth scroll to each section.
4. Resume button should open or download the CV file.
5. Mobile menu should collapse into a simple menu button.

Example navbar:

hartono.hong | About | Work | Experience | Contact | Resume


12. HERO SECTION
----------------

Objective:

Give a strong first impression within the first 5 seconds.

Content:

Name:
Hartono Hong.

Headline:
Software Developer building reliable backend services, internal business applications, and automation tools.

Subheadline:
I work with .NET, SQL Server, REST APIs, and modern frontend technologies to build reliable applications that support business operations.

Metadata:
Based in Jakarta, Indonesia
Focus: Backend, Full-stack, Automation
Stack: .NET, SQL Server, Vue.js, Next.js

CTA buttons:

1. View Selected Work
2. Download CV
3. Get in Touch

UI requirements:

1. Large name typography.
2. Dark background.
3. Accent badge.
4. Minimal animation.
5. Responsive layout.


13. ABOUT SECTION
-----------------

Objective:

Explain who Hartono is and what kind of work he does.

Suggested copy:

I’m a Software Developer based in Jakarta, focused on building reliable internal business applications, backend API services, and automation tools.

My work includes developing insurance-related microservices, data synchronization processes, monitoring pages, stored procedures, and document automation tools. I work mainly with .NET, SQL Server, REST APIs, and Vue.js, with growing interest in AI-assisted development and backend architecture.

I enjoy turning business requirements into stable, maintainable applications that support daily operations.

Highlight cards:

1. 3+ years professional experience
2. Backend and internal application focused
3. .NET and SQL Server stack
4. System integration and automation experience


14. SKILLS SECTION
------------------

Objective:

Show technical capabilities in a clean and categorized format.

Skill categories:

Backend:
- .NET Framework
- .NET Core
- .NET 8
- ASP.NET Core
- C#
- REST APIs
- Swagger
- JWT Authentication

Frontend:
- Next.js
- React
- Vue.js
- Composition API
- JavaScript
- TypeScript
- HTML
- CSS
- Tailwind CSS
- PrimeVue

Database:
- SQL Server
- Stored Procedure
- Query Development
- Query Optimization
- Data Synchronization

Architecture and Practices:
- Layered Architecture
- Repository Pattern
- Service Pattern
- Microservice-based Application
- System Integration
- API Integration

AI and Automation:
- GitHub Copilot
- Claude
- Claude Code
- Gemini
- Codex
- Prompt Engineering
- AI-assisted Development

Tools:
- Visual Studio
- VS Code
- Git
- Postman
- Swagger


15. PROJECTS SECTION
--------------------

Section title:

02 Selected Work

Objective:

Show selected projects with business context, technical contribution, and impact.

Project card structure:

1. Project title
2. Category
3. Short description
4. Impact
5. Technologies
6. Optional link or internal label


PROJECT 1: Insurance Service

Category:
Backend, Microservice, Internal Core App

Description:
Designed and developed a new Insurance Service microservice to support insurance cover-related business processes, including backend API services and frontend implementation.

Impact:
Helped separate insurance-related processes into a dedicated service, improving maintainability and supporting clearer business workflows.

Technologies:
.NET 6, C#, SQL Server, REST API, Swagger, Microservice

AI note:
Used AI-assisted development tools to speed up UI implementation and development workflow.


PROJECT 2: Monitoring App

Category:
Full-stack, Data Synchronization, Internal App

Description:
Built a monitoring page to track unsynchronized data between vendor applications and internal applications.

Impact:
Improved visibility for operational teams by making synchronization issues easier to identify and follow up.

Technologies:
.NET 8, C#, SQL Server, Vue.js, Swagger


PROJECT 3: Console App Automation

Category:
Automation, Document Generation, Internal App

Description:
Developed an internal console application to automatically generate Word and PDF documents for memo creation in the company’s EMemo web application.

Impact:
Reduced manual document creation work and improved consistency in memo generation.

Technologies:
.NET Framework, .NET 8, C#, SQL Server, Word/PDF Automation


PROJECT 4: Epayment

Category:
Finance App, Internal System, Integration

Description:
Enhanced an existing internal finance application by developing upload modules, supporting finance workflows, integrating with other internal systems, and maintaining existing features.

Impact:
Supported daily finance operations and improved data flow between internal systems.

Technologies:
.NET Framework, C#, SQL Server


16. EXPERIENCE SECTION
----------------------

Section title:

03 Experience

Timeline item 1:

Role:
IT Developer

Company:
PT. Mega Central Finance

Period:
May 2022 - Present

Description:
Developing and maintaining internal business applications, backend API services, stored procedures, monitoring pages, automation tools, and system integration features.

Highlights:
- Designed and developed Insurance Service microservice.
- Migrated legacy console applications to .NET 8.
- Implemented data synchronization between vendor and internal applications.
- Created monitoring pages to track unsynchronized data.
- Developed stored procedures to automate data processing.
- Fixed bugs to improve performance, stability, and reliability.
- Gathered user requirements and translated them into functional and technical designs.
- Collaborated with Project Manager to clarify requirements and align priorities.
- Created and executed system testing.

Timeline item 2:

Role:
IT MIS

Company:
PT. Mega Central Finance

Period:
May 2021 - June 2022

Description:
Provided data based on user requests, developed SQL queries, and supported users with data-related problem solving.

Highlights:
- Provided data based on business user requests.
- Developed SQL queries for reporting and operational needs.
- Helped solve data-related issues.


17. EDUCATION SECTION
---------------------

University:
Bunda Mulia University

Major:
Information System

Location:
Jakarta, Indonesia

Period:
2014 - 2018


18. CONTACT SECTION
-------------------

Section title:

04 Contact

Objective:

Make it easy for recruiters or collaborators to contact Hartono.

Suggested copy:

Let’s build something reliable.

I’m open to software developer roles focused on backend development, full-stack development, internal business applications, automation, and system integration.

Contact links:

Email:
hartonoaka97@gmail.com

LinkedIn:
https://www.linkedin.com/in/hartonohong

GitHub:
https://github.com/hartonoaka97

Website:
hartonohong.dev

CTA buttons:

1. Email Me
2. LinkedIn
3. GitHub
4. Download CV


19. FOOTER
----------

Footer content:

Built with Next.js, TypeScript, and Tailwind CSS.
Deployed on Netlify.
© 2026 Hartono Hong.

Optional footer style:
Use small mono font and muted text color.


20. FUNCTIONAL REQUIREMENTS
---------------------------

MVP functional requirements:

1. Website must have one landing page.
2. Website must have a responsive navbar.
3. Navbar links must scroll to each section.
4. Hero section must include name, headline, description, and CTA.
5. About section must explain profile and work focus.
6. Skills section must show categorized technical skills.
7. Projects section must show selected work.
8. Experience section must show professional timeline.
9. Education section must show university information.
10. Contact section must show contact links.
11. Download CV button must work.
12. Website must be fully responsive.
13. Website must have dark mode as default.
14. Website must include SEO metadata.
15. Website must be deployed to Netlify.


21. NON-FUNCTIONAL REQUIREMENTS
-------------------------------

Performance:

1. Lighthouse Performance score target: 90+
2. Optimized fonts.
3. Minimal third-party libraries.
4. Lazy load heavy components if needed.
5. Avoid large image files.

SEO:

1. Use proper page title.
2. Use meta description.
3. Use Open Graph metadata.
4. Use semantic HTML.
5. Use sitemap and robots.txt if possible.

Accessibility:

1. Proper color contrast.
2. Keyboard accessible navigation.
3. Focus state for links and buttons.
4. Proper heading hierarchy.
5. Alt text for images.
6. Readable font size on mobile.

Maintainability:

1. Data should be stored in local TypeScript files.
2. Components should be reusable.
3. Styling should use Tailwind utility classes.
4. Project and experience content should be easy to update.
5. No unnecessary hardcoded repeated content.


22. MVP SCOPE
-------------

Included in MVP:

1. Single-page website.
2. Dark theme.
3. Responsive design.
4. Hero section.
5. About section.
6. Skills section.
7. Projects section.
8. Experience section.
9. Education section.
10. Contact section.
11. Download CV.
12. SEO metadata.
13. Netlify deployment.

Not included in MVP:

1. Blog.
2. CMS.
3. Admin dashboard.
4. Database.
5. Authentication.
6. Contact form backend.
7. GitHub API integration.
8. Multi-language support.


23. FUTURE ENHANCEMENTS
-----------------------

Possible future improvements:

1. Blog or notes section for .NET, SQL, Vue, and AI topics.
2. Project detail pages.
3. MDX support.
4. Light mode toggle.
5. Contact form with Netlify Forms.
6. GitHub project integration.
7. Analytics.
8. Custom Open Graph image.
9. Animation polish.
10. Case study format for selected projects.


24. RECOMMENDED FOLDER STRUCTURE
--------------------------------

portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── skills-section.tsx
│   ├── project-card.tsx
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts
├── public/
│   ├── cv-hartono-hong.pdf
│   └── og-image.png
├── netlify.toml
├── package.json
├── tailwind.config.ts
└── tsconfig.json


25. DATA STRUCTURE
------------------

Profile data example:

export const profile = {
  name: "Hartono Hong",
  role: "Software Developer",
  location: "Jakarta, Indonesia",
  email: "hartonoaka97@gmail.com",
  website: "hartonohong.dev",
  linkedin: "https://www.linkedin.com/in/hartonohong",
  github: "https://github.com/hartonoaka97",
  summary:
    "Software Developer building reliable backend services, internal business applications, and automation tools with .NET, SQL Server, and Vue.js."
}

Project data example:

export type Project = {
  title: string
  category: string
  description: string
  impact: string
  technologies: string[]
  year?: string
  link?: string
}

Experience data example:

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}


26. ACCEPTANCE CRITERIA
-----------------------

The website is considered complete when:

1. The website is accessible on desktop and mobile.
2. All main sections are implemented.
3. Navbar scroll works correctly.
4. Download CV button works.
5. Email, LinkedIn, and GitHub links work.
6. Project content is aligned with the CV.
7. Dark visual style is consistent.
8. Font and spacing feel clean and modern.
9. Lighthouse Performance score is at least 90.
10. Lighthouse SEO score is at least 90.
11. Website is successfully deployed on Netlify.
12. No major typo or broken link.
13. Code is structured and easy to maintain.


27. RECOMMENDED DEVELOPMENT PHASES
----------------------------------

Phase 1: Setup

1. Create Next.js project.
2. Install TypeScript, Tailwind CSS, Framer Motion, and Lucide React.
3. Setup base layout and global styles.
4. Setup font.
5. Setup Netlify config.

Phase 2: Content and Layout

1. Create data files.
2. Build Navbar.
3. Build Hero section.
4. Build About section.
5. Build Skills section.
6. Build Projects section.
7. Build Experience section.
8. Build Contact section.
9. Build Footer.

Phase 3: Polish

1. Add subtle animations.
2. Improve responsive layout.
3. Add hover states.
4. Add SEO metadata.
5. Add CV file.
6. Add OG image.

Phase 4: Deployment

1. Push code to GitHub.
2. Connect repository to Netlify.
3. Configure build command.
4. Deploy website.
5. Test live URL.
6. Connect custom domain.


28. FINAL RECOMMENDATION
------------------------

Recommended final stack:

Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide React
Netlify

Recommended design direction:

Dark editorial developer portfolio with clean typography, large hero name, numbered sections, project cards focused on business impact, and strong positioning around .NET, SQL Server, backend services, automation, and internal business applications.

Recommended main headline:

Hartono Hong.
Software Developer building reliable internal business applications.

Recommended website goal:

Make Hartono look professional, technical, reliable, and ready for software developer opportunities.
