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
    carrent,
    jobit,
    tripguide,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Andriod Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
 
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "SnapKart",
      company_name: "",
      // icon: shopify,  // Use an appropriate icon for SnapKart
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Developed SnapKart, an e-commerce app with an intuitive UI/UX, increasing user engagement.",
        "Built an admin panel to manage products, users, and orders, streamlining the company's operations.",
        "Integrated Stripe for secure payment handling, and implemented authentication and authorization for better security.",
      ],
    },
    {
      title: "BlogMaster",
      company_name: "",
      // icon: meta,  // Use an appropriate icon for BlogMaster
      iconBg: "#E6DEDD",
      date: "May 2024 - June 2024",
      points: [
        "Designed and developed BlogMaster, a dynamic blog application with enhanced user interaction.",
        "Implemented full CRUD functionality and optimized backend performance using efficient API design.",
        "Integrated real-time updates to provide a seamless and interactive user experience.",
      ],
    },
    {
      title: "BeatBox",
      company_name: "",
      // icon: music,  // Use an appropriate icon for BeatBox
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Created BeatBox, a music player app offering seamless audio playback and playlist management.",
        "Utilized TypeScript to ensure error-free development and cross-platform compatibility across Android and iOS.",
        "Designed a visually appealing UI with React Native components, enhancing the overall user experience.",
      ],
    },
  ];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SnapKart",
      description:
        "Engineered an e-commerce app with an intuitive UI/UX, boosting user engagement and satisfaction. Developed an admin panel for managing products, users, and orders, reducing operational overhead and streamlining processes. Implemented Stripe for secure transactions and integrated robust authentication and authorization.",
      url: "https://github.com/varshneyansh1/ReactNative_SnapKart-Ecommerce_App",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/snapkart-screenshot.png",  // Replace with actual image
      source_code_link: "https://github.com/varshneyansh1/ReactNative_SnapKart-Ecommerce_App",
    },
    {
      name: "BlogMaster",
      description:
        "Designed BlogMaster, a dynamic blog app with an engaging interface that elevates user interaction and content management. Executed full CRUD operations, enhanced backend performance with efficient API design, and strengthened security through robust authentication and data validation protocols.",
      url: "https://github.com/varshneyansh1/BlogMaster",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/blogmaster-screenshot.png",  // Replace with actual image
      source_code_link: "https://github.com/varshneyansh1/BlogMaster",
    },
    {
      name: "BeatBox",
      description:
        "Created BeatBox, a feature-rich music player app offering seamless audio playback, smooth playback controls, and playlist management. Refined performance with TypeScript for robust, error-free development, ensuring cross-platform compatibility across Android and iOS.",
      url: "https://github.com/varshneyansh1/BeatBox",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/beatbox-screenshot.png",  // Replace with actual image
      source_code_link: "https://github.com/varshneyansh1/BeatBox",
    },
    {
      name: "CareerLink",
      description:
        "Developed CareerLink, a job application platform with advanced job matching and an intuitive UI/UX design for a seamless user experience. Introduced real-time chat using Socket.io to enhance communication between employers and job seekers.",
      url: "https://github.com/varshneyansh1/CareerLink",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/careerlink-screenshot.png",  // Replace with actual image
      source_code_link: "https://github.com/varshneyansh1/CareerLink",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };