/**
 * Portfolio Data Architecture
 * Primary Source of Truth for Oke Precious Abioye
 * All information is strictly verified from existing portfolio and resume data.
 */

export const personalInfo = {
  name: "Oke Precious Abioye",
  shortName: "Oke Precious",
  brandName: "Dev Precious",
  title: "Full-Stack Web Developer",
  roles: [
    "Full-Stack Web Developer",
    "MERN Stack Specialist",
    "Frontend Architect",
    "UI/UX Visual Engineer"
  ],
  bio: "Computer Science scholar and full-stack developer with hands-on expertise building scalable, responsive web applications in React, JavaScript, Node.js, and MongoDB. Combining a strong foundation in visual hierarchy and design with modern backend architecture to engineer fast, intuitive, and production-ready digital products.",
  extendedBio: "My journey began at the intersection of print, branding, and visual design, giving me a distinct intuition for typographic balance, layout rhythm, and user behavior. As a full-stack engineer, I architect every system with precision—from designing secure RESTful APIs with role-based access control to polishing 60fps micro-interactions on the client.",
  location: "Ogbomoso, Oyo State, Nigeria",
  timezone: "WAT (GMT+1)",
  status: "Available for new projects & engineering roles",
  email: "okeprecido@gmail.com",
  backupEmail: "okepreciousab@gmail.com",
  phone: "+2348101238416",
  whatsappUrl: "https://wa.me/+2348101238416",
  githubUrl: "https://github.com/Oke-Precious",
  githubUsername: "Oke-Precious",
  linkedinUrl: "https://www.linkedin.com/in/oke-precious-581ba5402/",
  twitterUrl: "https://x.com/specrpt",
  instagramUrl: "https://www.instagram.com/iam_spec1al",
  facebookUrl: "https://www.facebook.com/psspecial",
  cvPath: "/media/cv.pdf",
  profileImage: "/media/specialdev.png",
  avatarImage: "/media/mypic.png",
  education: {
    institution: "Ladoke Akintola University of Technology (LAUTECH)",
    degree: "B.Tech in Computer Science",
    status: "Undergraduate studies in progress",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Systems Analysis & Design",
      "Human-Computer Interaction"
    ]
  },
  stats: [
    { value: 10, suffix: "+", label: "Projects Completed" },
    { value: 8, suffix: "+", label: "Happy Clients" },
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Responsive Layouts" }
  ]
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and performant user interfaces with modern component architectures.",
    skills: [
      { name: "React", level: "Advanced", icon: "fab fa-react", color: "#61DAFB" },
      { name: "JavaScript ES6+", level: "Advanced", icon: "fab fa-js", color: "#F7DF1E" },
      { name: "HTML5", level: "Expert", icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS3 / Flexbox / Grid", level: "Expert", icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "Tailwind CSS", level: "Advanced", icon: "fas fa-wind", color: "#38BDF8" },
      { name: "Bootstrap 5", level: "Advanced", icon: "fab fa-bootstrap", color: "#7952B3" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Architecting RESTful endpoints, authentication workflows, and robust business logic.",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "fab fa-node-js", color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: "fas fa-server", color: "#68A063" },
      { name: "RESTful APIs", level: "Advanced", icon: "fas fa-network-wired", color: "#00F2FE" },
      { name: "JWT Auth & Sessions", level: "Proficient", icon: "fas fa-shield-alt", color: "#D63AFF" },
      { name: "Axios & Fetch", level: "Advanced", icon: "fas fa-exchange-alt", color: "#5A5D9D" }
    ]
  },
  {
    id: "database",
    title: "Databases & BaaS",
    description: "Schema design, data modeling, querying, and cloud-hosted data stores.",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "fas fa-database", color: "#47A248" },
      { name: "Mongoose ODM", level: "Advanced", icon: "fas fa-cubes", color: "#880000" },
      { name: "Firebase", level: "Proficient", icon: "fas fa-fire", color: "#FFCA28" },
      { name: "sql.js / SQLite", level: "Proficient", icon: "fas fa-table", color: "#003B57" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    description: "Modern developer workflow, version control, API testing, and continuous deployment.",
    skills: [
      { name: "Git", level: "Advanced", icon: "fab fa-git-alt", color: "#F05032" },
      { name: "GitHub", level: "Advanced", icon: "fab fa-github", color: "#FFFFFF" },
      { name: "Postman", level: "Proficient", icon: "fas fa-paper-plane", color: "#FF6C37" },
      { name: "VS Code", level: "Expert", icon: "fas fa-laptop-code", color: "#007ACC" },
      { name: "Netlify & Vercel", level: "Advanced", icon: "fas fa-cloud-upload-alt", color: "#00C7B7" }
    ]
  },
  {
    id: "design",
    title: "Design Mastery",
    description: "Translating brand identity into crisp visual interfaces with thoughtful hierarchy.",
    skills: [
      { name: "Figma", level: "Advanced", icon: "fab fa-figma", color: "#F24E1E" },
      { name: "Canva", level: "Expert", icon: "fas fa-palette", color: "#00C4CC" },
      { name: "Photoshop", level: "Proficient", icon: "fas fa-pen-nib", color: "#31A8FF" },
      { name: "CorelDRAW", level: "Advanced", icon: "fas fa-bezier-curve", color: "#74BF44" },
      { name: "UI/UX Prototyping", level: "Advanced", icon: "fas fa-layer-group", color: "#A855F7" }
    ]
  }
];

