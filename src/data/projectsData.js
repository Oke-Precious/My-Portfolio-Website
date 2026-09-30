/**
 * Curated projects data for Oke Precious Portfolio.
 * Preserves all genuine project information, screenshots, and links.
 */

export const projectsData = [
  {
    id: 'gavel-tracker',
    title: 'Gavel Case Tracker',
    category: 'Full Stack',
    tagline: 'Legal Case Management & Judicial Records Platform',
    description:
      'A comprehensive full-stack legal case tracking application built with React and Node.js. Features case-list interfaces with advanced search, filters, pagination, and reusable React components connected to REST endpoints using Axios. Implemented backend case CRUD, Mongoose data models, status-history records, role-based route permissions, JWT authentication, frontend session restoration, token-refresh handling, and backend CSV/PDF export endpoints.',
    image: '/media/preciousbank.png', // Fallback screenshot or default
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    featured: true,
    githubRepo: 'Gavel-Case-Tracker',
    githubUrl: 'https://github.com/Oke-Precious',
    liveUrl: '',
    highlights: [
      'Built case-list interfaces with search, filters, pagination, and reusable React components.',
      'Implemented backend case CRUD, Mongoose data models, status-history records, and role-based route permissions with JWT authentication.',
      'Added frontend session restoration and token-refresh handling, plus backend CSV import and CSV/PDF export endpoints.',
      'Constructed RESTful API architecture connecting frontend views to Express controllers via Axios.',
    ],
  },
  {
    id: 'precious-bank',
    title: 'Precious Bank Web App',
    category: 'Frontend & UI',
    tagline: 'Modern Digital Banking & Simulated Transfer Interface',
    description:
      'A sleek, responsive digital banking frontend demo that enables users to experience simulated bank transfers, view interactive balance summaries, review detailed transaction logs, and generate printable receipts. Designed with mobile-responsive financial UI patterns and client-side validation using browser localStorage for demo account and transaction persistence.',
    image: '/media/preciousbank.png',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'LocalStorage'],
    featured: true,
    githubRepo: 'Special-Bank-Web-App',
    githubUrl: 'https://github.com/Oke-Precious/Special-Bank-Web-App',
    liveUrl: 'https://specialbank.netlify.app/',
    highlights: [
      'Full digital banking interface with account overview, transfer simulation, and receipt generator.',
      'Client-side state management using localStorage to persist demo accounts and transaction records across browser sessions.',
      'Input validation, transfer simulation feedback, and responsive layout across desktop and mobile devices.',
    ],
  },
  {
    id: 'projexa',
    title: 'Projexa Project Management',
    category: 'Full Stack',
    tagline: 'Agile Task Board & Project Dashboard Prototype',
    description:
      'An agile project management and task tracking application prototype. Features an interactive project dashboard with task-detail modals, editable task fields, and project-creation forms. Backed by a Node.js server with secure user signup/login endpoints, password hashing, JWT token issuance, and project data storage.',
    image: '/media/beanscene.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'sql.js', 'JWT'],
    featured: true,
    githubRepo: 'Projexa',
    githubUrl: 'https://github.com/Oke-Precious/Projexa',
    liveUrl: 'https://github.com/Oke-Precious/Projexa',
    highlights: [
      'Interactive dashboard featuring task status columns, modal detail editing, and dynamic task creation.',
      'Node.js backend with user authentication, bcrypt password hashing, and JWT token authorization.',
      'Database integration with sql.js for lightweight, portable project storage.',
    ],
  },
  {
    id: 'atmos-weather',
    title: 'Atmos Weather App',
    category: 'Frontend & UI',
    tagline: 'Real-time Meteorological Forecasting & Geolocation Dashboard',
    description:
      'A responsive weather web application integrating browser geolocation and the OpenWeather API. Delivers real-time meteorological conditions, temperature, humidity, and wind speed for any searched city worldwide. Features loading skeletons, asynchronous error handling, Celsius conversion, and responsive Grid/Flexbox layouts.',
    image: '/media/specialhotel.png',
    tags: ['JavaScript', 'OpenWeather API', 'CSS Grid', 'Flexbox', 'Async/Await'],
    featured: false,
    githubRepo: 'specialweather.netlify.app',
    githubUrl: 'https://github.com/Oke-Precious/specialweather.netlify.app',
    liveUrl: 'https://specialweather.netlify.app/',
    highlights: [
      'Direct OpenWeather API integration with asynchronous fetch requests and defensive error handling.',
      'Browser Geolocation API integration for 1-click current weather detection.',
      'Dynamic metric/imperial toggling and responsive weather iconography.',
    ],
  },
  {
    id: 'bean-scene',
    title: 'Special Bean Scene',
    category: 'Frontend & UI',
    tagline: 'Artisan Coffee E-Commerce & Culinary Brand Showcase',
    description:
      'A modern, high-conversion commercial landing and ordering experience for an artisan coffee house. Showcases specialized coffee selections, customer testimonials, and an interactive menu. Emphasizes visual hierarchy, brand color harmonies, and responsive mobile presentation.',
    image: '/media/beanscene.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Branding'],
    featured: true,
    githubRepo: 'SPECIAL-BEAN-SCENE',
    githubUrl: 'https://github.com/Oke-Precious/SPECIAL-BEAN-SCENE',
    liveUrl: 'https://specialbeanscene.netlify.app/',
    highlights: [
      'Refined typographic hierarchy tailored for modern culinary retail.',
      'Smooth scroll anchors, responsive card grid, and promotional showcases.',
      'Interactive menu catalog with responsive touch interaction.',
    ],
  },
  {
    id: 'special-hotel',
    title: 'Special Hotel Website',
    category: 'Frontend & UI',
    tagline: 'Luxury Hospitality & Room Reservation Experience',
    description:
      'A luxury hospitality web platform engineered for hotel guest bookings, suite browsing, and amenity exploration. Designed with immersive imagery, elegant typography, and a streamlined reservation inquiry workflow.',
    image: '/media/specialhotel.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    featured: false,
    githubRepo: 'Special-Hotel',
    githubUrl: 'https://github.com/Oke-Precious/Special-Hotel',
    liveUrl: 'https://specialhotel.netlify.app/',
    highlights: [
      'Hero spotlight with call-to-action booking triggers.',
      'Multi-tier room gallery showcasing amenities, pricing, and high-resolution suites.',
      'Fully responsive mobile navigation and touch-friendly gallery cards.',
    ],
  },
];
