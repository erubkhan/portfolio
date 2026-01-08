interface ExperienceItem {
    company: string;
    role: string;
    location: string;
    period: string;
    highlights: string[];
    links?: { label: string; href: string }[];
  }
  
  const experience: ExperienceItem[] = [
    {
      company: "Meraki Technologies",
      role: "Backend Developer Intern",
      location: "Mississauga, Canada",
      period: "September 2025 – Present",
      highlights: [
        "Built a modular, production-ready REST API backend enabling WhatsApp-style CRM operations, including message handling, uploads, contacts, and customer management",
        "Boosted API efficiency by 30% through Socket.io integration and enabled real-time messaging for 100+ users",
        "Increased CRM reliability by 40% with optimized data operations and secure APIs, reducing workflow errors and downtime company",
        "Integrated Supabase/PostgreSQL for structured customer data, optimized queries, and reliable CRUD flows",
      ],
    },
    {
      company: "iQonsulting",
      role: "Full Stack Developer Intern",
      location: "Mississauga, Canada",
      period: "May 2024 – September 2024",
      highlights: [
        'An AI therapist assistant, called <a href="https://healthlytics.ai" target="_blank" rel="noreferrer" class="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Healthlytics.ai</a>, design to record sessions, transcibe, summarize, and chat for an optimized therapy experience',
        "Integrated AWS services (Amplify, Lambda, S3, API Gateway, Cognito, Bedrock) for secure backend functionality",
        "Used Python and LLMs (Claude 3 Sonnet, Deepgram) to implement advanced AI features",
      ],
    },
  ];

  
  
  export default experience;