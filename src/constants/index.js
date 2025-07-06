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
    meta,
    carrent,
    Social, 
    jobit,
    tripguide,
    threejs,
    inovam, 
    codifyz,
    FriendFusion,
    hms,
    drpaint, 
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
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
      title: "Full Stack Developer",
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
    },
    {
      title: "Backend Engineer",
      company_name: "FriendFusion",
      icon: FriendFusion,
      iconBg: "#383E56",
      date: "Mar 2024 - May 2024",
      points: [
        "Developing and maintaining backend of FriendFusion using node.js, express.js and MongoDB and other related technologies.",
        "User authentication authorization and verification using JWT and nodemailer ",
        "Creating and Testing APIs using ThunderClient and Postman",
        "Developing CRM (Controllers, Routes, Models) functionalities for the website.",
      ],
    },
    {
      title: "Database Engineer",
      company_name: "HMS",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Social Media App",
      description:
        "FriendFusion - Web-based platform that allows users to create profiles, upload posts, like posts, comment on posts, reply to comments, send and accept friend requests, get friend suggestions, keep track of profile views, light and dark mode.",
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
      image: Social,
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };