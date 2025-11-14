// Next.js 15 + Tailwind + Framer Motion portfolio (deployable version)

// File: app/page.tsx

"use client";

import experience from "@/data/experience";
import projects from "@/data/projects";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, Flower2, Github, Link as LinkIcon, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const techStack = ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "MongoDB", "Node.js"];

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen text-white bg-gradient-to-b from-[#0a0b10] to-[#0c0d13]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
        <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between py-5">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors">
            Erub Khan
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>
          <div className="flex items-center gap-3">
            <IconButton href="https://github.com/erubkhan" label="GitHub"><Github className="w-5 h-5" /></IconButton>
            <IconButton href="https://www.linkedin.com/in/erubkhan/" label="LinkedIn"><Linkedin className="w-5 h-5" /></IconButton>
            <IconButton href="mailto:erubkhan@hotmail.com" label="Email">
              <Mail className="w-5 h-5" />
            </IconButton>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid items-center gap-16 md:grid-cols-2">
          <motion.div initial={fade.hidden} animate={fade.show}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
              Full‑Stack Developer • Next.js • Node • Supabase
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Hi, I'm Erub 🌸 <br /> Welcome to my Portfolio!
            </h1>
            <p className="mt-5 text-gray-400 md:text-lg max-w-lg">
              I'm a software engineer from Toronto, Canada. I build products that are scalable and create real-world impact, bridging creativity and tech into a new Techno Era.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-400 transition px-6 py-3 font-medium text-black">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:erubkhan@hotmail.com" className="inline-flex items-center gap-2 rounded-full border border-gray-600 hover:border-indigo-400 px-6 py-3 text-white transition">
                Say Hello! <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
              <img
                src="/myphoto.jpeg"
                alt="Erub Khan portrait or workspace"
                className="object-cover w-full h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#0b0d12]">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-500">About Me ~</h2>
          </div>
          <div className="md:col-span-2">
            <div className="bg-[#111319] rounded-3xl border border-gray-800 p-8">
              <p className="text-gray-300 leading-relaxed">
                Currently I like to play with Full-Stack projects, using AI-powered applications to innovate modern experience.
                I'm a Computer Science graduate from the University of Toronto.
              </p>
              <p className="mt-2 text-indigo-500">Here are some technologies I have been working with:</p>
              <div className="flex flex-wrap gap-24 mt-4 text-gray-300 text-sm">
                <ul className="space-y-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <Flower2 className="w-4 h-4 text-indigo-500" />
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {["Java", "Python", "MongoDB", "Node.js"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <Flower2 className="w-4 h-4 text-indigo-500" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Outside of work, I like to explore my artistic skills in e-commerce and business development, poetry and videography through my Tiktoks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-indigo-500">Projects ~</h2>
            <p className="mt-2 text-gray-400">A selection of my work.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111319] border border-gray-800 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Title + Links */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-gray-400">{p.summary}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 items-center">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 text-sm font-medium rounded-full border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 transition"
                      >
                        Live
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-indigo-400 transition"
                      >
                        <LinkIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs border border-gray-700 rounded-full px-3 py-1 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-[#0b0d12]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-indigo-500">Experience ~</h2>
          <p className="mt-2 text-gray-400">Roles, internships, and notable work.</p>
          <div className="mt-10 space-y-6">
            {experience.map((e) => (
              <div key={e.company} className="bg-[#111319] border border-gray-800 rounded-3xl p-8">
                <h3 className="text-lg font-semibold text-white">{e.role} · {e.company}</h3>
                <p className="text-gray-500 text-sm">{e.location} • {e.period}</p>
                <ul className="mt-4 text-gray-300 list-disc pl-6 space-y-2">
                  {e.highlights.map((h: string, i: number) => <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: h }}
                  />)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 border-t border-gray-800 bg-[#0a0b10] text-gray-400 text-sm">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>Built and designed by Erub Khan. All rights reserved ©.</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/erubkhan" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/erubkhan/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">LinkedIn</a>
            <a href="mailto:erubkhan@hotmail.com" className="hover:text-indigo-400 transition">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function IconButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      className="p-2 rounded-xl border border-gray-700 hover:border-indigo-400 transition"
    >
      {children}
    </a>
  );
}
