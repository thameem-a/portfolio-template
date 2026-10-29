//  portfolio config - edit this file to customise the site.
//  page.tsx renders everything from these values.

export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Company = {
  name: string;
  url?: string;
  location: string;
  roles: Role[];
};

export type Project = {
  name: string;
  url?: string;
  urlLabel?: string;
  year: string;
  status?: string;
  techStack?: string[];
  bullets: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  url?: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type School = {
  name: string;
  url?: string;
  location: string;
  degree: string;
  period: string;
  coursework?: string;
};

export type MapLocation = {
  name: string;
  coords: [number, number];
  type: "current" | "lived" | "visited";
  note?: string;
};

//  personal
export const personal = {
  name: "Jane Doe",
  title: "Software Engineer",
  // shown in the browser tab / search results
  description: "Software Engineer building fast, reliable web apps",
  // terminal prompt username, e.g. jane@portfolio:~$
  handle: "jane",
  email: "jane@example.com",
  location: {
    label: "Toronto, ON",
    url: "https://www.destinationtoronto.com",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/your-handle",
  },
  github: {
    label: "Github",
    url: "https://github.com/your-handle",
  },
  // drop your resume into public/resume.pdf
  resume: "/resume.pdf",
  // optional "Create your own" link under the contact links; "" hides it
  templateUrl: "",
};

//  experience: newest company first; each company can hold several roles
export const experience: Company[] = [
  {
    name: "Acme Corp",
    url: "https://example.com",
    location: "Toronto, ON",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Jan. 2025 – Present",
        bullets: [
          "Cut checkout latency 40% (900ms to 540ms p95) by moving pricing lookups into a Redis read-through cache.",
          "Led a team of 4 to ship a self-serve billing portal used by 10k+ customers in its first month.",
          "Write each bullet as: accomplished [X], measured by [Y], by doing [Z].",
        ],
      },
      {
        title: "Software Engineer",
        period: "Jun. 2023 – Jan. 2025",
        bullets: [
          "Built a React/TypeScript component library reused across 12 internal apps.",
          "Added end-to-end tests to the release pipeline, dropping production rollbacks from 6 to 1 per quarter.",
        ],
      },
    ],
  },
  {
    name: "Globex",
    location: "Remote",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "May 2022 – Aug. 2022",
        bullets: [
          "Shipped an internal analytics dashboard in Next.js and Recharts used by the ops team daily.",
        ],
      },
    ],
  },
];

//  projects
export const projects: Project[] = [
  {
    name: "Project One",
    url: "https://example.com",
    urlLabel: "example.com",
    year: "2026",
    techStack: ["Next.js", "FastAPI", "PostgreSQL"],
    bullets: [
      "One-line pitch: what it does and who it's for.",
      "The hardest technical problem you solved, with a number attached.",
    ],
  },
  {
    name: "Project Two",
    url: "https://github.com/your-handle/project-two",
    urlLabel: "GitHub",
    year: "2025",
    status: "In Progress",
    techStack: ["Go", "SQLite"],
    bullets: ["Leave out url to show a project without a link."],
  },
];

//  skills
export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "Cloud / Data",
    items: ["PostgreSQL", "AWS", "Docker", "Vercel"],
  },
];

//  education
export const education: School[] = [
  {
    name: "University of Toronto",
    url: "https://www.utoronto.ca",
    location: "Toronto, ON",
    degree: "Bachelor of Computer Science",
    period: "Sept. 2019 – May 2023",
    coursework: "Data Structures & Algorithms, Operating Systems, Databases",
  },
];

//  map locations: add/remove freely.
//  type: "current" = highlighted + map centers on it (use one), "lived" = filled dot, "visited" = hollow dot
//  coords are [latitude, longitude]; right-click a spot in Google Maps to copy them
export const mapLocations: MapLocation[] = [
  {
    name: "Toronto, ON",
    coords: [43.6532, -79.3832],
    type: "current",
    note: "Currently here",
  },
  {
    name: "Vancouver, BC",
    coords: [49.2827, -123.1207],
    type: "lived",
    note: "Lived",
  },
  {
    name: "Tokyo, Japan",
    coords: [35.6762, 139.6503],
    type: "visited",
    note: "Visited",
  },
  {
    name: "Lisbon, Portugal",
    coords: [38.7223, -9.1393],
    type: "visited",
    note: "Visited",
  },
];
