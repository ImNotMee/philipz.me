// About Me Consts
export const workExperiences = [
    {
        company: "Paymentus",
        title: "Full Stack Engineer",
        duration: "Oct 2024 - Present",
        description: "ngineered custom solutions on a large-scale payment platform, contributing to new feature development and system improvements across multiple projects.",
        technologies: ["Java", "JavaScript", "Node.js", "ReactJS", "Apache FreeMarker", "HTML & CSS", "Kubernetes", "Tomcat"]
    },
    {
        company: "CIBC Capital Markets",
        title: "Consultant, Application Development",
        duration: "Mar - Sept 2024",
        description: "Supported and maintained infrastructure, delivering reliable messaging platforms for multiple projects within the Capital Markets Engineering.",
        technologies: ["Java", "Openshift", "Helm Charts", "Kubernetes", "Microsoft Azure", "Git", "Solace"]
    },
    {
        company: "UKG",
        title: "Software Engineer II",
        duration: "Jan - Aug 2023",
        description: "Improved scalability and reliability of microservices architecture to support high-throughput message delivery across multiple notification channels.",
        technologies: ["Java", "Spring Boot", "Kafka", "RabbitMQ", "Docker", "Git", "AWS SES,SQS & SNS", "OAuth", "REST API", "AWS S3"]
    },
    {
        company: "UKG",
        title: "Software Engineer I",
        duration: "May 2021 - Dec 2022",  
        description: "Developed and maintained backend systems, driving enhancements and ensuring stability for enterprise-scale notification services.",
        technologies: ["Java", "Spring Boot", "Kafka", "RabbitMQ", "Docker", "Git", "AWS SES,SQS & SNS", "OAuth", "REST API", "AWS S3", "OpenAPI"]
    },
    {
        company: "Oracle",
        title: "DevOps Engineer Intern",
        duration: "May 2019 - May 2020",
        description: "Managed and optimized CI/CD pipelines for Oracle Eloqua, enabling seamless and consistent deployment processes.",
        technologies: ["Python", "TypeScript", "Ruby","Docker", "Kubernetes", "Oracle Cloud", "Jenkins", "Teamcity", "Sensu", "Linux", "Windows Hyper-V", "Terraform"]
    },
    {
        company: "Toyota Canada Inc",
        title: "Technical Analyst Intern",
        duration: "Jan 2018 - Apr 2018",
        description: "Provided advanced IT support, managing device setup, hardware and asset tracking, and troubleshooting technical issues for internal users.",
        technologies: ["SQL", "Cisco VoIP", "Imaging", "Excel","Active Directory"]
    }
];

export const companiesUrl = {
    "Paymentus": "https://www.paymentus.com/",
    "CIBC Capital Markets": "https://cibccm.com/en/",
    "UKG": "https://www.ukg.com/",
    "Oracle": "https://www.oracle.com/ca-en/",
    "Toyota Canada Inc": "https://www.toyota.ca/toyota/en/"
};

export const programmingLanguages = [
    { name: "Java", proficiency: 80 },
    { name: "Python", proficiency: 75 },
    { name: "TypeScript", proficiency: 20 },
    { name: "HTML & CSS", proficiency: 75 },
    { name: "JavaScript", proficiency: 50 },
    { name: "SQL", proficiency: 70 },
    { name: ".Net", proficiency: 20 }
];

export const frameworksLibraries = [
    { name: "React", proficiency: 50 },
    { name: "Node.js", proficiency: 60 },
    { name: "Express", proficiency: 40 },
    { name: "Spring Boot", proficiency: 80 },
    { name: "AngularJS", proficiency: 10 }
];

export const toolsTechnologies = [
    { name: "Git", proficiency: 90 },
    { name: "Docker", proficiency: 70 },
    { name: "AWS", proficiency: 65 },
    { name: "MongoDB", proficiency:60 },
    { name: "REST API", proficiency: 70 },
    { name: "Kafka", proficiency: 60 },
    { name: "RabbitMQ", proficiency: 50 },
    { name: "MySQL", proficiency: 60 },
    { name: "OracleDB", proficiency: 40 },
    { name: "Kubernetes", proficiency: 50 },
    { name: "AWS SES, SQS, SNS", proficiency: 50 },
    { name: "AWS S3", proficiency: 60 }
];

export const aboutMeText = "Hey, I’m a University of Toronto Computer Science grad with a passion for backend development and DevOps. Over the past few years, I’ve enjoyed working on systems that are fast, reliable, and easy to scale — and I’m always exploring new technologies to bring into my work.";

export const sectionHeaders = {
    aboutMe: "About Me",
    workExperiences: "Work Experience",
    programmingLanguages: "Programming Languages",
    frameworksLibraries: "Frameworks & Libraries",
    toolsTechnologies: "Tools & Technologies"
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
      text: "A Python-based bot using Discord API, designed for our team's Discord server with gaming-friendly features.",
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
    copyrightYear: "2025",
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