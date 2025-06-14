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
  acne,
  aws,
  umee,
  nreca,
  book,
  whisper,
  kubernetes
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
    title: "Cloud Engineer",
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
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "Cloud Platform Engineer Intern",
    company_name: "NRECA",
    icon: nreca,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [

      "Developed and deployed AWS Lambda functions using Python to automate and optimize critical production pipelines, effectively reducing costs and scalability within cloud operations. ",
      "Tested and containerized microservices with Docker, streamlining development workflows and enabling seamless employment to Kubernetes clusters. ",
      "Utilized AWS SAM for infrastructure-as-code deployments, speeding up the release cycle of serverless deployments.",
      "Migrated API Gateway CloudFormation templates to AWS CDK, improving maintainability and better integration with automated CI/CD pipelines.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Umee",
    icon: umee,
    iconBg: "#383E56",
    date: "Oct 2024 - Jan 2025",
    points: [

      "Developed in an agile start-up environment, implementing tools like AWS AppSync for GraphQL APIs with real-time DynamoDB processing",
      "Integrated AWS Cognito authentication system using Amplify CLI, ensuring scalable and secure user management.",
      "Hands-on experience with various AWS services including EC2 for computing resources and S3 buckets for object storage",
      "Developed server-side logic with NoSQL databases and automated pipelines to enhance a Flutter application's functionality",
    ],
  },
];

const projects = [
  {
    name: "Render Realm",
    description:
      "Web-based platform that renders 3D models and animations. \
      Incorporated features like OrbitControls for intuitive user navigation and interaction with 3D models.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
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
      Implemented a web-scraping program with Python to dynamically parse data from keyboard sites into structured JSON files.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
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
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "SpotifyAPI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
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
        name: "Python",
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
        name: "Godot",
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
  {
    name: "Acne Product Recommender",
    description:
      "Mobile application that detects types of acne on the user’s face and provides them \
      with skincare products aligning with their results. \
      Created an acne recognition model utilizing YOLO11 and NumPy to produce confidence intervals with an average 90% accuracy. \
      ",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "YOLO11",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: acne,
    source_code_link: "https://github.com/ToxicToxins/hackathon",
  },
  {
    name: "Book Cataloging Website",
    description:
      "Web application built with Django and PostgreSQL that allows users to catalog their books. \
      Built in a team-based environment within a university course. \
      Utilized Heroku for deployment and AWS S3 for file storage. \
      Tasked with the DevOps Engineering role, implementing CI/CD pipelines and managing the deployment process. \
      ",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Heroku",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "DevOps",
        color: "blue-text-gradient",
      },
      {
        name: "Agile",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/aaronmpark/Book-Cataloging",
  },
  {
    name: "Speech Sentiment Analysis",
    description:
      "Python application that analyzes the sentiment of speech using OpenAI's Whisper API. \
      Pre-trained BERT models, fine-tuned on the GoEmotions dataset. \
      Constructed as a final project for a Natural Language Processing course. \
      ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Pre-training",
        color: "blue-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "green-text-gradient",
      },
    ],
    image: whisper,
    source_code_link: "https://github.com/jeremyky/speech-sentiment-analysis",
  },
];

export { services, technologies, experiences, projects };