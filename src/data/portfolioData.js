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
    "Frontend Specialist",
    "Figma-to-Code Specialist"
  ],
  bio: "Computer Science scholar and full-stack developer with hands-on expertise building scalable, responsive web applications in React, JavaScript, Node.js, and MongoDB. Specializing in translating Figma and UI/UX designer specifications into clean, production-ready code with robust REST APIs and database architectures.",
  extendedBio: "As a Computer Science student at LAUTECH and a dedicated full-stack software engineer, I focus on building reliable backend architectures and translating Figma designs and UI/UX wireframes into responsive, production-ready web interfaces. While I do not design UI/UX from scratch, I work seamlessly with designers—implementing their exact design systems with high fidelity, clean React components, secure RESTful APIs, and optimized databases.",
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
  cvGoogleDocsUrl: "https://docs.google.com/document/d/1N8M7FYW6SRuLUIko54GP6XQCL00b4c9a4JAcDbY_QcI/edit?usp=drivesdk",
  cvDownloadUrl: "https://docs.google.com/document/d/1N8M7FYW6SRuLUIko54GP6XQCL00b4c9a4JAcDbY_QcI/export?format=pdf",
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
    { value: 8, suffix: "+", label: "Projects Built" },
    { value: 100, suffix: "%", label: "Design-to-Code" },
    { value: 2, suffix: "+", label: "Years Coding" },
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
    title: "Design Implementation & Visual Assets",
    description: "Translating provided Figma files, designer wireframes, and brand assets into production code.",
    skills: [
      { name: "Figma to Code", level: "Advanced", icon: "fab fa-figma", color: "#F24E1E" },
      { name: "UI Implementation", level: "Advanced", icon: "fas fa-layer-group", color: "#A855F7" },
      { name: "Canva", level: "Expert", icon: "fas fa-palette", color: "#00C4CC" },
      { name: "Photoshop", level: "Proficient", icon: "fas fa-pen-nib", color: "#31A8FF" },
      { name: "CorelDRAW", level: "Advanced", icon: "fas fa-bezier-curve", color: "#74BF44" }
    ]
  }
];