export const projects = [
  {
    id: "gavel-case-tracker",
    title: "Gavel Case Tracker",
    category: "Full Stack",
    featured: true,
    tagline: "Full-Stack Legal Case & Workflow Tracking System",
    description: "A comprehensive legal case management system engineered with React, Node.js, Express, and MongoDB. Features case-list interfaces with dynamic search, multi-condition filtering, pagination, and role-based permissions. Includes session restoration, token-refresh handling, CSV import, and CSV/PDF export endpoints.",
    image: "/media/preciousbank.png", // fallback or project representation
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Axios", "JWT Auth", "REST API"],
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Security", value: "JWT & RBAC" },
      { label: "Data Export", value: "CSV & PDF" }
    ],
    features: [
      "Built dynamic case-list views with real-time search, multi-field filtering, and pagination",
      "Engineered backend case CRUD endpoints, Mongoose schema models, and status-history audits",
      "Implemented role-based route permissions and secure authentication with JWT token refresh",
      "Added client-side session restoration plus backend CSV import and CSV/PDF report export"
    ],
    githubUrl: "https://github.com/Oke-Precious",
    liveUrl: null,
    isMajorFeatured: true
  },
  {
    id: "precious-bank",
    title: "Precious Bank Web App",
    category: "Frontend",
    featured: true,
    tagline: "Digital Banking & Transaction UI Experience",
    description: "A clean, modern fintech banking interface with interactive account dashboards, simulated fund transfers, transaction histories, and printable digital receipts. Retains demo data seamlessly with client-side localStorage and real-time input verification.",
    image: "/media/preciousbank.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "LocalStorage API"],
    metrics: [
      { label: "UI Type", value: "Fintech Demo" },
      { label: "Persistence", value: "LocalStorage" },
      { label: "Receipts", value: "Print Ready" }
    ],
    features: [
      "Intuitive account management dashboards with live balance calculation",
      "Simulated money transfers with recipient validation and confirmation modals",
      "Downloadable and printable transaction receipts for users",
      "Zero layout shift across mobile, tablet, and desktop viewports"
    ],
    githubUrl: "https://github.com/Oke-Precious/Special-Bank-Web-App",
    liveUrl: "https://specialbank.netlify.app/",
    isMajorFeatured: false
  },
  {
    id: "projexa",
    title: "Projexa Project Management Prototype",
    category: "Full Stack",
    featured: true,
    tagline: "Task Organization & Team Project Dashboard",
    description: "A full-featured project management platform featuring task-detail modals, editable task states, and project creation workflows. Built with a Node.js backend supporting user signup/login, password hashing, JWT token issuance, and relational project storage via sql.js.",
    image: "/media/specialhotel.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "JWT", "sql.js"],
    metrics: [
      { label: "Backend", value: "Node.js" },
      { label: "Auth", value: "Hashed JWT" },
      { label: "DB Engine", value: "sql.js" }
    ],
    features: [
      "Interactive project boards with real-time editable task fields and status flags",
      "Custom task-detail modal workflows for team assignment and milestones",
      "Node.js server with secure password hashing and authenticated sessions",
      "Relational in-browser SQLite backend integration via sql.js"
    ],
    githubUrl: "https://github.com/Oke-Precious/Projexa",
    liveUrl: null,
    isMajorFeatured: false
  },
  {
    id: "atmos-weather",
    title: "Atmos Weather App",
    category: "Frontend",
    featured: false,
    tagline: "Atmospheric Intelligence & Geolocation Forecast",
    description: "A sleek weather forecast application integrating real-time OpenWeather API endpoints. Features global city search, automatic browser geolocation, asynchronous data fetching, temperature unit conversion, and responsive Grid/Flexbox layouts with loading and error boundaries.",
    image: "/media/specialdev.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeather API", "Geolocation API"],
    metrics: [
      { label: "Data Source", value: "OpenWeather" },
      { label: "Location", value: "GPS & Search" },
      { label: "Units", value: "Metric / Imperial" }
    ],
    features: [
      "Live city weather search paired with automatic browser GPS detection",
      "Displays humidity, wind velocity, atmospheric pressure, and conditions",
      "Graceful asynchronous loading states and network error boundaries",
      "Fluid responsive UI adapted for handheld and widescreen devices"
    ],
    githubUrl: "https://github.com/Oke-Precious",
    liveUrl: "https://specialweather.netlify.app/",
    isMajorFeatured: false
  },
  {
    id: "special-bean-scene",
    title: "Special Bean Scene",
    category: "Frontend",
    featured: false,
    tagline: "Artisan Coffee Roastery & Café Experience",
    description: "An evocative, modern e-commerce landing experience for an artisan coffee roastery. Built with clean semantic markup, smooth section navigation, responsive menu grids, and an earthy, premium café aesthetic.",
    image: "/media/beanscene.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    metrics: [
      { label: "Design", value: "Bespoke Café" },
      { label: "Layout", value: "CSS Grid" },
      { label: "Speed", value: "Ultra Fast" }
    ],
    features: [
      "Product showcase with interactive pricing cards and flavor profiles",
      "Smooth section scrolling and fluid navigation transitions",
      "Mobile-optimized ordering preview and responsive hero atmosphere",
      "Polished visual brand identity with warm, engaging tones"
    ],
    githubUrl: "https://github.com/Oke-Precious/SPECIAL-BEAN-SCENE",
    liveUrl: "https://specialbeanscene.netlify.app/",
    isMajorFeatured: false
  },
  {
    id: "special-hotel",
    title: "Special Hotel Website",
    category: "Frontend",
    featured: false,
    tagline: "Luxury Hospitality & Room Reservation Interface",
    description: "A modern hotel and resort website UI delivering an elegant booking experience. Features multi-room gallery layouts, interactive amenity showcases, pricing tiers, and smooth responsive transitions for luxury travelers.",
    image: "/media/specialhotel.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox & Grid"],
    metrics: [
      { label: "Industry", value: "Hospitality" },
      { label: "Galleries", value: "Adaptive Grid" },
      { label: "Deploy", value: "Vercel" }
    ],
    features: [
      "Room presentation cards with amenity checklists and rate breakdowns",
      "Seamless booking inquiry modal and date-selection layout",
      "Elegant typography and contrast-balanced photography overlays",
      "Optimized assets ensuring instant initial load time on Vercel"
    ],
    githubUrl: "https://github.com/Oke-Precious/Special-Hotel",
    liveUrl: "https://specialhotel.vercel.app/",
    isMajorFeatured: false
  }
];

