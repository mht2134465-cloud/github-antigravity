export const portfolioData = {
  personal: {
    name: "Alex Rivera",
    title: "Staff Full-Stack & AI Systems Architect",
    tagline: "Architecting high-concurrency cloud systems, autonomous AI agents, and hyper-polished digital experiences.",
    shortBio: "8+ years turning complex distributed problems into intuitive, lightning-fast digital products. Specialized in React 19, TypeScript, Go, PyTorch/LLM orchestrations, and cloud-native microservices.",
    location: "San Francisco, CA (Open to Worldwide Remote)",
    status: "🟢 Available for Staff Roles & Advisory",
    availabilityDetails: "Currently accepting high-impact contracts, staff full-stack roles, and AI architecture consulting.",
    email: "alex.rivera.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    discord: "alexrivera#4096",
    calendly: "https://calendly.com",
    yearsOfExperience: "8+",
    projectsCompleted: "50+",
    activeUsersServed: "1.5M+",
    uptimeRecord: "99.99%",
  },

  stats: [
    { label: "Years of Experience", value: "8+", detail: "Enterprise & Scale-ups" },
    { label: "Production Apps", value: "52", detail: "Shipped & Maintained" },
    { label: "Active Monthly Users", value: "1.8M+", detail: "Across Web & APIs" },
    { label: "Open Source Stars", value: "4.2k+", detail: "GitHub Community" },
  ],

  techStackTicker: [
    "React 19", "TypeScript", "Next.js 15", "Node.js", "Python / PyTorch", 
    "Go (Golang)", "Tailwind CSS", "PostgreSQL", "Redis", "Docker & K8s", 
    "AWS Lambda / ECS", "GraphQL", "Vector DBs (pgvector)", "LangChain / LangGraph"
  ],

  skills: {
    frontend: [
      { name: "React / Next.js", level: 98, experience: "7 yrs", tag: "Core", description: "Server Components, hooks architecture, streaming SSR, Suspense" },
      { name: "TypeScript", level: 95, experience: "6 yrs", tag: "Advanced", description: "Strict type safety, generics, AST manipulation, type gymnastics" },
      { name: "Tailwind CSS & UI Systems", level: 96, experience: "5 yrs", tag: "Design", description: "Design tokens, accessible WCAG 2.1 AA, high-performance animations" },
      { name: "State & Realtime (Zustand/WebSockets)", level: 92, experience: "6 yrs", tag: "Architecture", description: "CRDTs, reactive store patterns, sub-10ms UI sync" },
      { name: "WebGL / Three.js / Canvas", level: 84, experience: "3 yrs", tag: "Creative", description: "Interactive shaders, 3D product viewports, particle systems" },
    ],
    backend: [
      { name: "Node.js / Express / Fastify", level: 94, experience: "7 yrs", tag: "Server", description: "Event loop optimization, streaming data pipelines, worker threads" },
      { name: "Python / FastAPI", level: 92, experience: "5 yrs", tag: "AI/API", description: "Async REST/gRPC endpoints, background task queues with Celery" },
      { name: "Go (Golang)", level: 86, experience: "4 yrs", tag: "High-Perf", description: "Concurrent goroutines, memory pooling, low-latency microservices" },
      { name: "PostgreSQL & pgvector", level: 93, experience: "6 yrs", tag: "Database", description: "Query planning, partitioning, indexing, ACID transactions" },
      { name: "Redis & Distributed Caching", level: 90, experience: "5 yrs", tag: "Caching", description: "Pub/Sub, rate limiters, session stores, write-through caching" },
    ],
    aiAndCloud: [
      { name: "LLM Orchestration (LangChain/LlamaIndex)", level: 94, experience: "3 yrs", tag: "AI", description: "Agentic workflows, tool use, prompt chaining, function calling" },
      { name: "Vector Search & RAG Systems", level: 91, experience: "3 yrs", tag: "AI/RAG", description: "Hybrid BM25 + dense retrieval, re-ranking, chunking strategies" },
      { name: "AWS Cloud (ECS, Lambda, S3, RDS)", level: 90, experience: "6 yrs", tag: "Cloud", description: "Serverless architectures, VPC networking, CloudFront CDN" },
      { name: "Docker, Kubernetes & Terraform", level: 88, experience: "5 yrs", tag: "DevOps", description: "Multi-stage builds, Helm charts, infrastructure as code" },
      { name: "CI/CD & Observability (GitHub Actions, Datadog)", level: 92, experience: "6 yrs", tag: "DevOps", description: "Zero-downtime blue/green deploys, distributed tracing" },
    ],
    toolsAndPractices: [
      { name: "System Design & Architecture", level: 96, experience: "8 yrs", tag: "Design", description: "High-availability patterns, CQRS, event sourcing" },
      { name: "Automated Testing (Playwright/Jest/Vitest)", level: 90, experience: "6 yrs", tag: "Quality", description: "E2E testing suites, visual regression, TDD/BDD" },
      { name: "Git, Trunk-Based Development & Code Reviews", level: 98, experience: "8 yrs", tag: "Process", description: "Git workflows, semantic versioning, team mentorship" },
      { name: "Figma to Production Code", level: 89, experience: "5 yrs", tag: "UI/UX", description: "Pixel-perfect translation, component library maintainer" },
    ]
  },

  projects: [
    {
      id: "neuroflow-ai",
      title: "NeuroFlow AI — Autonomous Agent Orchestrator",
      category: "AI & ML",
      badge: "Featured AI Flagship",
      year: "2025",
      role: "Lead Architect & Full-Stack Engineer",
      metrics: "Reduced complex multi-step research latency by 72% across 14,000 corporate users",
      shortDescription: "A multi-agent RAG workbench enabling enterprises to deploy cooperative LLM agents with interactive visual execution graphs, real-time streaming, and persistent vector memory.",
      fullDescription: "NeuroFlow AI is an enterprise-grade platform that coordinates specialized autonomous AI agents. Powered by an event-driven Go backend and a reactive React 19 canvas frontend, users can orchestrate multi-step workflows with real-time token streaming, human-in-the-loop approvals, and automated vector database synchronization.",
      problem: "Enterprise teams struggled with brittle LLM prompts that failed on complex, multi-step documents requiring cross-verification and human sign-off.",
      solution: "Engineered an asynchronous DAG executor in Go communicating via WebSockets to a React frontend, allowing users to watch agents think, debate, and assemble verified reports with visual breadcrumbs.",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Go (Golang)", "PostgreSQL", "pgvector", "WebSockets", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo-neuroflow-ai.example.com",
      stats: [
        { label: "Tokens Processed", value: "2.4B+" },
        { label: "Active Teams", value: "450+" },
        { label: "Avg Latency", value: "140ms" }
      ],
      highlights: [
        "Interactive node graph canvas with live agent status pulses",
        "Deterministic audit logs with versioned memory checkpoints",
        "Zero-latency streaming markdown responses with syntax highlighting",
        "Fine-grained RBAC with SAML 2.0 / Okta SSO integration"
      ],
      gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
      accentColor: "#06b6d4"
    },
    {
      id: "pulseengine-cloud",
      title: "PulseEngine Cloud — Realtime Telemetry Platform",
      category: "Cloud & Systems",
      badge: "Distributed Systems",
      year: "2024",
      role: "Principal Systems Engineer",
      metrics: "Sustained 120,000 metrics/second with < 45ms P99 end-to-end visualization latency",
      shortDescription: "High-throughput distributed observability dashboard processing billions of metrics with dynamic anomaly detection, custom queries, and instant alerting.",
      fullDescription: "Built for cloud-native infrastructure, PulseEngine captures real-time server telemetry, container health, and application logs. Features a custom WebGL time-series rendering engine capable of rendering 100k data points at 60 FPS without UI jank.",
      problem: "Traditional APM tools were slow to render massive metrics datasets and charged astronomical fees for high-cardinality data.",
      solution: "Designed an in-memory aggregation ring buffer in Go, teamed with a WebGL canvas graph renderer in React that virtualizes offscreen datasets.",
      techStack: ["React 19", "WebGL", "Go", "Redis Streams", "ClickHouse", "Tailwind CSS", "Kubernetes"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo-pulseengine.example.com",
      stats: [
        { label: "Throughput", value: "120k/sec" },
        { label: "P99 Latency", value: "42ms" },
        { label: "Cost Reduction", value: "65%" }
      ],
      highlights: [
        "GPU-accelerated time-series rendering via custom WebGL pipelines",
        "Predictive anomaly detection alerting before outages hit production",
        "Configurable multi-tenant dashboards with drag-and-drop widgets",
        "Prometheus & OpenTelemetry native collector compatibility"
      ],
      gradient: "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
      accentColor: "#a855f7"
    },
    {
      id: "omnicommerce-3d",
      title: "OmniCommerce 3D — Next-Gen Spatial E-Commerce",
      category: "Full-Stack",
      badge: "WebGL / Three.js",
      year: "2024",
      role: "Lead Frontend Engineer",
      metrics: "+38% conversion uplift and 4.9/5 user satisfaction for custom bespoke products",
      shortDescription: "Interactive 3D product customization studio with real-time ray-traced materials, instant AR preview on mobile devices, and seamless headless checkout.",
      fullDescription: "OmniCommerce 3D empowers luxury apparel and industrial hardware brands to present hyper-realistic customizable products. Built with Three.js, React, and server-side model optimization pipelines, load times are under 1.2 seconds even on 4G cellular.",
      problem: "3D configurators online were notoriously heavy (50MB+ models), draining battery and causing severe mobile abandonment.",
      solution: "Implemented automated glTF Draco mesh compression, progressive LOD textures, and worker-thread asset decoding.",
      techStack: ["React 19", "Three.js", "TypeScript", "Tailwind CSS", "Node.js", "Stripe API", "AWS S3/CloudFront"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo-omnicommerce.example.com",
      stats: [
        { label: "Load Time", value: "1.1s" },
        { label: "Conversion Lift", value: "+38%" },
        { label: "Mesh Compression", value: "85%" }
      ],
      highlights: [
        "Real-time material swap with dynamic lighting, reflections and shadows",
        "WebXR camera projection for instantaneous mobile room placement",
        "Headless checkout with Apple Pay, Google Pay, and Stripe Elements",
        "Fully accessible fallback mode with high-contrast screen reader support"
      ],
      gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
      accentColor: "#10b981"
    },
    {
      id: "cipherguard-vault",
      title: "CipherGuard Vault — Zero-Knowledge Secure Workspace",
      category: "Full-Stack",
      badge: "Security & Cryptography",
      year: "2023",
      role: "Full-Stack Security Architect",
      metrics: "Audited zero vulnerability score by third-party penetration testing firm",
      shortDescription: "Zero-knowledge encrypted cloud storage and document collaboration platform where encryption keys never touch the servers.",
      fullDescription: "CipherGuard utilizes client-side Web Crypto API (AES-GCM-256 + Argon2id) to encrypt all documents and metadata locally in the browser before transmission. Server storage only ever holds encrypted blobs with no mathematical path to decrypt without user keys.",
      problem: "Legal and healthcare organizations needed team collaboration without exposing confidential files to SaaS vendors or subpoena vulnerabilities.",
      solution: "Built a cryptographic key-derivation hierarchy and asymmetric ECDH sharing mechanism right in modern browser JavaScript.",
      techStack: ["React", "TypeScript", "Web Crypto API", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo-cipherguard.example.com",
      stats: [
        { label: "Encryption", value: "AES-256" },
        { label: "Audits Passed", value: "3" },
        { label: "Files Encrypted", value: "2.5M+" }
      ],
      highlights: [
        "100% client-side crypto processing using native WebCrypto API",
        "Granular file expiration links with self-destruct timers",
        "Real-time cryptographic audit trail of every access attempt",
        "Zero tracking cookies, telemetry-free privacy architecture"
      ],
      gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
      accentColor: "#f59e0b"
    },
    {
      id: "devcanvas-studio",
      title: "DevCanvas Studio — Multiplayer Architecture Studio",
      category: "Full-Stack",
      badge: "Multiplayer Real-time",
      year: "2024",
      role: "Solo Creator",
      metrics: "Over 8,000 GitHub stars and 25,000 monthly active technical diagrammers",
      shortDescription: "Collaborative real-time system architecture whiteboard that automatically generates clean Terraform HCL and Docker Compose files from diagrams.",
      fullDescription: "DevCanvas blends the fluidity of Figma with the rigor of infrastructure-as-code. Engineers drag AWS, GCP, and Kubernetes components onto an infinite canvas, and DevCanvas compiles the topology into valid Terraform blueprints with one click.",
      problem: "Engineers constantly drew diagrams in tools disconnected from actual cloud deployment code, leading to stale architecture docs.",
      solution: "Implemented bidirectional diagram-to-AST parsing with conflict-free replicated data types (CRDTs / Yjs) for seamless multiplayer co-authoring.",
      techStack: ["React", "Yjs / CRDT", "TypeScript", "Tailwind CSS", "Canvas API", "WebSockets"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo-devcanvas.example.com",
      stats: [
        { label: "GitHub Stars", value: "8.4k" },
        { label: "Diagrams Created", value: "85k+" },
        { label: "Sync Latency", value: "< 15ms" }
      ],
      highlights: [
        "Multiplayer cursor tracking and voice/comment pins",
        "1-click export to Terraform, CloudFormation, and Docker Compose",
        "Automatic latency simulation and cloud cost estimation",
        "Offline-first PWA architecture with IndexedDB local caching"
      ],
      gradient: "from-rose-500/20 via-pink-500/10 to-purple-500/20",
      accentColor: "#f43f5e"
    },
    {
      id: "synthwave-audio",
      title: "SynthWave DSP — WebAssembly Synthesizer Workstation",
      category: "Creative & Web3",
      badge: "WebAssembly / Audio",
      year: "2023",
      role: "Creative Technologist",
      metrics: "Achieved studio-grade 3.2ms audio buffer latency on Chrome, Safari, and Firefox",
      shortDescription: "Professional polyphonic synthesizer and digital audio workstation running entirely inside the web browser with Rust + WebAssembly DSP cores.",
      fullDescription: "An exploration into ultra-low-latency web audio. Built with Rust compiled to WebAssembly running inside an AudioWorklet thread, bypassing the JavaScript main thread to deliver glitch-free sound synthesis with analog-modeled filters.",
      problem: "Browser-based music tools suffered from audio dropouts and timing jitter when JavaScript garbage collection triggered.",
      solution: "Engineered a zero-garbage-collection Rust audio engine with lock-free ring buffers communicating directly to high-res WebGL oscilloscopes.",
      techStack: ["React", "Rust (WASM)", "Web Audio API", "AudioWorklet", "Tailwind CSS", "WebGL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo-synthwave.example.com",
      stats: [
        { label: "Audio Latency", value: "3.2ms" },
        { label: "Polyphony", value: "32 voices" },
        { label: "DSP Engine", value: "Rust WASM" }
      ],
      highlights: [
        "Dual analog-modeled oscillators with FM and ring modulation",
        "Visual spectrum analyzer rendered at 60 FPS on WebGL canvas",
        "MIDI keyboard controller plug-and-play support via WebMIDI API",
        "Session export to lossless WAV and MIDI stems"
      ],
      gradient: "from-blue-500/20 via-indigo-500/10 to-teal-500/20",
      accentColor: "#3b82f6"
    }
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Staff Full-Stack & AI Systems Architect",
      company: "HyperScale Labs",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      description: "Spearheading the core enterprise AI platform. Leading a distributed team of 9 senior engineers building high-concurrency LLM orchestration systems and reactive web interfaces.",
      achievements: [
        "Architected an autonomous agent execution engine that scaled enterprise AI processing throughput by 340%.",
        "Reduced frontend bundle size by 48% across core dashboards by migrating to React 19 streaming server patterns.",
        "Instituted company-wide engineering standards for distributed tracing, automated E2E tests, and zero-trust IAM."
      ],
      technologies: ["React 19", "Go", "TypeScript", "PostgreSQL", "pgvector", "AWS ECS", "Tailwind CSS"]
    },
    {
      period: "2021 — 2023",
      role: "Lead Full-Stack Engineer",
      company: "Synthetix AI Solutions",
      location: "Remote",
      type: "Full-Time",
      description: "Owned the architecture of real-time collaboration tools and analytics dashboards used by Fortune 500 product teams.",
      achievements: [
        "Scaled WebSocket infrastructure from 5,000 to 180,000 concurrent active users with sub-50ms sync latency.",
        "Mentored 6 junior/mid-level engineers, resulting in 3 promotions within 18 months.",
        "Spearheaded design system unification, reducing design-to-code turnaround time by 60%."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Redis", "Docker", "GraphQL", "Tailwind CSS"]
    },
    {
      period: "2019 — 2021",
      role: "Senior Software Engineer",
      company: "CloudStream Corp",
      location: "Austin, TX",
      type: "Full-Time",
      description: "Developed microservices and real-time observability dashboards for video streaming pipelines.",
      achievements: [
        "Engineered video transcoding status webhooks and interactive playback diagnostics dashboard.",
        "Refactored legacy monolith into 5 independent containerized microservices on Kubernetes.",
        "Decreased average API response times from 350ms to 45ms using Redis caching and query indexing."
      ],
      technologies: ["React", "Python / FastAPI", "PostgreSQL", "Docker", "Kubernetes", "AWS S3"]
    },
    {
      period: "2017 — 2019",
      role: "Software Engineer",
      company: "PixelCrafters Interactive",
      location: "San Francisco, CA",
      type: "Full-Time",
      description: "Built high-performance marketing web applications, custom interactive animations, and responsive client portals.",
      achievements: [
        "Delivered 18 client web applications with 100% on-time milestone delivery.",
        "Pioneered component-driven development with React and Storybook across client engagements."
      ],
      technologies: ["React", "JavaScript", "HTML5 Canvas", "Node.js", "CSS3 / Sass"]
    }
  ],

  testimonials: [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "HyperScale Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Alex is that rare 1% engineer who bridges deep low-level distributed systems thinking with unmatched taste in UI/UX polish. Whatever project he touches becomes twice as fast and ten times more reliable.",
      stars: 5,
      date: "October 2024"
    },
    {
      name: "Marcus Thorne",
      role: "Chief Technology Officer",
      company: "Synthetix AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Under Alex's leadership, our real-time collaboration engine was rebuilt from the ground up without a single minute of downtime. His architectural decisions saved us hundreds of thousands in cloud bills.",
      stars: 5,
      date: "August 2023"
    },
    {
      name: "Elena Rostova",
      role: "Staff Product Designer",
      company: "DesignOps Global",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      quote: "Working with Alex is an absolute joy for any designer. He doesn't just match Figma mocks pixel-for-pixel; he enhances them with micro-interactions, responsive fluidity, and buttery 60 FPS transitions.",
      stars: 5,
      date: "March 2024"
    }
  ],

  articles: [
    {
      id: "rag-agent-architectures",
      title: "Designing Resilient Multi-Agent RAG Architectures with Vector Memory",
      readTime: "7 min read",
      publishedDate: "Jan 15, 2025",
      category: "AI & Architecture",
      summary: "How to avoid fragile LLM loops by implementing deterministic state graphs, hybrid dense/sparse retrieval, and transactional memory rollback.",
      fullContent: `Large language models excel at generation, but enterprise production demands deterministic reliability. In this article, we dissect the architecture of autonomous multi-agent systems.

### 1. The Trap of Unbounded Loops
When naive multi-agent systems converse, circular hallucinations quickly burn API budgets. We explore how Directed Acyclic Graphs (DAGs) and LangGraph state machines enforce bounded execution invariants.

### 2. Hybrid Retrieval with pgvector & BM25
Vector similarity alone misses exact token matches like SKU numbers or variable names. Combining Reciprocal Rank Fusion (RRF) with pgvector yields a 28% jump in factual precision.

### 3. Human-in-the-Loop Interventions
How to build real-time WebSocket suspension points where human reviewers can inspect intermediate agent scratchpads, approve tool calls, or edit context before execution resumes.`
    },
    {
      id: "websockets-at-scale",
      title: "Scaling Real-Time WebSockets to 100k Concurrent Connections in Go",
      readTime: "9 min read",
      publishedDate: "Nov 28, 2024",
      category: "Backend & Systems",
      summary: "Practical takeaways from optimizing memory footprints, epoll event loops, and Redis Pub/Sub backplanes for high-volume telemetry.",
      fullContent: `Managing 100,000 persistent connections per single node requires understanding Linux kernel socket buffers and Go runtime goroutine stacks.

### Key Optimizations:
1. **Goroutine-per-connection vs Epoll**: Why we migrated idle connections to epoll watchers, reducing RAM from 4GB to 320MB.
2. **Lock-Free Ring Buffers**: Eliminating mutex contention during high-frequency telemetry bursts.
3. **Redis Sharding for Broadcasts**: Distributing channel fanouts across multi-core Redis clusters.`
    },
    {
      id: "modern-react-19-patterns",
      title: "Mastering React 19: Server Actions, Streaming, and Compiler Optimizations",
      readTime: "6 min read",
      publishedDate: "Sep 12, 2024",
      category: "Frontend",
      summary: "A deep dive into how React 19 eliminates manual memoization and unifies client-server mutation paradigms.",
      fullContent: `React 19 shifts how developers build web applications. With the new compiler and Actions hooks (useActionState, useOptimistic), boilerplate reduces dramatically while performance improves automatically.

### What Changes:
- **No more useMemo & useCallback**: The React Compiler analyzes reactive dependencies at compile time.
- **Native Document Metadata**: Titles, links, and meta tags natively hoist without external helmet libraries.
- **Asset Loading**: Stylesheets and async scripts load with built-in precedence and deduplication.`
    }
  ],

  educationAndCerts: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      period: "2013 — 2017",
      honors: "Summa Cum Laude, Dean's Honors List",
      focus: "Distributed Systems, Machine Learning & Algorithms"
    },
    {
      title: "AWS Certified Solutions Architect — Professional",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "Verified"
    },
    {
      title: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023",
      badge: "Verified"
    }
  ]
};
