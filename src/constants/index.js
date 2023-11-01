import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  nextjs,
  graphql,
  materialui,
  brightside,
  webrise,
  amai,
  videoly,
  indiepub,
  wilbo,
  catfriendly,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Brightside",
    icon: brightside,
    iconBg: "#FFFFFF",
    date: "July 2014 - Mar 2021",
    points: [
      "Develop responsive websites and landing pages",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Increase website production with new tools and practices",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Webrise",
    icon: webrise,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Oct 2021",
    points: [
      "Developing and maintaining web applications with React and vanilla JS",
      "Develop educational platforms for clients with React",
      "Create landing pages",
      "Email layout",
      "Develop and successfully launched educational platform for vet specialists with React",
      "Develop and refactor SPA for corporate clients (banks, insurance companies)",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Amai",
    icon: amai,
    iconBg: "#000000",
    date: "Nov 2021 - Feb 2023",
    points: [
      "Develop UI components with React based on Figma design",
      "Creating requests to backend with GraphQL",
      "Maintain and update npm repo for app editor",
      "Bug fixing after Q/A tests",
      "Sprint planning",
      "Code review",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Videoly",
    icon: videoly,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Develop b2b prioritization tool for company needs with Ember.js and Typescript",
      "Develop UI Kit for Videoly apps",
      "Implement new and maintain current features of the internal SPA with Ember.js and Typescript",
      "Refactor legacy code in company inner service",
      "Write acceptance, integration and unit tests with QUnit",
      "Cooperate with designers and sales team to improve the service and user experience of the company's products",
      "CI/CD with Heroku",
      "Code review and sprint planning",
    ],
  },
];

const projects = [
  {
    name: "Indiepub",
    description:
      "Workin' together with developers team we created indiepub.ai - web app to create audio books with the help of AI. I worked on web interface and editor of the app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: indiepub,
    source_code_link: "https://indiepub.ai",
  },
  {
    name: "Wilbo",
    description:
      "Wilbo.ru is online store of robots. One of my main task were coding of landing pages for goods. I worked together with another frontend on this project to make it fully responsive, nice and clean.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: wilbo,
    source_code_link: "https://wilbo.ru",
  },
  {
    name: "Catfriendly",
    description:
      "Cat Friendly is huge educational platform for vet specialists. This project was made with Html, Scss and React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: catfriendly,
    source_code_link: "https://catfriendly.ru",
  },
];

export { technologies, experiences, projects };