export const services = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    icon: "fas fa-terminal",
    accent: "from-cyan-500/20 to-blue-500/20",
    description: "Architecting end-to-end web applications with modern frontend frameworks and robust backend services. Focusing on clean modular architecture, security, and scalable infrastructure."
  },
  {
    id: "responsive-design",
    title: "Responsive Interface Engineering",
    icon: "fas fa-mobile-screen",
    accent: "from-teal-500/20 to-emerald-500/20",
    description: "Crafting fluid, pixel-accurate layouts that perform flawlessly across handheld smartphones, tablets, laptops, and ultra-wide desktop monitors without layout shift."
  },
  {
    id: "backend-apis",
    title: "Backend & RESTful API Architecture",
    icon: "fas fa-server",
    accent: "from-indigo-500/20 to-purple-500/20",
    description: "Designing fast, secure, and documented REST endpoints using Node.js and Express. Implementing JWT authentication, input sanitization, and structured error handling."
  },
  {
    id: "database-modeling",
    title: "Database Architecture & BaaS",
    icon: "fas fa-database",
    accent: "from-emerald-500/20 to-cyan-500/20",
    description: "Building scalable data schemas with MongoDB and Mongoose or relational databases, managing relationships, indexing, and integrating cloud backends like Firebase."
  },
  {
    id: "fintech-saas-ui",
    title: "Fintech & Dashboard UI Design",
    icon: "fas fa-building-columns",
    accent: "from-blue-500/20 to-cyan-500/20",
    description: "Engineering secure, intuitive banking and administrative dashboard interfaces with printable transaction receipts, real-time filters, and clean data visualizations."
  },
  {
    id: "modernization",
    title: "Website Redesign & Performance",
    icon: "fas fa-arrows-rotate",
    accent: "from-purple-500/20 to-pink-500/20",
    description: "Refactoring legacy, slow, or outdated web products into contemporary, high-converting digital experiences with futuristic glassmorphism and optimal Core Web Vitals."
  }
];