export const projects = [
  {
    id: "gavel-case-tracker",
    title: "Gavel Case Tracker",
    category: "Full Stack",
    featured: true,
    status: "Completed",
    lastUpdated: "Recently",
    tagline: "Full-Stack Legal Case & Workflow Tracking System",
    description: "A comprehensive legal case management system engineered with React, Node.js, Express, and MongoDB. Features case-list interfaces with dynamic search, multi-condition filtering, pagination, and role-based permissions. Includes session restoration, token-refresh handling, CSV import, and CSV/PDF export endpoints.",
    image: "/media/preciousbank.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Axios", "JWT Auth", "REST API"],
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Security", value: "JWT & RBAC" },
      { label: "Data Export", value: "CSV & PDF" },
      { label: "Role", value: "Full-Stack Dev" }
    ],
    features: [
      "Built dynamic case-list views with real-time search, multi-field filtering, and pagination",
      "Engineered backend case CRUD endpoints, Mongoose schema models, and status-history audits",
      "Implemented role-based route permissions and secure authentication with JWT token refresh",
      "Added client-side session restoration plus backend CSV import and CSV/PDF report export"
    ],
    problem: "Legal practices and administrative staff struggle with unorganized case dossiers, fragmented status updates, and lack of verifiable audit trails for case milestones.",
    solution: "Architected a unified MERN stack application with role-based access control (RBAC), structured MongoDB schemas, real-time case filtering, and automatic CSV/PDF document generation for audits.",
    myRole: "Full-Stack Developer (Engineered React frontend, Express REST APIs, Mongoose data models, and JWT authentication flow)",
    architecture: "React SPA (Client) → Axios HTTP / Interceptors → Node.js & Express REST API → MongoDB / Mongoose ODM → Document Generator (CSV/PDF)",
    architectureLayers: [
      {
        layer: "Frontend Client",
        tech: "React 18 & Axios",
        details: "Component-driven SPA with state-driven search, multi-tag filters, pagination, and Axios interceptors for automated JWT refresh.",
        icon: "fab fa-react"
      },
      {
        layer: "API Gateway & Security",
        tech: "Express Middleware & JWT",
        details: "Bearer token verification, role-based authorization (admin, paralegal, viewer), request sanitization, and CORS headers.",
        icon: "fas fa-shield-halved"
      },
      {
        layer: "Backend Controllers",
        tech: "Node.js & Express Router",
        details: "RESTful CRUD handlers for cases, status progression, audit logs, and asynchronous CSV streaming.",
        icon: "fab fa-node-js"
      },
      {
        layer: "Persistence Layer",
        tech: "MongoDB & Mongoose ODM",
        details: "Indexed collections for fast search queries, schema validation, relationship referencing, and automatic timestamps.",
        icon: "fas fa-database"
      },
      {
        layer: "Export & Reporting",
        tech: "PDFKit & Fast-CSV",
        details: "Server-side document compilation for printable case summaries and structured CSV database exports.",
        icon: "fas fa-file-export"
      }
    ],
    technicalDecisions: [
      {
        title: "Dual Token Authentication with Silent Refresh",
        description: "Separated short-lived access tokens from securely stored refresh tokens to minimize attack surface while maintaining uninterrupted lawyer sessions."
      },
      {
        title: "Compound Indexing on Case Number & Status",
        description: "Indexed high-frequency query fields in MongoDB to ensure sub-10ms filter responses even as case record volumes scale."
      },
      {
        title: "Stream-Based CSV Export",
        description: "Employed Node.js transform streams rather than loading full case histories into memory, preventing Node process memory spikes during large reporting exports."
      }
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
    status: "Production",
    lastUpdated: "Recently",
    tagline: "Digital Banking & Transaction UI Experience",
    description: "A clean, modern fintech banking interface with interactive account dashboards, simulated fund transfers, transaction histories, and printable digital receipts. Retains demo data seamlessly with client-side localStorage and real-time input verification.",
    image: "/media/preciousbank.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "LocalStorage API"],
    metrics: [
      { label: "UI Type", value: "Fintech Demo" },
      { label: "Persistence", value: "LocalStorage" },
      { label: "Receipts", value: "Print Ready" },
      { label: "Speed", value: "100/100" }
    ],
    features: [
      "Intuitive account management dashboards with live balance calculation",
      "Simulated money transfers with recipient validation and confirmation modals",
      "Downloadable and printable transaction receipts for users",
      "Zero layout shift across mobile, tablet, and desktop viewports"
    ],
    problem: "Novice users require a low-friction, realistic sandbox to test banking workflows and transaction dynamics without real financial risk.",
    solution: "Designed and built an interactive web banking simulation with immediate visual balance feedback, stateful transaction logs, and printable transaction receipts.",
    myRole: "Frontend Developer (Engineered UI logic, balance state calculations, receipt formatting, and mobile responsiveness)",
    architecture: "Modern Browser UI → DOM Event Listeners → State Computation Engine → LocalStorage Persistence Engine → Print Layout Renderer",
    architectureLayers: [
      {
        layer: "UI Interface",
        tech: "HTML5 & Bootstrap 5",
        details: "Clean financial dashboard cards, quick-action transfer panels, transaction tables, and confirmation modals.",
        icon: "fas fa-desktop"
      },
      {
        layer: "Transaction Engine",
        tech: "JavaScript ES6+",
        details: "Validates transfer funds, checks current balance limits, formats ISO currency, and calculates ledger totals.",
        icon: "fas fa-calculator"
      },
      {
        layer: "Persistence Store",
        tech: "Browser LocalStorage API",
        details: "Serializes user profile balances, recent transfer history, and mock recipient contacts across page refreshes.",
        icon: "fas fa-hard-drive"
      },
      {
        layer: "Receipt Generator",
        tech: "CSS Media Print & DOM",
        details: "Generates formatted paper/PDF transaction vouchers with timestamped reference numbers.",
        icon: "fas fa-receipt"
      }
    ],
    technicalDecisions: [
      {
        title: "Atomic State Updates in LocalStorage",
        description: "Structured transaction ledger entries as immutable JSON records with incremental sequence IDs to prevent balance desync."
      },
      {
        title: "Print-Optimized Media Queries",
        description: "Crafted clean print stylesheets hiding UI sidebars and navbars, formatting only the official receipt voucher."
      }
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
    status: "Prototype",
    lastUpdated: "Recently",
    tagline: "Task Organization & Team Project Dashboard",
    description: "A full-featured project management platform featuring task-detail modals, editable task states, and project creation workflows. Built with a Node.js backend supporting user signup/login, password hashing, JWT token issuance, and relational project storage via sql.js.",
    image: "/media/specialhotel.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "JWT", "sql.js"],
    metrics: [
      { label: "Backend", value: "Node.js" },
      { label: "Auth", value: "Hashed JWT" },
      { label: "DB Engine", value: "sql.js" },
      { label: "Type", value: "Prototype" }
    ],
    features: [
      "Interactive project boards with real-time editable task fields and status flags",
      "Custom task-detail modal workflows for team assignment and milestones",
      "Node.js server with secure password hashing and authenticated sessions",
      "Relational in-browser SQLite backend integration via sql.js"
    ],
    problem: "Lightweight project teams often need an agile, friction-free way to organize tasks and track status changes without heavy enterprise overhead.",
    solution: "Engineered an in-browser relational task management dashboard powered by sql.js and authenticated Node.js services.",
    myRole: "Full-Stack Developer (Implemented task board UI, database schema, and Node.js session routes)",
    architecture: "Web Frontend → Asynchronous Fetch API → Node.js Auth Server → sql.js Relational Database Engine",
    architectureLayers: [
      {
        layer: "Interactive Board",
        tech: "HTML5 & CSS3 Flexbox",
        details: "Task cards with priority chips, assignee tags, and status transition controls.",
        icon: "fas fa-list-check"
      },
      {
        layer: "Authentication Server",
        tech: "Node.js & bcrypt",
        details: "Password hashing, JWT signature generation, and route protection middleware.",
        icon: "fas fa-lock"
      },
      {
        layer: "Relational Storage",
        tech: "sql.js (WebAssembly SQLite)",
        details: "Relational schema linking projects, tasks, and users via foreign key relations.",
        icon: "fas fa-database"
      }
    ],
    technicalDecisions: [
      {
        title: "WebAssembly SQLite Engine",
        description: "Utilized sql.js to execute pure SQL queries and maintain relational integrity without requiring an external hosted database instance for local development."
      }
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
    status: "Production",
    lastUpdated: "Recently",
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
    problem: "Users need real-time, hyperlocal meteorological data with zero configuration or complex account requirements.",
    solution: "Integrated the browser Geolocation API and OpenWeather REST endpoints into a responsive weather card interface with instantaneous metric/imperial toggling.",
    myRole: "Frontend Developer",
    architecture: "Browser Geolocation API → OpenWeather REST API → JavaScript Async/Await Fetch Engine → Dynamic DOM Weather Cards",
    architectureLayers: [
      {
        layer: "Client UI",
        tech: "CSS3 Grid & Dynamic Iconography",
        details: "Theme adapts based on day/night weather conditions with weather iconography.",
        icon: "fas fa-cloud-sun"
      },
      {
        layer: "Geolocation Layer",
        tech: "Navigator Geolocation API",
        details: "Detects current latitude and longitude coordinates with fallback to manual city search.",
        icon: "fas fa-location-crosshairs"
      },
      {
        layer: "External API Integration",
        tech: "OpenWeather REST API",
        details: "Async HTTP queries for temperature, humidity, wind velocity, and forecasts.",
        icon: "fas fa-network-wired"
      }
    ],
    technicalDecisions: [
      {
        title: "Defensive API Error Boundaries",
        description: "Implemented custom UI error banners for invalid city queries, network timeouts, and geolocation denial."
      }
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
    status: "Production",
    lastUpdated: "Recently",
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
    problem: "Artisan coffee roasteries require a distinct, inviting digital storefront that conveys sensory appeal, roast varieties, and seamless menu exploration.",
    solution: "Crafted a responsive landing UI with balanced typographic rhythm, structured product showcases, and interactive flavor profiles.",
    myRole: "Frontend Developer (UI implementation & responsive layout)",
    architecture: "Semantic HTML5 Markup → CSS Custom Properties (Theme) → JavaScript Navigation & Micro-Interactions",
    architectureLayers: [
      {
        layer: "Semantic Presentation",
        tech: "HTML5 & CSS Grid",
        details: "Fluid product grids showcasing roast origins, tasting notes, and order calls-to-action.",
        icon: "fas fa-mug-hot"
      }
    ],
    technicalDecisions: [
      {
        title: "Pure CSS Layout Performance",
        description: "Zero heavy external styling frameworks, ensuring instantaneous render time and 99+ Core Web Vitals score."
      }
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
    status: "Production",
    lastUpdated: "Recently",
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
    problem: "High-end travelers expect an immersive preview of hotel suites and transparent amenity listings before committing to a reservation.",
    solution: "Built a visually rich hospitality interface with room categorizations, interactive amenities, and responsive reservation modals.",
    myRole: "Frontend Developer",
    architecture: "Responsive Web Layout → Gallery Filter Engine → Booking Inquiry Modal Handler",
    architectureLayers: [
      {
        layer: "Showcase Interface",
        tech: "CSS3 Flexbox & Grid",
        details: "Multi-tier suite showcase with responsive image grids and pricing badges.",
        icon: "fas fa-hotel"
      }
    ],
    technicalDecisions: [
      {
        title: "Mobile-First Booking Modal",
        description: "Constructed an accessible touch-friendly modal workflow for reservation inquiries."
      }
    ],
    githubUrl: "https://github.com/Oke-Precious/Special-Hotel",
    liveUrl: "https://specialhotel.vercel.app/",
    isMajorFeatured: false
  }
];

export const currentlyBuilding = {
  project: "Gavel Case Tracker v2 & Real-Time Collaboration",
  status: "Active Development",
  badge: "In Progress",
  shortDescription: "Expanding the full-stack Gavel legal tracker with WebSocket status notifications, automated filing deadline alerts, and refined document export workflows.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind"],
  githubUrl: "https://github.com/Oke-Precious",
  liveUrl: null,
  lastUpdated: "October 2026",
  highlights: [
    "WebSocket event bus for instantaneous status updates across paralegal views",
    "Automated hearing countdown tracker and overdue alerts",
    "Enhanced PDF case docket generator with custom legal firm headers"
  ]
};

export const codeSnippets = [
  {
    id: "jwt-middleware",
    project: "Gavel Case Tracker",
    title: "JWT Authentication & Role Guard Middleware",
    language: "javascript",
    category: "Backend / Security",
    description: "Express middleware verifying Bearer tokens, decoding payload claims, and restricting sensitive legal routes to authorized roles.",
    code: `// middleware/authGuard.js - Gavel Case Tracker
const jwt = require('jsonwebtoken');

const requireAuth = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied: Missing or invalid token' });
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // { id, email, role }

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
      }

      next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' });
      }
      return res.status(401).json({ error: 'Invalid authentication token' });
    }
  };
};

module.exports = requireAuth;`
  },
  {
    id: "weather-fetch",
    project: "Atmos Weather App",
    title: "Geolocation Coordinate Fetch & API Adapter",
    language: "javascript",
    category: "Frontend / API Integration",
    description: "Asynchronous utility querying browser GPS coordinates and transforming raw OpenWeather payload into clean state format.",
    code: `// utils/weatherService.js - Atmos Weather App
export async function fetchCurrentWeather(lat, lon, units = 'metric') {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
  const url = \`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&units=\${units}&appid=\${apiKey}\`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(\`Weather API responded with status \${res.status}\`);
    }
    const data = await res.json();

    return {
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };
  } catch (error) {
    console.error('Failed to retrieve atmospheric telemetry:', error);
    throw error;
  }
}`
  },
  {
    id: "bank-ledger",
    project: "Precious Bank",
    title: "Atomic Balance Mutation & Transfer Verification",
    language: "javascript",
    category: "State Management / LocalStorage",
    description: "Financial transaction ledger handler calculating verified balance deductions and logging immutable receipt audit records.",
    code: `// services/transferEngine.js - Precious Bank Web App
export function executeTransfer({ recipientAcc, amount, note }) {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    return { success: false, message: 'Please enter a valid positive transfer amount.' };
  }

  const currentBalance = getAccountBalance();
  if (parsedAmount > currentBalance) {
    return { success: false, message: 'Transfer failed: Insufficient ledger funds.' };
  }

  const newBalance = currentBalance - parsedAmount;
  const transactionRecord = {
    id: 'TXN-' + Date.now().toString(36).toUpperCase(),
    recipient: recipientAcc,
    amount: parsedAmount,
    note: note || 'Funds Transfer',
    timestamp: new Date().toISOString(),
    status: 'COMPLETED'
  };

  // Atomic state commit to persistent storage
  localStorage.setItem('bank_balance', newBalance.toFixed(2));
  const ledger = JSON.parse(localStorage.getItem('bank_ledger') || '[]');
  ledger.unshift(transactionRecord);
  localStorage.setItem('bank_ledger', JSON.stringify(ledger));

  return { success: true, newBalance, receipt: transactionRecord };
}`
  }
];

export const careerMilestones = [
  {
    year: "2024 - Present",
    title: "Computer Science Scholar",
    institution: "LAUTECH (Ladoke Akintola University of Technology)",
    description: "Pursuing B.Tech in Computer Science. Core coursework in Data Structures, Database Management, and Systems Software Engineering.",
    tag: "Education & Foundations"
  },
  {
    year: "2024",
    title: "Frontend Engineering & Design Implementation",
    institution: "Special Projects & Web Solutions",
    description: "Specialized in responsive interface engineering, translating designer wireframes into interactive web apps (Precious Bank, Special Hotel, Atmos).",
    tag: "Frontend Development"
  },
  {
    year: "2025 - 2026",
    title: "Full-Stack MERN Architecture & Gavel",
    institution: "Independent & Internship Engineering",
    description: "Architected comprehensive full-stack systems with Node.js, Express, MongoDB, and React, highlighted by Gavel Case Tracker with RBAC and report export.",
    tag: "Full-Stack Engineering"
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
    id: "figma-to-code",
    title: "Figma-to-Code Implementation",
    icon: "fas fa-laptop-code",
    accent: "from-teal-500/20 to-emerald-500/20",
    description: "Translating provided Figma, Adobe XD, or UI/UX designer wireframes into clean, interactive, and responsive web applications with pixel-perfect fidelity."
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
    title: "Fintech & Dashboard UI Implementation",
    icon: "fas fa-building-columns",
    accent: "from-blue-500/20 to-cyan-500/20",
    description: "Engineering secure, intuitive banking and administrative dashboard interfaces with printable transaction receipts, real-time filters, and clean data visualizations."
  },
  {
    id: "modernization",
    title: "Performance & Frontend Refactoring",
    icon: "fas fa-arrows-rotate",
    accent: "from-purple-500/20 to-pink-500/20",
    description: "Refactoring and optimizing existing web products for faster loading speeds, clean code maintainability, fluid responsive behavior, and optimal Core Web Vitals."
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
