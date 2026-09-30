export const cvData = {
  name: "Oke Precious Abioye",
  title: "FULL-STACK WEB DEVELOPER",
  location: "Ogbomoso, Oyo State, Nigeria",
  email: "okepreciousab@gmail.com",
  phone: "+2348101238416",
  github: "https://github.com/Oke-Precious",
  githubHandle: "github.com/Oke-Precious",
  // If you have a Google Docs link, set it here or via VITE_GOOGLE_DOCS_CV_URL env var:
  // e.g. "https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit"
  googleDocUrl: import.meta.env.VITE_GOOGLE_DOCS_CV_URL || "",
  summary:
    "Computer Science student and junior full-stack developer with hands-on project experience in React, JavaScript, Node.js and MongoDB. Stronger in frontend development, with growing backend capabilities demonstrated through REST APIs, authentication and database-backed applications. Use AI-assisted development tools to streamline routine work and dedicate more time to critical thinking and problem-solving. Seeking junior developer roles and software development internships, including remote opportunities.",
  technicalSkills: [
    {
      category: "Languages & Frontend",
      skills: "HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS",
    },
    {
      category: "UI Implementation",
      skills: "Responsive design, Flexbox, CSS Grid, media queries, animations and transitions",
    },
    {
      category: "Backend & Databases",
      skills: "Node.js, Express, MongoDB, Mongoose, Firebase, REST APIs, JWT",
    },
    {
      category: "Tools & Deployment",
      skills: "Git, GitHub, npm, VS Code, Postman, Netlify, Vercel",
    },
    {
      category: "Design",
      skills: "Figma, Canva, Photoshop, CorelDRAW",
    },
  ],
  projects: [
    {
      title: "Gavel Case Tracker",
      stack: "React, Node.js, Express, MongoDB",
      points: [
        "Built case-list interfaces with search, filters, pagination and reusable React components; connected views to REST endpoints using Axios.",
        "Implemented backend case CRUD, Mongoose data models, status-history records and role-based route permissions, with JWT authentication.",
        "Added frontend session restoration and token-refresh handling, plus backend CSV import and CSV/PDF export endpoints.",
      ],
    },
    {
      title: "Projexa Project Management Prototype",
      stack: "HTML, CSS, JavaScript, Node.js",
      link: "https://github.com/Oke-Precious/Projexa",
      points: [
        "Created a project dashboard with task-detail modals, editable task fields and project-creation forms.",
        "Implemented a Node.js backend with signup/login endpoints, password hashing, JWT issuance and project storage using sql.js; published the frontend on Netlify.",
      ],
    },
    {
      title: "Special Bank Frontend Demo",
      stack: "HTML, CSS, JavaScript, Bootstrap",
      link: "https://specialbank.netlify.app",
      points: [
        "Built a banking interface with account screens, simulated transfers, transaction history and printable receipts.",
        "Used browser localStorage to retain demo account and transaction data, with client-side input checks; deployed on Netlify.",
      ],
    },
    {
      title: "Atmos Weather App",
      stack: "HTML, CSS, JavaScript, OpenWeather API",
      link: "https://specialweather.netlify.app",
      points: [
        "Integrated city search and browser geolocation with asynchronous API requests to display weather conditions, temperature, humidity and wind speed.",
        "Added loading and API-error states, Celsius conversion and responsive Grid/Flexbox layouts with mobile breakpoints; deployed on Netlify.",
      ],
    },
  ],
  education: {
    institution: "Ladoke Akintola University of Technology (LAUTECH), Nigeria",
    degree: "Computer Science",
    status: "Undergraduate studies in progress",
    coursework:
      "Data Structures and Algorithms, Database Management, Software Engineering, Systems Analysis and Design, Human-Computer Interaction.",
  },
};
