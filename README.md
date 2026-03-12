# 🌐 Bui Van Hien — Portfolio

A minimalist, premium personal portfolio website built with **React 19** and **Tailwind CSS** to showcase projects, skills, and professional background.

![React](https://img.shields.io/badge/React-19.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)

## 🔧 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19 |
| **Bundler** | Vite 7 (SWC plugin) |
| **Styling** | Tailwind CSS 3.4, PostCSS, Autoprefixer |
| **Routing** | React Router v7 |
| **Icons** | React Icons (Feather Icons) |
| **Email** | EmailJS |
| **Linting** | ESLint |

---

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── App.jsx          # Router configuration
│   │   └── Layout.jsx       # Sidebar + Header + Outlet layout
│   ├── assets/
│   │   └── styles/
│   │       └── globals.css   # Tailwind directives & custom styles
│   ├── components/
│   │   ├── Header.jsx        # Top bar with clock, search, icons
│   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   └── Footer.jsx
│   ├── content/
│   │   └── profile.js        # Projects data (case studies)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx      # Filterable project gallery
│   │   ├── ProjectDetail.jsx # Dynamic case study page
│   │   ├── Skills.jsx
│   │   └── Contact.jsx       # EmailJS contact form
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/BVHC/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by **Bui Van Hien** — PTIT Student | Aspiring Frontend Developer
