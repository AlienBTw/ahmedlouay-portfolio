export const DATA = {
  home: {
    hero: {
      name: "Ahmed Louay Araour",
      title: "Final-year Data Science Engineering Student",
      subtitle:
        "Applied AI · RAG · LLMs · Computer Vision · NLP · Distributed Training on GPU Clusters",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Applied AI engineer with hands-on experience across ML, software, and DevOps.",
      overview: [
        { name: "AI/ML", level: 90, icon: "lucide:brain", color: "primary", details: ["PyTorch", "Scikit-learn", "TensorFlow", "LLMs", "Computer Vision", "NLP", "MLOps", "Spark"] },
        { name: "Software", level: 85, icon: "lucide:code-xml", color: "secondary", details: ["Python", "Flask", "React", "JavaScript", "Java", "Spring Boot", "Symfony", "C"] },
        { name: "DevOps/Data", level: 80, icon: "lucide:server-cog", color: "success", details: ["Docker", "Jenkins", "SQL", "Hadoop", "Git"] },
      ],
    },
    testimonials: { sectionTitle: "", sectionDescription: "", items: [] },
  },
  about: {
    profile: {
      name: "Ahmed Louay Araour",
      title: "Final-year Data Science Engineering Student",
      image: "",
      description: [
        "Final-year Data Science Engineering student at ESPRIT, Tunis, seeking a 6‑month PFE in Deep Learning, Machine Learning, Computer Vision, or NLP. I build applied AI systems end‑to‑end: RAG, LLM fine‑tuning, and computer vision, with experience orchestrating distributed training on GPU clusters and deploying robust APIs and pipelines.",
      ],
    },
    education: [
      {
        title: "ESPRIT, Tunis — Engineering Degree in Computer Science (Data Science)",
        date: "2021 – Present",
        icon: "mdi:school",
        description: "Coursework and projects in applied machine learning, deep learning, NLP, computer vision, big data, and software engineering.",
      },
    ],
    experience: [
      {
        title: "AI Engineering Intern — RAG-based Student Assistant",
        date: "Summer 2025",
        icon: "mdi:briefcase",
        description:
          "Architected a Retrieval-Augmented Generation assistant improving access to course information. Built NLP pipelines for semantic search & QA, integrated institutional knowledge via REST APIs, and used vector databases for embedding storage and fast retrieval.",
        company: "Esprit Inc., Tunis (Tunisia)",
      },
      {
        title: "Computer Vision Intern — DSE Trigger System",
        date: "Summer 2025",
        icon: "mdi:camera",
        description:
          "Designed a Digital Sound Environment with real‑time visual trigger mechanisms. Implemented movement detection/classification to activate audio triggers and built a seamless CV-to-audio integration pipeline.",
        company: "Greentech, Berlin (Remote)",
      },
      {
        title: "AI Systems Intern — GPU Cluster for Intel GETi",
        date: "Summer 2025",
        icon: "mdi:gpu",
        description:
          "Optimized and parallelized CV model training on multi‑node GPU clusters using Intel GETi, reducing training times by 30%+. Scaled distributed inference, and implemented monitoring/logging for performance and accuracy.",
        company: "Technozor, Tunis",
      },
      {
        title: "Web Development Intern — Flight Delay Prediction",
        date: "2024",
        icon: "mdi:web",
        description:
          "Developed a Python/Flask web app to ingest, analyze, and predict flight delays using regression and time‑series ML models.",
        company: "Voyages Sans Frontières, Tunis",
      },
      {
        title: "Technical Support Intern (Observation)",
        date: "2023",
        icon: "mdi:headset",
        description:
          "One‑month introductory internship observing and assisting with IT issue resolution in a large corporate environment.",
        company: "TotalEnergies, Tunis",
      },
    ],
    technologies: {
      mlAi: {
        description: "Machine Learning and AI toolset",
        tools: [
          { name: "PyTorch", icon: "logos:pytorch-icon" },
          { name: "TensorFlow", icon: "logos:tensorflow" },
          { name: "scikit-learn", icon: "logos:scikit-learn" },
          { name: "Hugging Face", icon: "simple-icons:huggingface" },
          { name: "OpenAI", icon: "simple-icons:openai" },
          { name: "Spark", icon: "logos:apachespark" },
        ],
      },
      cloudData: {
        description: "Data and cloud platforms",
        tools: [
          { name: "Docker", icon: "logos:docker-icon" },
          { name: "Jenkins", icon: "logos:jenkins" },
          { name: "Hadoop", icon: "logos:apache-hadoop" },
          { name: "SQL", icon: "mdi:database" },
          { name: "Git", icon: "mdi:git" },
        ],
      },
      web: {
        description: "Web frameworks and libraries",
        tools: [
          { name: "Flask", icon: "simple-icons:flask" },
          { name: "React", icon: "logos:react" },
          { name: "Spring Boot", icon: "simple-icons:springboot" },
          { name: "Symfony", icon: "logos:symfony" },
        ],
      },
      languages: {
        description: "Programming languages",
        tools: [
          { name: "Python", icon: "logos:python" },
          { name: "Java", icon: "logos:java" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "C", icon: "logos:c" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of applied AI and data science projects.",
    work: [
      {
        id: 1,
        title: "RAG Student Assistant",
        description:
          "Retrieval-Augmented Generation assistant for students with semantic search, QA, and vector DB retrieval over institutional knowledge.",
        image: "",
        gallery: [],
        category: "Applied AI",
        details:
          "Built NLP pipelines, REST integrations, and embeddings store enabling real-time, context-aware responses.",
        github: "",
        live: "",
        tech: [
          { name: "PyTorch", icon: "logos:pytorch-icon" },
          { name: "FAISS", icon: "simple-icons:faiss" },
          { name: "Hugging Face", icon: "simple-icons:huggingface" },
          { name: "Flask", icon: "simple-icons:flask" },
        ],
      },
      {
        id: 2,
        title: "DSE Trigger System",
        description:
          "Computer vision-driven Digital Sound Environment triggering audio from real-time movement classification.",
        image: "",
        gallery: [],
        category: "Computer Vision",
        details:
          "Real-time movement detection and classification integrated with audio triggers in an interactive pipeline.",
        github: "",
        live: "",
        tech: [
          { name: "OpenCV", icon: "simple-icons:opencv" },
          { name: "PyTorch", icon: "logos:pytorch-icon" },
        ],
      },
      {
        id: 3,
        title: "Lung Nodule Detection",
        description:
          "Deep learning system to detect and classify lung nodule malignancy from CT scans (with Institut Salah Azaiez).",
        image: "",
        gallery: [],
        category: "Healthcare AI",
        details:
          "ResNet-based backend API with Flask/Node and React UI for uploads and visualization; clinician-collaborative development.",
        github: "",
        live: "",
        tech: [
          { name: "PyTorch", icon: "logos:pytorch-icon" },
          { name: "Flask", icon: "simple-icons:flask" },
          { name: "React", icon: "logos:react" },
        ],
      },
      {
        id: 4,
        title: "Churn Prediction ML Ops",
        description:
          "End-to-end MLOps pipeline for churn prediction with automated training, CI/CD, and containerized serving.",
        image: "",
        gallery: [],
        category: "MLOps",
        details:
          "Jenkins for CI/CD, Docker for packaging, Flask API for serving; automated retraining and deployment.",
        github: "",
        live: "",
        tech: [
          { name: "scikit-learn", icon: "logos:scikit-learn" },
          { name: "Jenkins", icon: "logos:jenkins" },
          { name: "Docker", icon: "logos:docker-icon" },
          { name: "Flask", icon: "simple-icons:flask" },
        ],
      },
      {
        id: 5,
        title: "Intelligent News Agent",
        description:
          "AI news agent that filters, summarizes (e.g., T5), and personalizes content with vector search (FAISS).",
        image: "",
        gallery: [],
        category: "NLP/LLMs",
        details:
          "Transformer summarization + semantic retrieval for tailored news feeds.",
        github: "",
        live: "",
        tech: [
          { name: "Transformers", icon: "simple-icons:huggingface" },
          { name: "FAISS", icon: "simple-icons:faiss" },
          { name: "Python", icon: "logos:python" },
        ],
      },
      {
        id: 6,
        title: "Emotion Classification from Audio",
        description:
          "MFCC feature extraction + hybrid CNN-LSTM model for emotion recognition from audio.",
        image: "",
        gallery: [],
        category: "Audio AI",
        details:
          "Captures spectral and temporal patterns for high-accuracy emotion classification.",
        github: "",
        live: "",
        tech: [
          { name: "Librosa", icon: "simple-icons:librosa" },
          { name: "PyTorch", icon: "logos:pytorch-icon" },
        ],
      },
    ],
  },
  certifications: [
    { name: "IBM Data Science Specialization" },
    { name: "IBM AI Engineering" },
    { name: "NVIDIA Fundamentals of Deep Learning" },
    { name: "NVIDIA Applications of AI for Anomaly Detection (Ongoing)" },
  ],
  awards: [
    { title: "5th Place - ESPRIT Bal des Projets", date: "June 2023" },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "B2" },
    { name: "English", level: "B2" },
  ],
  contact: {
    heading:
      "Available for 6‑month PFE. Let’s connect.",
    location: {
      mapSrc: "https://www.google.com/maps?q=Tunis%2C+Tunisia&output=embed",
      address: "Tunis, Tunisia",
    },
    email: "AhmedLouay.araour@esprit.tn",
    phone: "+216 97-980-842",
    links: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/ahmed-louay-araour", icon: "mdi:linkedin" },
      { platform: "GitHub", url: "https://github.com/AlienBTw", icon: "mdi:github" },
      { platform: "CV", url: "/Ahmed_Louay_Araour_resume.pdf", icon: "mdi:file-download" },
    ],
  },
  morphingTexts: {
    about: ["Applied", "Practical", "AI"] as const,
    projects: ["RAG", "Vision", "NLP", "MLOps"] as const,
    contact: ["Let’s", "Work", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Ahmed Louay Araour",
    description: "Final-year Data Science Engineering Student. Applied AI, RAG, CV, NLP.",
    contact: {
      email: "AhmedLouay.araour@esprit.tn",
      phone: "+216 97-980-842",
      location: "Tunis, Tunisia",
    },
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/ahmed-louay-araour", icon: "mdi:linkedin" },
      { platform: "GitHub", url: "https://github.com/AlienBTw", icon: "mdi:github" },
      { platform: "CV", url: "/Ahmed_Louay_Araour_resume.pdf", icon: "mdi:file-download" },
    ],
    services: ["Applied AI", "Computer Vision", "NLP", "MLOps"],
  },
} as const;