export const testimonials = [
  {
    quote: "Oke Precious delivered exceptional work on our e-commerce platform. The attention to detail, code structure, and aesthetic polish far exceeded our expectations. Highly recommended!",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Nigeria",
    avatar: "SJ"
  },
  {
    quote: "Working with Oke was a seamless experience. He understood our coffee brand's vision from day one and delivered a stunning, fast UI that our customers love.",
    author: "Michael Adebayo",
    role: "Founder",
    company: "Bean Scene Cafe",
    avatar: "MA"
  },
  {
    quote: "The banking app interface he designed is clean, intuitive, and secure. Our team and test users constantly compliment the user experience and clarity of the flows.",
    author: "Chioma Okonkwo",
    role: "Product Manager",
    company: "PreciousBank Demo",
    avatar: "CO"
  }
];

export const fallbackRepositories = [
  {
    id: 1,
    name: "Gavel-Case-Tracker",
    description: "Full-stack legal case tracking and management system with MERN stack, role-based access control, and report exports.",
    language: "JavaScript",
    stars: 3,
    forks: 1,
    url: "https://github.com/Oke-Precious",
    updatedAt: "Recent"
  },
  {
    id: 2,
    name: "Projexa",
    description: "Project management prototype dashboard with task-detail modals, Node.js backend, JWT authentication, and sql.js.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/Oke-Precious/Projexa",
    updatedAt: "Recent"
  },
  {
    id: 3,
    name: "Special-Bank-Web-App",
    description: "Modern banking web app UI with account balance simulation, transfers, transaction logs, and printable receipts.",
    language: "JavaScript",
    stars: 4,
    forks: 1,
    url: "https://github.com/Oke-Precious/Special-Bank-Web-App",
    updatedAt: "Recent"
  },
  {
    id: 4,
    name: "SPECIAL-BEAN-SCENE",
    description: "Artisan coffee café website with clean responsive navigation and interactive product displays.",
    language: "CSS",
    stars: 2,
    forks: 0,
    url: "https://github.com/Oke-Precious/SPECIAL-BEAN-SCENE",
    updatedAt: "Recent"
  },
  {
    id: 5,
    name: "Special-Hotel",
    description: "Luxury hotel and hospitality web interface with booking inquiries, room galleries, and amenities.",
    language: "HTML",
    stars: 3,
    forks: 0,
    url: "https://github.com/Oke-Precious/Special-Hotel",
    updatedAt: "Recent"
  },
  {
    id: 6,
    name: "Atmos-Weather-App",
    description: "Asynchronous weather application integrating OpenWeather API, browser geolocation, and responsive layout.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/Oke-Precious",
    updatedAt: "Recent"
  }
];
