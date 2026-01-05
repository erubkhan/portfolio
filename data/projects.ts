const projects = [
    {
      slug: "ai-resume-matcher",
      title: "ResumeGPT",
      summary:
        "Match resumes to job descriptions using embeddings + GPT for recruiter-style summaries.",
      tech: ["Next.js", "TypeScript", "Node.js/Express", "OpenAI", "Supabase"],
      repo: "https://github.com/erubkhan/ai-resume-matcher",
      demo: "https://ai-resume-matcher-2.vercel.app",
      image: "/project_img/resumegpt.png",
    },
    {
        slug: "infinitum-crm",
        title: "Infinitum WhatsApp CRM (Server)",
        summary:
          "An extension for WhatsApp for businesses to manage chat workflows and meet client needs efficiently.",
        tech: ["Node.js", "Socket.io", "MongoDB", "TypeScript"],
        repo: "https://github.com/erubkhan/infinitum-whatsapp-crm-server",
        demo: "",
    },
    {
        slug: "warnify",
        title: "Warnify",
        summary:
          "A social alert web-app that helps warning users of fraudulent SMS in real-time — built with Next.js and Supabase.",
        tech: ["Next.js", "Supabase", "TailwindCSS", "TypeScript"],
        repo: "https://github.com/erubkhan/warnify", // add your repo if available
        demo: "https://warnify.vercel.app", // add link if you have one later
        image: "/project_img/warnify.png",
      },
      {
        slug: "portfolio",
        title: "My Portfolio (This Website)",
        summary:
          "My personal portfolio site built with Next.js 15, TailwindCSS, and Framer Motion — showcasing my journey as a full-stack developer.",
        tech: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
        repo: "https://github.com/erubkhan/portfolio", // or the repo for this site
        demo: "https://erubkhan-portfolio.vercel.app", // leave empty until it's deployed
        image: "/project_img/portfolio.png",
      },
  ];
  
  export default projects;