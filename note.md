https://www.figma.com/design/ElJpis14TwYLnurDOpkRiQ/Untitled?node-id=0-1&p=f&t=BAnPcPZcgBA1Nb5k-0

portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── app/
    │   ├── App.jsx            # Cấu hình Router (5 routes)
    │   └── Layout.jsx         # Shell layout (Sidebar + Main Content)
    ├── pages/
    │   ├── Home.jsx           # Route: "/"
    │   ├── Projects.jsx       # Route: "/projects"
    │   ├── ProjectDetail.jsx  # Route: "/projects/:slug"
    │   ├── About.jsx          # Route: "/about"
    │   └── Contact.jsx        # Route: "/contact"
    ├── components/
    │   ├── Sidebar.jsx        # Desktop Navigation
    │   ├── MobileNav.jsx      # Mobile Drawer
    │   ├── ProjectCard.jsx    # Card hiển thị dự án
    │   ├── LoadingOverlay.jsx # Trải nghiệm loading các nguồn
    │   └── UI.jsx             # Nơi chứa Container, StatCard, TagPill, Button...
    ├── content/
    │   └── profile.js         # Mock data (projects, skills, experiences)
    ├── data/
    │   └── dataProvider.js    # Provider mô phỏng fetch data + delay
    ├── styles/
    │   └── globals.css        # Import Tailwind + Custom 
    utilities