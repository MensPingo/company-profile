export const company = {
  name: "Menspingo",
  legalName: "Menspingo",
  positioning: "AI-Powered IT Solutions Company for Startups and Growing Businesses",
  tagline: "We design, develop, and scale intelligent software solutions for the future.",
  locationLine: "India • Remote-friendly",
  contact: {
    email: "info@menspingo.in",
    phone: "+91 91061 40115",
  },
};

export type Service = {
  slug: string;
  title: string;
  intro: string;
  businessProblem: string;
  ourSolution: string;
  features: string[];
  techStack: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    intro: "Premium corporate websites and landing pages designed to build trust and generate leads.",
    businessProblem:
      "Businesses lose leads when websites are slow, outdated, not mobile-friendly, or missing proper SEO and conversion flows.",
    ourSolution:
      "We build fast, responsive, SEO-ready websites with clean UI, analytics tracking, and lead capture integrations.",
    features: [
      "Business website",
      "Landing page",
      "Admin panel",
      "SEO setup",
      "Contact form",
      "WhatsApp integration",
      "Hosting and domain setup",
      "Google Analytics",
      "Responsive design",
      "Fast loading pages",
    ],
    techStack: ["React", "Material UI", "HTML", "REST API", "GitHub"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    intro: "Modern mobile apps for customers and internal teams with clean UI/UX and scalable architecture.",
    businessProblem:
      "Many apps fail due to poor UX, unstable authentication, and unreliable integrations — leading to churn and low adoption.",
    ourSolution:
      "We build a clean, scalable mobile architecture with secure authentication and integration-ready flows for growth.",
    features: [
      "Android app",
      "iOS-ready architecture",
      "User authentication",
      "API integration",
      "Push notification-ready structure",
      "Clean UI/UX",
    ],
    techStack: ["React", "REST API", "JWT", "GitHub"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    intro: "Conversion-focused e-commerce builds with a clean checkout flow and admin operations.",
    businessProblem:
      "E-commerce teams struggle with slow storefronts, checkout drop-offs, and operational inefficiencies in order/inventory flows.",
    ourSolution:
      "We build fast storefronts with payment-ready checkout and admin dashboards that simplify order and inventory management.",
    features: [
      "Product listing",
      "Cart",
      "Checkout",
      "Payment gateway-ready structure",
      "Order management",
      "Admin dashboard",
      "Inventory management",
      "Coupon system",
      "Customer login",
      "Email/SMS notification-ready flow",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "REST API", "GitHub"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    intro: "Custom systems for operations — dashboards, CRM/ERP modules, and automation tools.",
    businessProblem:
      "Growing businesses need internal systems to manage leads, teams, and reporting, but off-the-shelf tools don't fit their workflows.",
    ourSolution:
      "We build role-based systems with reporting modules and admin dashboards designed around your exact workflow.",
    features: ["CRM", "ERP", "Admin dashboards", "Business automation tools", "Role-based access", "Reporting modules"],
    techStack: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST API", "JWT"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    intro: "Add AI features and automation to reduce manual work and speed up operations.",
    businessProblem:
      "Teams waste time on repetitive workflows, manual lead handling, and support operations — slowing growth and increasing costs.",
    ourSolution:
      "We implement AI chatbots, workflow automations, and recommendation-ready foundations with practical guardrails.",
    features: [
      "AI chatbot",
      "Workflow automation",
      "Lead automation",
      "Business process automation",
      "AI-based recommendation-ready structure",
    ],
    techStack: ["AI Tools", "REST API", "Node.js", "GitHub"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    intro: "Reliable deployments and scalable infrastructure planning for modern apps.",
    businessProblem:
      "Products often fail due to unstable deployments, lack of monitoring, and infrastructure that doesn't scale with traffic.",
    ourSolution:
      "We set up deployment-ready infrastructure with Docker and CI/CD patterns, with a plan for scaling and reliability.",
    features: ["AWS deployment support", "Docker setup", "CI/CD pipeline-ready structure", "Server configuration", "Scalable deployment planning"],
    techStack: ["AWS", "Docker", "GitHub", "CI/CD", "Monitoring"],
  },
  {
    slug: "maintenance-support",
    title: "Software Maintenance & Support",
    intro: "Long-term support, bug fixes, upgrades, and performance improvements for your software.",
    businessProblem:
      "Apps degrade over time without maintenance: broken dependencies, security risks, slow pages, and unclear ownership.",
    ourSolution:
      "We provide reliable maintenance with clear SLAs, documentation, upgrades, monitoring, and continuous improvements.",
    features: ["Bug fixes", "Performance improvements", "Dependency upgrades", "Security hardening", "Monitoring guidance", "Long-term support"],
    techStack: ["React", "Node.js", "Java", "Spring Boot", "AWS", "Docker"],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-professional-website",
    title: "Why Every Growing Business Needs a Professional Website",
    date: "2026-04-25",
    summary:
      "A professional website builds trust, explains your services clearly, and helps customers contact your business easily. For startups and small businesses, it is the first step toward a strong digital presence.",
    tags: ["Website", "Business Growth", "Digital Presence"],
  },
  {
    slug: "custom-software-vs-ready-made-tools",
    title: "Custom Software vs Ready-Made Tools: What Should Startups Choose?",
    date: "2026-04-25",
    summary:
      "Ready-made tools are quick to start, but custom software gives better control, flexibility, and scalability. Learn when a startup should choose custom development and when simple tools are enough.",
    tags: ["Custom Software", "Startup", "Scalability"],
  },
  {
    slug: "why-backend-architecture-matters",
    title: "Why Backend Architecture Matters for Modern Applications",
    date: "2026-04-25",
    summary:
      "A strong backend keeps your application secure, fast, and scalable. Clean APIs, authentication, database design, and structured code help businesses grow without technical problems.",
    tags: ["Backend", "API", "Architecture"],
  },
];

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-chatbot-for-support",
    category: "Automation",
    title: "AI Chatbot Foundation for Support",
    problem: "Teams need faster responses to common questions and a scalable support workflow.",
    solution: "Implemented a simple chatbot foundation that can be extended with internal knowledge and guardrails.",
    stack: ["Java", "Spring Boot", "Spring AI", "REST API"],
    result: "Reduced manual repetitive responses and created a base for future automation.",
  },
];
