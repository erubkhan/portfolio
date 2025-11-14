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
      company: "iQonsulting",
      role: "Full Stack Developer Intern",
      location: "Mississauga, Canada",
      period: "May 2024 – September 2024",
      highlights: [
        'Developed a full-stack mobile app, called <a href="https://healthlytics.ai" target="_blank" rel="noreferrer" class="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Healthlytics.ai</a>, for therapists with session recording, transcription, summarization, and AI-powered chat features.',
        "Integrated AWS services (Amplify, Lambda, S3, API Gateway, Cognito, Bedrock) for secure backend functionality.",
        "Used Python and LLMs (Claude 3 Sonnet, Deepgram) to implement advanced AI features.",
      ],
    },
  ];
  
  export default experience;