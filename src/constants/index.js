import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    inovam, 
    codifyz,
    hms,
    drpaint, 
    bubble,
    python,
    herm, 
    adventure,
    bazaar,
    deenvision,
    erbio,
    gmail,
    linkedin,
    fiverr,
    youtube,
    friendfusion,
    github,
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
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "Bubble.io Developer",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Database Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Bubble.io",
      icon: bubble,
    },
    {
      name: "Python",
      icon: python,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
  ];


   const socials = [
    {
      name: "Email",
      icon: gmail,
      link: "mailto:syedaayeshawajahat@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/syeda-ayesha-wajahat-6801392a5/",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/pro-grammer07",
    },
    {
      name: "Fiverr",
      icon: fiverr,
      link: "https://www.fiverr.com/pro_gramer07",
    },
    {
      name: "YouTube",
      icon: youtube,
      link: "https://www.youtube.com/@syeda.ayeshashah",
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Inovam Solutions",
      icon: inovam,
      iconBg: "#383E56",
      date: "Jul 2024 - Sep 2024",
      points: [
        "Setting up the backend of a website using node.js, express.js and MongoDB implementing CRM functionalities.",
        "Enhancing user experience by adding email functionality and linking the website to WhatsApp.",
        "Contributing to the frontend using React and Tailwind CSS.",
        "Creating and Testing APIs using ThunderClient and Postman", 
      ],
    },
    {
      title: "Bubble.io Developer",
      company_name: "Codifyz",
      icon: codifyz,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Aug 2022",
      points: [
        "Engineered comprehensive application workflows, admin, super admin, and user dashboards for the house rental agency (UP-Marwan), including seamless Stripe integration.",
        "Developed visually compelling landing pages, E-commerce Kit, and pixel-perfect UI designs with animations in Bubble.io, prioritizing an exceptional user experience and demonstrating expertise in UI/UX.",
        "Successfully integrated various APIs and plugins to enhance product functionality.",
        "Developed robust backend workflows, optimizing application performance and reliability.",
      ],
    }
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
      name: "Erbio",
      description:
        "Erbio is a simple solution for web accessibility, With Erbio you can easily create a legally secure will online and adapt it again and again.",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: erbio,
      source_code_link: "https://www.erbio.de/",
    },

        {
      name: "Bazaar Marketplace",
      description:
        "This app offers listing Ads for Cars, property, electrical appliances and general goods, connecting buyer and seller using in app chats and commenting on Ads.",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: bazaar,
      source_code_link: "https://www.bazarsyr.com/?screen=0",
    },
        {
      name: "FriendFusion",
      description:
        "Web-based platform that allows users to create profiles, upload posts, like and comment on posts, reply to comments, send and accept friend requests, get friend suggestions, keep track of profile views, light and dark mode.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },

      ],
      image: friendfusion,
      source_code_link: "https://github.com/laiqaali51214/FriendFusionComplete",
    },

    {
      name: "DrPaint",
      description:
        "DrPaint - Website for paint service that enables users to view the projects and services, book consultancy, contact. E-Mail functionality is also integrated. Admin can add, delete and edit projects and services.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: drpaint,
      source_code_link: "https://github.com/eemankhalid/DrPaintsite",
    },
    {
      name: "Adventure Tour Travels",
      description:
        "Adventure Tour Travels - A travel agency website that allows users to browse and book various travel packages. Whatsapp and E-Mail functionality is also integrated.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: adventure,
      source_code_link: "https://github.com/pro-gramer07",
    },
    {
      name: "Deen Vision",
      description:
        "Deen Vision - A web app that allow users to explore and buy Islamic jars.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: deenvision,
      source_code_link: "https://github.com/pro-gramer07",
    },

    {
      name: "Hospital System",
      description:
        "A hospital management system that has three user roles; patient, doctor and admin. Users can maintain profiles. Doctor can view patients information and prescribe medicines which patient can view. Admin can add, delete and edit other users.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "TKinter",
          color: "pink-text-gradient",
        },
      ],
      image: hms,
      source_code_link: "https://github.com/pro-gramer07/Hospital-Management-System",
    },
         { name: "Herm.io",
      description:
        "This web app has Dashboard, Login/Sign up, Repeating groups development with backend workflows to display data in Bubble frontend fetched form bubble database.",
      tags: [
        {
          name: "Bubble.io",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: herm,
      source_code_link: "https://github.com/pro-gramer07",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, socials };