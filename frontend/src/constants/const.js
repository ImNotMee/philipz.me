// About Me Consts
export const workExperiences = [
    { title: "Full Stack Engineer", company: "Paymentus", duration: "Oct 2024 - Present" },
    { title: "Consultant, Application Development", company: "CIBC Capital Markets", duration: "Mar - Sept 2024" },
    { title: "Software Engineer II", company: "UKG", duration: "Jan - Aug 2023" },
    { title: "Software Engineer", company: "UKG", duration: "Aug 2021 - Dec 2022" },
    { title: "Software Developer Intern", company: "UKG", duration: "May 2021 - Aug 2021" },
    { title: "DevOps Engineer Intern", company: "Oracle", duration: "May 2019 - May 2020" },
    { title: "Technical Analyst Intern", company: "Toyota Canada Inc", duration: "Jan 2018 - Apr 2018" },
  ];

export const programmingLanguages = [
    "Java", "Python", "HTML & CSS", "JavaScript", "SQL", "TypeScript", "C", "Bash",
  ];

export const frameworksLibraries = [
    "Spring Boot", "Node.js", "React.js", "AngularJS", "Pandas",
  ];

export const toolsTechnologies = [
    "Git", "MySQL & SQLite", "REST API", "TeamCity", "Bitbucket",
    "Chef", "Sensu", "Docker", "Kubernetes", "Kafka", "RabbitMQ", "MongoDB",
  ];

  export const aboutMeText = `
  University of Toronto Computer Science Alumni with 2.5 years of professional backend-focused 
  experience in Java Spring Boot and 1.5 years of DevOps experience. Also experienced in Python 
  and JavaScript with various libraries and frameworks.
`;

export const sectionHeaders = {
  aboutMe: "About Me:",
  workExperiences: "Work Experiences:",
  programmingLanguages: "Programming Languages:",
  frameworksLibraries: "Frameworks & Libraries:",
  toolsTechnologies: "Tools & Other Technologies:",
};

// Project Consts
export const personalProjects = [
    {
      title: "Angleo",
      pic: "icons/javascript.png",
      text: "A mobile application built using React Native to bridge the cultural divide between English and French-speaking communities in Quebec. (Built during ConUHacks IV)",
      url: "https://github.com/alvintangz/angleo",
      link: "",
    },
    {
      title: "SenpaiBot (Discord Server Bot)",
      pic: "icons/python.png",
      text: "A Python-based bot using Discord API, designed for our team’s Discord server with gaming-friendly features.",
      url: "https://github.com/SnoopySnipe/SenpaiBot",
      link: "",
    },
    {
      title: "Rhythm Rivals",
      pic: "icons/java.png",
      text: "A music rhythm game using GreenFoot UI and Java. Players press keys as colored circles drop, acting as beats. (Built during Hack The Valley I at UTSC)",
      url: "https://github.com/AdityaMatam/RhythmRivals",
      link: "",
    },
    {
      title: "Old Personal Website",
      pic: "icons/html.png",
      text: "A project built using vanilla JS, HTML, and CSS to familiarize myself with these technologies.",
      url: "https://github.com/ImNotMee/ImNotMee.github.io",
      link: "http://ImNotMee.github.io",
    },
  ];
  
  export const academicProjects = [
    {
      title: "ChronoJS",
      pic: "icons/javascript.png",
      text: "A customizable calendar front-end library built using vanilla JavaScript.",
      url: "https://github.com/ImNotMee/ChronoJS",
      link: "https://chronojs.herokuapp.com/index.html",
    },
    {
      title: "Health Tracker",
      pic: "icons/javascript.png",
      text: "An app for tracking physical, medical, and mental health data, with a COVID tracker for nearby locations. Built using React.js and Node.js.",
      url: "https://github.com/ImNotMee/HealthTracker",
      link: "https://csc309-2020-team27.herokuapp.com/",
    },
    {
      title: "TEQ Reporting App",
      pic: "icons/python.png",
      text: "A Python app for TEQ to centralize data from agencies and generate reports and summaries.",
      url: "https://github.com/ImNotMee/TEQ-App",
      link: "",
    },
    {
      title: "BigBoiBank$",
      pic: "icons/java.png",
      text: "A Java-based Android app simulating a real bank, designed using OOP principles.",
      url: "https://github.com/ImNotMee/BigBoiBank",
      link: "",
    },
    {
      title: "A Simple Search Engine",
      pic: "icons/c.png",
      text: "A C program to search .txt files for a keyword and output the number of occurrences in each file using forking and piping.",
      url: "",
      link: "",
    },
  ];
  
  // Consts
  export const profileInfo = {
    name: "Philip",
    alumniTag: "An UofT Alumni",
    copyrightYear: "2024",
  };
  
  export const NAV_BUTTONS = [
    {
      label: "About Me",
      value: "me",
      onClick: () => console.log('Navigate to About Me'),
    },
    {
      label: "Projects",
      value: "projects",
      onClick: () => console.log('Navigate to Projects'),
    },
    {
      label: "Contact me",
      value: "contact",
      onClick: () => window.location = 'mailto:philip.zhang@mail.utoronto.ca',
    },
  ];
  
  export const SOCIAL_LINKS = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_philzpng_/',
      icon: 'icons/instagram.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/philip-z/',
      icon: 'icons/linkedin.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ImNotMee',
      icon: 'icons/GitHub.png',
    },
  ];
  