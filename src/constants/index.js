import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  boardblueprint,
  discordbot,
  frostbane,
  threejs,
  melodymapper,
  renderrealm,
  python,
  c,
  flask,
  godot,
  java,
  pytorch,
  tensorflow,
  unity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills"
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Godot",
    icon: godot,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Flask",
    icon: flask,
  },
];

const experiences = [
  {},
];

const projects = [
  {
    name: "Render Realm",
    description:
      "Web-based platform that renders 3D models and animations. \
      Incorporated features like OrbitControls for intuitive user navigation and interaction with 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      }
    ],
    image: renderrealm,
    source_code_link: "https://github.com/aaronmpark/RenderRealm",
  },
  {
    name: "Board Blueprint",
    description:
      "Web-based platform designed to aggregate and display keyboard prices, specifications, and images from premier retailers. \
      Implemented a web-scraping program with Python to dynamically parse data from keyboard sites into structued JSON files.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "json",
        color: "blue-text-gradient",
      }, {
        name: "WebScraping",
        color: "green-text-gradient",
      },
    ],
    image: boardblueprint,
    source_code_link: "https://github.com/aaronmpark/BoardBlueprint",
  },
  {
    name: "Melody Mapper",
    description:
      "Web-based application utilizing Flask and Spotify API to generate playlists based on tempo and user history. \
      Integrated Spotify OAuth authentication to facilitate secure user logins. \
      ",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "SpotifyAPI",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: melodymapper,
    source_code_link: "https://github.com/aaronmpark/MelodyMapper",
  },
  {
    name: "Discord Bot",
    description:
      "Multifaceted Discord Bot that can run autonomously. \
      Some features include pulling League of Legends data, welcome new server users, relaying bot latency, \
      displaying custom Embeds, and etc.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "DiscordAPI",
        color: "green-text-gradient",
      },
      {
        name: "DataScraping",
        color: "pink-text-gradient",
      },
    ],
    image: discordbot,
    source_code_link: "https://github.com/aaronmpark/DiscordBot",
  },
  {
    name: "Frostbane",
    description:
      "3D horror game developed with a team of 5 developers. Vivid in-game experience with an immersive environment.",
    tags: [
      {
        name: "godot",
        color: "blue-text-gradient",
      },
      {
        name: "GDScript",
        color: "green-text-gradient",
      },
      {
        name: "team-oriented",
        color: "pink-text-gradient",
      },
    ],
    image: frostbane,
    source_code_link: "https://github.com/UVASGD/spring-2024-frostbane",
  },
];

export { services, technologies, experiences, projects };