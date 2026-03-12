// src/content/profile.js

export const projects = [
  {
    slug: "pet-shop-ecommerce",
    title: "Pet Shop E-commerce",
    summary: "A full-stack e-commerce web application for selling pets and accessories with a fully responsive and interactive UI.",
    tags: ["React", "Redux", "SASS/SCSS", "Spring Boot", "Ant Design", "Docker", "MySQL"], 
    coverImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    role: "Full-stack Developer (Personal Project)",
    timeline: "04/2025 - 06/2025",
    links: {
      demo: "https://pet-shop-xxhb.vercel.app/",
      github: "https://github.com/BVHC/PetShop-"
    },
    overview: "This project is a comprehensive e-commerce platform dedicated to pets and pet accessories. The goal was to build a seamless shopping experience from browsing to checkout, while maintaining a robust backend for product and user management.",
    challenge: [
      "Responsive UI: Ensuring cross-device compatibility for a complex shopping interface.",
      "State Management: Handling global states for shopping carts and user sessions securely.",
    ],
    solution: [
      "Redux Toolkit: Implemented efficient global state management for the cart.",
      "Ant Design & Tailwind: Combined utility-first CSS with robust UI components for the Admin Dashboard.",
      "Security: Integrated RESTful APIs via Axios for JWT and Google OAuth2 authentication."
    ],
    techStack: ["React 18", "Redux Toolkit", "Tailwind CSS", "Ant Design", "Java Spring Boot", "MySQL"]
  },
  {
    slug: "learning-materials-system",
    title: "Learning Materials System",
    summary: "A document distribution system supporting full-text search, personal libraries, and content extraction.",
    tags: ["React", "Redux", "Ant Design", "Docker", "MySQL"],
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
    role: "Front-End Developer (Team of 4)",
    timeline: "03/2025 - 05/2025",
    links: {
      demo: "", 
      github: "https://github.com/BVHC/LMS"
    },
    overview: "Working in a team of 4, we built an educational platform supporting document upload, personal libraries, and content extraction from PDF/DOCX files. My primary responsibility was architecting the frontend and ensuring smooth user interactions.",
    challenge: [
      "Complex Authentication: Designing an intuitive modal-based login/register flow.",
      "Backend Integration: Configuring Spring Security and integrating Change Password APIs.",
    ],
    solution: [
      "Redux State: Managed complex user profile states and authentication tokens using Redux.",
      "Component Architecture: Designed reusable layouts including Hero Section, Featured Documents, and Stats Counter.",
    ],
    techStack: ["React 18", "Redux Toolkit", "Tailwind CSS", "Axios", "Java Spring Boot"]
  },
  // {
  //   slug: "fintech-dashboard",
  //   title: "Fintech Dashboard UI",
  //   summary: "A modern analytics dashboard focusing on data visualization, charts, and complex state management.",
  //   tags: ["React", "Tailwind CSS", "Frontend"],
  //   coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  // },
  // {
  //   slug: "weather-app-pro",
  //   title: "Weather App Pro",
  //   summary: "Real-time weather application fetching data from external RESTful APIs with geolocation support.",
  //   tags: ["JavaScript", "Frontend", "API"],
  //   coverImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
  // },
  // {
  //   slug: "task-manager-clone",
  //   title: "Agile Task Manager",
  //   summary: "A Kanban-style task management tool with drag-and-drop features and local storage persistence.",
  //   tags: ["React", "Tailwind CSS"],
  //   coverImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
  // },
  {
    slug: "portfolio-template",
    title: "Premium Dev Portfolio",
    summary: "A minimalist, premium portfolio template built for developers to showcase their work effectively.",
    tags: ["React", "Tailwind CSS"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  }
];