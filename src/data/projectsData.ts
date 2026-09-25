import { ProjectItem } from '../types/portfolio';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'tindai',
    slug: 'tindai',
    title: 'TindAI',
    category: 'Personal',
    subtitle: 'On-Device AI Inventory & Credit Ledger',
    shortDescription:
      'An offline inventory management and debt-tracking system for local sari-sari stores, powered by quantized local language models.',
    fullDescription:
      'An on-device inventory and transaction management system designed for neighborhood micro-retailers in Timbao, Biñan. Built to run fully offline without cloud connectivity or recurring subscription fees, using quantized local language models for conversational stock queries and credit ("utang") tracking.',
    description:
      'An offline inventory management and debt-tracking system for local sari-sari stores, powered by quantized local language models.',
    technologies: ['Python', 'Local LLMs (Qwen)', 'LM Studio', 'Mobile Runtime', 'JSON Prompting'],
    techStack: ['Python', 'Local LLMs (Qwen)', 'LM Studio', 'Mobile Runtime', 'Structured JSON Prompting'],
    tags: ['Python', 'Local LLMs (Qwen)', 'LM Studio', 'Mobile', 'JSON Prompting'],
    featured: true,
    order: 1,
    domain: 'Edge AI & Mobile Systems',
    role: 'Lead Developer & Systems Architect',
    overview:
      'Neighborhood sari-sari stores in suburban and rural communities often struggle with intermittent internet connectivity and informal paper-based credit tracking. TindAI provides store owners with an intuitive voice and text assistant that operates entirely on local hardware, protecting customer privacy and eliminating service costs.',
    architecture: [
      'Quantized small language model (SLM) executing on local device hardware.',
      'Constrained JSON prompt templates that parse natural language queries into structured transactional records.',
      'Embedded transaction store maintaining balance ledgers and inventory counts without network access.',
    ],
    architectureNotes: [
      'Quantized small language model (SLM) executing on local device hardware.',
      'Constrained JSON prompt templates that parse natural language queries into structured transactional records.',
      'Embedded transaction store maintaining balance ledgers and inventory counts without network access.',
    ],
    highlights: [
      'Voice and text conversational queries for inventory levels and customer balances.',
      'Sub-second query response times with zero network round-trip latency.',
      'Optimized natural language prompts tailored to colloquial Filipino and Taglish syntax.',
    ],
    repositoryUrl: 'https://github.com/Hiraiyan',
    demoUrl: undefined,
    githubUrl: 'https://github.com/Hiraiyan',
    liveUrl: undefined,
    badgeLabel: 'Personal',
  },
  {
    id: 'nakem',
    slug: 'nakem',
    title: 'NAKEM',
    category: 'School',
    subtitle: 'Adaptive Game Behavior through Layered AI',
    shortDescription:
      'Undergraduate thesis modeling autonomous mythological creature behaviors in Godot Engine using Utility AI, GOAP, and Behavior Trees.',
    fullDescription:
      'Undergraduate thesis developing culturally grounded behaviors for Philippine mythological entities within Godot Engine. Combines Utility AI for dynamic desires, Goal-Oriented Action Planning (GOAP) for sequence synthesis, and Behavior Trees for execution.',
    description:
      'Undergraduate thesis modeling autonomous mythological creature behaviors in Godot Engine using Utility AI, GOAP, and Behavior Trees.',
    technologies: ['Godot Engine 4', 'GDScript', 'Utility AI', 'GOAP Planner', 'Behavior Trees'],
    techStack: ['Godot Engine 4', 'GDScript', 'Utility AI Curves', 'GOAP Planner', 'Behavior Trees'],
    tags: ['Godot Engine 4', 'GDScript', 'Utility AI', 'GOAP', 'Behavior Trees'],
    featured: true,
    order: 2,
    domain: 'Game Development & Game AI',
    role: 'Lead Researcher & AI Engineer',
    overview:
      'Standard video game AI frequently relies on scripted state machines that feel repetitive and predictable. NAKEM implements a modular three-tier cognitive architecture to model organic hunting, stalking, and self-preservation patterns for mythological creatures.',
    architecture: [
      'Tier 1 (Utility AI): Calculates dynamic desire curves for hunger, fear, stealth, and territorial defense.',
      'Tier 2 (GOAP): Synthesizes action sequences to satisfy high-priority desires at lowest path and environmental cost.',
      'Tier 3 (Behavior Trees): Controls real-time execution, obstacle navigation, and sensory line-of-sight checks.',
    ],
    architectureNotes: [
      'Tier 1 (Utility AI): Calculates dynamic desire curves for hunger, fear, stealth, and territorial defense.',
      'Tier 2 (GOAP): Synthesizes action sequences to satisfy high-priority desires at lowest path and environmental cost.',
      'Tier 3 (Behavior Trees): Controls real-time execution, obstacle navigation, and sensory line-of-sight checks.',
    ],
    highlights: [
      'Aswang stalking mechanics featuring raycast sensory awareness and elevated perch selection.',
      'Environmental deterrent fields (salt, garlic, sacred artifacts) altering GOAP cost calculations in real time.',
      'Modular, decoupled decision architecture implemented entirely in native GDScript.',
    ],
    repositoryUrl: 'https://github.com/Hiraiyan',
    demoUrl: undefined,
    githubUrl: 'https://github.com/Hiraiyan',
    liveUrl: undefined,
    badgeLabel: 'School',
  },
  {
    id: 'computer-parts',
    slug: 'computer-parts',
    title: 'Computer Parts Store',
    category: 'School',
    subtitle: 'Academic E-Commerce & Hardware Catalog',
    shortDescription:
      'A structured PC hardware e-commerce catalog featuring faceted component filtering, compatibility categorization, and checkout simulation.',
    fullDescription:
      'A structured academic hardware showcase and e-commerce portal featuring component filtering, dynamic product categorization, specifications comparison, and interactive checkout simulation.',
    description:
      'A structured PC hardware e-commerce catalog featuring faceted component filtering, compatibility categorization, and checkout simulation.',
    technologies: ['Wix Studio', 'Velo (JavaScript)', 'E-Commerce APIs', 'REST APIs', 'Figma'],
    techStack: ['Wix Studio', 'Velo (JavaScript)', 'E-Commerce Taxonomy', 'Product Filter APIs', 'Figma'],
    tags: ['Wix Studio', 'Velo (JS)', 'E-Commerce', 'REST APIs', 'Figma'],
    featured: true,
    order: 3,
    domain: 'Web Development & E-Commerce',
    role: 'Designer & Implementer',
    overview:
      'Developed as a focused web design and e-commerce structure project, this site organizes intricate PC hardware specifications into an intuitive, filterable catalog with streamlined purchase simulation.',
    architecture: [
      'Categorized component taxonomy covering CPUs, GPUs, RAM, motherboards, and power supplies.',
      'Faceted query logic enabling real-time specification filtering and hardware compatibility verification.',
      'State-driven shopping cart simulation managing order items, pricing totals, and mock checkout.',
    ],
    architectureNotes: [
      'Categorized component taxonomy covering CPUs, GPUs, RAM, motherboards, and power supplies.',
      'Faceted query logic enabling real-time specification filtering and hardware compatibility verification.',
      'State-driven shopping cart simulation managing order items, pricing totals, and mock checkout.',
    ],
    highlights: [
      'Clean high-contrast technical product cards with clear pricing and stock indicators.',
      'Responsive multi-breakpoint layout across mobile, tablet, and widescreen desktop monitors.',
      'Structured catalog hierarchy facilitating quick component navigation and comparison.',
    ],
    repositoryUrl: 'https://github.com/Hiraiyan',
    demoUrl: undefined,
    githubUrl: 'https://github.com/Hiraiyan',
    liveUrl: undefined,
    badgeLabel: 'School',
  },
  {
    id: 'cloudswyft-crm',
    slug: 'cloudswyft-crm',
    title: 'CloudSwyft Enterprise CRM & Data Platform',
    category: 'Work',
    subtitle: 'Enterprise Systems Automation & Relational CRM',
    shortDescription:
      'An end-to-end 10-table relational CRM and workflow platform automating lead triage, ticketing, and cross-channel communications.',
    fullDescription:
      'An enterprise-grade relational CRM and business automation platform engineered using Microsoft Power Apps, Power Automate, and SharePoint Lists to unify fragmented lead intake, ticket routing, and communication tracking.',
    description:
      'An end-to-end 10-table relational CRM and workflow platform automating lead triage, ticketing, and cross-channel communications.',
    technologies: ['Microsoft Power Apps', 'Power Automate', 'SharePoint Lists', 'Relational Schema', 'Power Fx'],
    techStack: ['Microsoft Power Apps', 'Power Automate Cloud Flows', 'SharePoint Lists', 'Relational Schema Design', 'Power Fx'],
    tags: ['Power Apps', 'Power Automate', 'SharePoint Lists', 'Relational DB', 'Power Fx'],
    featured: false,
    order: 4,
    domain: 'Enterprise Automation & Systems',
    role: 'Software Engineer Intern',
    overview:
      'Designed to consolidate fragmented inquiry channels across web forms, enterprise email accounts, and partner referrals into a unified conversion and support pipeline with full relational data integrity.',
    architecture: [
      'Normalized 10-table relational schema structured to prevent SharePoint delegation threshold bottlenecks.',
      'Event-driven Power Automate cloud flows executing automated lead qualification, deduplication, and notification routing.',
      'Threaded communication hub reconstructing client conversation histories from relational child records.',
    ],
    architectureNotes: [
      'Normalized 10-table relational schema structured to prevent SharePoint delegation threshold bottlenecks.',
      'Event-driven Power Automate cloud flows executing automated lead qualification, deduplication, and notification routing.',
      'Threaded communication hub reconstructing client conversation histories from relational child records.',
    ],
    highlights: [
      'Multi-channel inbound intake pipelines with automated category tagging and routing.',
      'Automated state transition triggers moving records from Inbound → Triaged → Qualified → Converted.',
      'Executive KPI dashboard reporting real-time pipeline velocity and SLA handling metrics.',
    ],
    repositoryUrl: undefined,
    demoUrl: undefined,
    githubUrl: undefined,
    liveUrl: undefined,
    badgeLabel: 'Work',
  },
  {
    id: 'genai-broll',
    slug: 'genai-broll',
    title: 'GenAI B-Roll Sourcing Pipeline',
    category: 'Personal',
    subtitle: 'Automated Media ETL & Local Vision AI',
    shortDescription:
      'An automated ETL pipeline that extracts visual keywords from scripts, fetches stock footage via APIs, and ranks clips using local vision models.',
    fullDescription:
      'A fault-tolerant automated ETL pipeline that parses video scripts, extracts visual keywords, searches stock media APIs, and ranks clips using local vision models (Qwen 35B). Reduced manual video sourcing time by 45-60%.',
    description:
      'An automated ETL pipeline that extracts visual keywords from scripts, fetches stock footage via APIs, and ranks clips using local vision models.',
    technologies: ['Python 3.11', 'Qwen 2.5-VL', 'LM Studio', 'Pexels API', 'Asyncio', 'FFmpeg'],
    techStack: ['Python 3.11', 'Qwen 2.5-VL 35B', 'LM Studio Local Server', 'Pexels REST API', 'Asyncio Concurrency', 'FFmpeg'],
    tags: ['Python 3.11', 'Qwen Vision', 'LM Studio', 'Pexels API', 'Asyncio'],
    featured: false,
    order: 5,
    domain: 'Automation & Local AI',
    role: 'Pipeline Architect',
    overview:
      'Manual B-roll collection for long-form content creation is tedious and time-consuming. This pipeline automates the entire ingestion, retrieval, and semantic visual validation workflow.',
    architecture: [
      'Concurrent asynchronous API workers querying stock media endpoints in parallel.',
      'Integration with local vision models via LM Studio OpenAI-compatible endpoint for semantic video frame relevance scoring.',
      'Fault-tolerant retry handling and caching layer to survive network rate limits.',
    ],
    architectureNotes: [
      'Concurrent asynchronous API workers querying stock media endpoints in parallel.',
      'Integration with local vision models via LM Studio OpenAI-compatible endpoint for semantic video frame relevance scoring.',
      'Fault-tolerant retry handling and caching layer to survive network rate limits.',
    ],
    highlights: [
      'Trimmed script-to-footage generation from 30+ minutes down to 7-10 minutes.',
      'Evaluates visual quality locally without external API token costs.',
      'Generates organized asset manifest ready for video editing timeline import.',
    ],
    repositoryUrl: 'https://github.com/Hiraiyan',
    demoUrl: undefined,
    githubUrl: 'https://github.com/Hiraiyan',
    liveUrl: undefined,
    badgeLabel: 'Personal',
  },
  {
    id: 'mern-ecommerce',
    slug: 'mern-ecommerce',
    title: 'Full-Stack MERN E-Commerce Store',
    category: 'Personal',
    subtitle: 'Multi-Vendor Retail & Inventory Platform',
    shortDescription:
      'A full-stack retail application featuring role-based access, JWT authentication, Zustand state management, and Cloudinary media processing.',
    fullDescription:
      'A full-stack e-commerce web application featuring role-based access control (Admin & Customer), secure JWT authentication, state management with Zustand, Chakra UI styling, and an asynchronous Cloudinary media pipeline.',
    description:
      'A full-stack retail application featuring role-based access, JWT authentication, Zustand state management, and Cloudinary media processing.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Zustand', 'Chakra UI'],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB / Mongoose', 'Zustand', 'Chakra UI', 'Cloudinary CDN', 'JWT Auth'],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Zustand'],
    featured: false,
    order: 6,
    domain: 'Full-Stack Web Development',
    role: 'Full-Stack Developer',
    overview:
      'A comprehensive full-stack e-commerce solution offering complete customer lifecycle handling, inventory management, and an administrative control panel.',
    architecture: [
      'Secure password hashing with bcrypt and stateless JWT authorization middleware.',
      'Normalized MongoDB schemas with Mongoose for products, orders, and user accounts.',
      'Optimized client state via Zustand for responsive cart and wishlist interactions.',
    ],
    architectureNotes: [
      'Secure password hashing with bcrypt and stateless JWT authorization middleware.',
      'Normalized MongoDB schemas with Mongoose for products, orders, and user accounts.',
      'Optimized client state via Zustand for responsive cart and wishlist interactions.',
    ],
    highlights: [
      'Asynchronous CDN media uploads directly to Cloudinary.',
      'Admin dashboard with inventory controls and status updates.',
      'Fully responsive UI styled with Chakra UI tokens.',
    ],
    repositoryUrl: 'https://github.com/Hiraiyan',
    demoUrl: undefined,
    githubUrl: 'https://github.com/Hiraiyan',
    liveUrl: undefined,
    badgeLabel: 'Personal',
  },
  {
    id: 'foundit',
    slug: 'foundit',
    title: 'FoundIT: Lost & Found System',
    category: 'School',
    subtitle: 'Campus Asset Recovery & Notification System',
    shortDescription:
      'A database-backed campus portal for reporting lost items, managing ownership claims, and tracking verification status.',
    fullDescription:
      'A relational database-backed web application facilitating asset recovery on campus. Features role-based verification, session authentication, asynchronous claim submissions via AJAX, and stateful status updates.',
    description:
      'A database-backed campus portal for reporting lost items, managing ownership claims, and tracking verification status.',
    technologies: ['PHP 8', 'MySQL', 'JavaScript (ES6)', 'AJAX', 'Bootstrap 5'],
    techStack: ['PHP 8', 'MySQL Relational Database', 'JavaScript (ES6)', 'AJAX API Handlers', 'Bootstrap 5', 'Apache'],
    tags: ['PHP 8', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap 5'],
    featured: false,
    order: 7,
    domain: 'Web Development & Database Systems',
    role: 'Backend & Database Developer',
    overview:
      'Designed to streamline lost item reporting and claims verification within educational institutions, reducing unclaimed property accumulation and improving return rates.',
    architecture: [
      'Relational MySQL schema tracking item lifecycles from Reported → Verified → Claimed → Archived.',
      'AJAX communication layer preventing disruptive page reloads during claim filing.',
      'Session-based role authentication separating student users from administrative security staff.',
    ],
    architectureNotes: [
      'Relational MySQL schema tracking item lifecycles from Reported → Verified → Claimed → Archived.',
      'AJAX communication layer preventing disruptive page reloads during claim filing.',
      'Session-based role authentication separating student users from administrative security staff.',
    ],
    highlights: [
      'Real-time status tracking for claimed items.',
      'Categorized search with item image upload and physical location tagging.',
      'Audit trail logging every status change and claim review.',
    ],
    repositoryUrl: 'https://github.com/Hiraiyan',
    demoUrl: undefined,
    githubUrl: 'https://github.com/Hiraiyan',
    liveUrl: undefined,
    badgeLabel: 'School',
  },
];
