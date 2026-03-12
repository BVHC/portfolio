// src/content/profile.js

export const projects = [
  {
    slug: "pet-shop-ecommerce",
    title: "Pet Shop E-commerce",
    summary: "A full-stack e-commerce web application for selling pets and accessories with a fully responsive and interactive UI.",
    tags: ["React", "Redux", "SASS/SCSS", "Ant Design", "Spring Boot", "Docker", "MySQL", "Elasticsearch"],
    coverImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    role: "Full-stack Developer (Personal Project)",
    timeline: "04/2025 - 06/2025",
    links: {
      demo: "https://pet-shop-xxhb.vercel.app/",
      github: "https://github.com/BVHC/PetShop-"
    },
    overview: "A comprehensive e-commerce platform for pets and accessories featuring product browsing with Elasticsearch-powered search, shopping cart, JWT + Google OAuth2 authentication, order management, and a full admin dashboard with revenue analytics. Deployed with Docker Compose orchestrating MySQL, Redis, Kafka, and Elasticsearch.",
    challenge: [
      "Full-text Search: Implementing fast product search across thousands of items with Elasticsearch.",
      "State Management: Handling complex global states for shopping cart, user sessions, and admin dashboard.",
      "Authentication: Building secure login with both JWT tokens and Google OAuth2 integration.",
    ],
    solution: [
      "Redux: Centralized state management for cart, authentication, and admin operations.",
      "Ant Design + SASS: Combined Ant Design components for the admin dashboard with custom SCSS modules for the client-facing UI.",
      "MirageJS Mock: Created a complete mock API layer enabling Vercel deployment without backend.",
      "Docker Compose: Orchestrated 5 services (MySQL, Redis, Kafka, Elasticsearch, Spring Boot) for seamless development."
    ],
    techStack: ["React 18", "Redux", "SASS/SCSS", "Ant Design", "Axios", "Java Spring Boot 3.2", "MySQL 8.0", "Redis", "Kafka", "Elasticsearch", "Docker"]
  },
  {
    slug: "learning-materials-system",
    title: "Learning Materials System",
    summary: "A document distribution system supporting full-text search, personal libraries, and content extraction.",
    tags: ["React", "Redux", "SASS/SCSS", "Ant Design", "Spring Boot", "Docker", "MySQL", "Elasticsearch"],
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
    role: "Front-End Developer (Team of 4)",
    timeline: "03/2025 - 05/2025",
    links: {
      demo: "", 
      github: "https://github.com/BVHC/LMS"
    },
    overview: "An educational platform built in a team of 4, supporting document upload/download, personal libraries, full-text search via Elasticsearch, and content extraction from PDF/DOCX files. I architected the entire frontend, built the authentication system, profile management, home page, and handled all API integrations.",
    challenge: [
      "Authentication Flow: Designing an intuitive modal-based login/register/email-confirmation flow with JWT token management.",
      "Backend Contribution: Configuring Spring Security endpoints and building the Change Password API on the backend.",
      "Component Architecture: Creating a reusable, maintainable component structure for a multi-page educational platform.",
    ],
    solution: [
      "Redux State: Centralized authentication state, user profiles, and document data using Redux actions/reducers.",
      "Reusable Components: Built modular layouts — Hero Section, Featured Documents carousel, Stats Counter, Document Cards.",
      "Axios Interceptors: Configured centralized API instance with JWT token injection and error handling.",
      "Protected Routes: Implemented PrivateRoutesClient to guard authenticated pages with automatic redirect."
    ],
    techStack: ["React 18", "Redux", "SASS/SCSS", "Ant Design", "Axios", "React Router 7", "Java Spring Boot", "Spring Security", "MySQL 8.0", "Elasticsearch", "Docker"]
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
    slug: "portfolio",
    title: "My Portfolio",
    summary: "A minimalist, premium portfolio website built with React and Tailwind CSS to showcase projects, skills, and professional background.",
    tags: ["React", "Tailwind CSS", "React Router", "Vite"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    role: "Full-stack Developer (Personal Project)",
    timeline: "02/2026 - Present",
    links: {
      demo: "",
      github: "https://github.com/BVHC/portfolio"
    },
    overview: "A personal portfolio website designed with a clean, modern aesthetic. Features include project showcases with detailed case studies, a skills section, real-time clock, responsive sidebar navigation, and smooth page transitions.",
    challenge: [
      "Design System: Creating a cohesive, premium look without relying on UI libraries.",
      "Routing & Layout: Building a multi-page SPA with nested layouts and dynamic project detail pages.",
    ],
    solution: [
      "Tailwind CSS: Crafted a custom design system with consistent spacing, typography, and color tokens.",
      "React Router: Implemented nested routing with a persistent sidebar layout and dynamic slug-based project pages.",
    ],
    techStack: ["React 18", "Tailwind CSS", "React Router v6", "Vite", "React Icons"]
  }
];