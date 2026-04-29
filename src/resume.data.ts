import type { TResumeSchema } from "./resume.schema";

export const resumeData: TResumeSchema = {
  meta: {
    theme: "jsonresume-theme-stackoverflow",
  },
  basics: {
    name: "Keshav Kumar",
    label: "Software Development Engineer 1 (SDE-1)",
    email: "keshavkumar8122@gmail.com",
    phone: "+91 785798XXXX",
    url: "https://keshavop.in",
    profiles: [
      {
        network: "LinkedIn",
        username: "keshavop",
        url: "https://www.linkedin.com/in/keshavkumar3/",
      },
      {
        network: "GitHub",
        username: "keshavop",
        url: "https://github.com/Keshavop",
      },
      {
        network: "Portfolio",
        username: "keshavop",
        url: "https://keshavop.in",
      }
    ],
  },
  work: [
    {
      name: "Jupiter Money, Amica Financial Technologies Pvt. Ltd.",
      position: "Software Development Engineer 1 (SDE-1)",
      startDate: "2024-10-01",
      location: "India",
      highlights: [
        "Tech Stack: Java, Kotlin, Spring Boot, Kafka, PostgreSQL, Redis, AWS",
        "XtraBoost AutoSweep: Built a smart savings feature that automatically sweeps idle cash into liquid mutual funds (~7% returns), enabling users to earn higher yields while maintaining instant liquidity.",
        "Fixed Deposit (FD) Marketplace: Designed and delivered a multi-bank FD platform offering deposits from various banking partners. Led the transition to a standalone microservice, expanding reach to non-banking customers including Credit Card and TPAP users.",
        "Digital Gold Platform: Launched a secure Digital Gold investment product by integrating with external partners. Redesigned the system with a modular architecture, enabling Credit Card and UPI users to invest in gold without requiring a savings account."
      ],
    },
    {
      name: "Jupiter Money, Amica Financial Technologies Pvt. Ltd.",
      position: "SDE Intern",
      startDate: "2023-11-01",
      endDate: "2024-09-01",
      location: "India",
      highlights: [
        "Tech Stack: Java, Kotlin, Spring Boot, Kafka, SQL",
        "Developed a dedicated microservice to securely handle sensitive user data (PII) for MF KYC and order processing, streamlining inter-service communication across backend systems while maintaining high security standards.",
        "Contributed to the development of Loan Against Mutual Funds (LAMF), gaining hands-on experience in lending and investment workflows.",
        "Implemented key metrics and built Grafana dashboards for investment service monitoring; configured Prometheus-based alerting to enable proactive issue detection, improving service reliability by 15%.",
        "Created OneView internal dashboard for Spend Linked and LAMF products to streamline customer support ticket handling, boosting overall team efficiency by 30%."
      ],
    }
  ],
  education: [
    {
      institution: "Lovely Professional University, Punjab",
      area: "Computer Science and Engineering",
      studyType: "Bachelor of Technology",
      startDate: "2020-01-01",
      endDate: "2024-06-01",
      score: "CGPA: 8.49"
    }
  ],
  certificates: [
    {
      name: "META Front-end Professional Certification",
      issuer: "META"
    },
    {
      name: "META Back-end Professional Certification",
      issuer: "META"
    },
    {
      name: "Server side JavaScript with Node.js",
      issuer: "NIIT University Coursera"
    },
    {
      name: "Database Management System",
      issuer: "Infosys Springboard"
    },
    {
      name: "DSA Self Placed",
      issuer: "GeeksForGeeks"
    }
  ],
  skills: [
    {
      name: "Languages",
      keywords: [
        "C++",
        "Java",
        "Kotlin",
        "SQL"
      ],
    },
    {
      name: "Frameworks & Databases",
      keywords: [
        "Spring Boot",
        "Jersey",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Dynamo DB",
        "AWS SQS"
      ],
    },
    {
      name: "Developer Tools",
      keywords: [
        "AWS",
        "Docker",
        "Grafana",
        "Prometheus",
        "Git",
        "GitHub",
        "Linux",
        "Postman"
      ],
    },
    {
      name: "Interpersonal Skills",
      keywords: [
        "Teamwork",
        "Problem-Solving",
        "Adaptability",
        "Decision-Making"
      ],
    }
  ],
  projects: [
    {
      name: "CodeSync IDE",
      description: "Collaborative IDE using React, Node.js, Rapid API, and Socket.IO for seamless real-time communication.",
      startDate: "2023-09-01",
      highlights: [
        "Developed a collaborative IDE using React, Node.js, and Socket.IO for seamless real-time multi-user code editing and communication.",
        "Implemented a live chat feature using Socket.IO, enabling users to discuss code, share insights, and brainstorm ideas within the platform.",
        "Integrated CodeMirror for a modern IDE-like UI and Rapid API to compile and execute code in C, C++, Java, JavaScript, and more."
      ],
      url: "https://codesyncide.vercel.app",
      keywords: ["ReactJS", "NodeJS", "ExpressJS", "Socket.IO"]
    },
    {
      name: "Employee Navigator",
      description: "Employee management system with RESTful APIs for CRUD operations using Java Spring Boot and MySQL.",
      startDate: "2024-05-01",
      highlights: [
        "Implemented RESTful APIs for employee CRUD operations using Spring Boot with Hibernate ORM and MySQL for efficient data persistence.",
        "Designed user authentication and authorization using JWT tokens, ensuring secure and role-based access control.",
        "Enhanced observability using Spring Boot Actuator and configured containerized deployment with Docker."
      ],
      url: "https://github.com/keshavop/Employee-ops-management-system",
      keywords: ["Java", "Spring Boot", "MySQL"]
    }
  ],
  references: [],
  awards: [
    {
      title: "LeetCode Rating",
      date: "2024",
      awarder: "LeetCode",
      summary: "Rated 1430 on LeetCode; solved 500+ problems across LeetCode & CodeStudio"
    },
    {
      title: "Hacktoberfest Contributor",
      date: "2023",
      awarder: "Hacktoberfest",
      summary: "Contributed to Hacktoberfest in 2021, 2022, and 2023"
    },
    {
      title: "Google Cloud Programs",
      date: "2022",
      awarder: "Google",
      summary: "Participated in Google Cloud Facilitator Program & Google Cloud Ready Program; earned cloud skill badges"
    },
    {
      title: "LinkedIn Recognition",
      date: "2023",
      awarder: "LinkedIn",
      summary: "Selected as Top 5% contributor in Web Development on LinkedIn Blog Space"
    }
  ]
};
