
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: "BAR ORDERS APP",
      stack: "Next.js 14, TS, Firebase",
      desc: "App for managing bar inventory and orders.",
      link: "https://lebenhq.vercel.app/",
    },
    {
      title: "GEOGESTION",
      stack: "Next.js, Tailwind CSS",
      desc: "SaaS for managing surveying study data.",
      link: "https://geogestion.online",
    },
    {
      title: "CESC LANDING",
      stack: "Next.js 15+, GSAP, Supabase",
      desc: "High-performance landing page for Centro de Ex Combatientes de Malvinas.",
      link: "https://cesc.vercel.app/",
    },
  ];

  const experience = [
    { role: "ENCARGADO", company: "LEBEN BREWING CO.", period: "2024-2026" },
    { role: "CADISTA", company: "AM AGRIMENSURA", period: "2022-2024" },
    { role: "LOGISTICS", company: "PEPSICO", period: "2018-2019" },
    { role: "CADISTA", company: "JORGE BENITO MARTIN & ASOC.", period: "2014-2017" },
  ];

  const skills = ["React", "Next.js", "TypeScript", "SQL", "HTML/CSS", "Git", "Adobe Suite", "AutoCAD", "Prompting", "AI Dev"];

  return (
    <main className="min-h-screen border-x-4 border-white container mx-auto bg-background text-foreground flex flex-col">
      {/* HEADER / MARQUEE */}
      <header className="border-b-4 border-white overflow-hidden whitespace-nowrap bg-accent text-white py-2">
        <div className="inline-block animate-marquee font-bold text-xl">
          AVAILABLE FOR WORK — FULL STACK DEVELOPER — ARGENTINA — AVAILABLE FOR WORK— FULL STACK DEVELOPER — ARGENTINA — AVAILABLE FOR WORK— FULL STACK DEVELOPER — ARGENTINA — 
        </div>
      </header>

      {/* HERO */}
      <section className="p-8 md:p-12 border-b-4 border-white">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
          Santiago<br />Risso
        </h1>
        <p className="text-xl md:text-2xl font-bold font-mono">
          [ FULL STACK DEVELOPER ]
        </p>
        <div className="mt-8 flex gap-4 text-sm md:text-base font-bold">
          <a href="mailto:santiagorisso5@gmail.com" className="hover:bg-accent hover:text-white px-2 py-1 border-2 border-white transition-colors">
            EMAIL
          </a>
          <a href="https://github.com/santiagorisso" target="_blank" className="hover:bg-accent hover:text-white px-2 py-1 border-2 border-white transition-colors">
            GITHUB
          </a>
          <a href="https://linkedin.com/in/santiago-risso1" target="_blank" className="hover:bg-accent hover:text-white px-2 py-1 border-2 border-white transition-colors">
            LINKEDIN
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="grid md:grid-cols-2 border-b-4 border-white">
        <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-white flex items-center justify-center bg-white text-background">
          <h2 className="text-4xl font-black rotate-0 md:-rotate-90 uppercase whitespace-nowrap">Selected<br/>Projects</h2>
        </div>
        <div className="grid grid-rows-3">
          {projects.map((p, i) => (
            <Link 
              key={i} 
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 border-white hover:bg-accent hover:text-white transition-colors group cursor-pointer ${i !== projects.length - 1 ? 'border-b-4' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold uppercase group-hover:underline decoration-4 underline-offset-4">{p.title}</h3>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-mono text-xs mb-2 opacity-80">{p.stack}</p>
              <p className="text-sm font-bold">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & SKILLS */}
      <section className="grid md:grid-cols-2 border-b-4 border-white flex-grow">
        <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-white">
          <h2 className="text-3xl font-black uppercase mb-8 decoration-4 underline underline-offset-8 decoration-accent">Experience</h2>
          <ul className="space-y-6">
            {experience.map((e, i) => (
              <li key={i} className="flex justify-between items-baseline border-b-2 border-white/20 pb-2">
                <div>
                  <span className="font-bold text-lg block">{e.role}</span>
                  <span className="text-sm opacity-80">{e.company}</span>
                </div>
                <span className="font-mono text-sm">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8">
           <h2 className="text-3xl font-black uppercase mb-8 decoration-4 underline underline-offset-8 decoration-accent">Skills</h2>
           <div className="flex flex-wrap gap-3">
             {skills.map((s) => (
               <span key={s} className="border-2 border-white px-3 py-1 font-bold text-sm hover:bg-white hover:text-background transition-colors cursor-default">
                 {s}
               </span>
             ))}
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-4 text-center text-sm font-mono uppercase bg-accent text-white">
        © 2026 Santiago Risso. Built with Next.js 15 & Tailwind v4.
      </footer>
    </main>
  );
}
