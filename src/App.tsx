import "./styles.css";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Download, Mail, Github, Linkedin, Phone, MapPin, ArrowRight,
  Brain, BarChart3, Eye, LayoutDashboard, Code2, Bot, ArrowUp,
  GraduationCap, Briefcase, Award, Trophy, Send, ExternalLink,
  Database, Sparkles, Cpu, LineChart,
} from "lucide-react";

import portrait from "@/assets/nemi-portrait.jpg";
import resumeAsset from "@/assets/resume.asset.json";

import { Particles } from "@/components/Particles";
import { Counter } from "@/components/Counter";
import { Nav } from "@/components/Nav";
import { TypingTitle } from "@/components/TypingTitle";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

const floatingIcons = [
  { Icon: Code2, label: "Python", x: "-10%", y: "10%", delay: 0 },
  { Icon: Brain, label: "ML", x: "100%", y: "5%", delay: 0.6 },
  { Icon: Database, label: "SQL", x: "-15%", y: "65%", delay: 1.2 },
  { Icon: BarChart3, label: "Power BI", x: "105%", y: "55%", delay: 0.3 },
  { Icon: Bot, label: "AI", x: "-5%", y: "95%", delay: 0.9 },
  { Icon: Eye, label: "Vision", x: "100%", y: "95%", delay: 1.5 },
];

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        aria-hidden
        className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/25 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full relative">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 mb-7"
          >
            <span className="flex items-center gap-1.5 bg-primary/10 border border-primary/30 rounded-full px-2 py-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary">Open</span>
            </span>
            <span className="text-xs font-mono text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-7 tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="block text-muted-foreground text-2xl md:text-3xl font-display font-normal mb-3"
            >
              Hello, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="block text-gradient"
            >
              Nemi Chand
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="block text-foreground"
            >
              Sharma<span className="text-primary">.</span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-3 text-xl md:text-2xl font-display font-medium mb-6 h-10"
          >
            <span className="h-px w-8 bg-gradient-primary" />
            <TypingTitle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            I build ML models, write data pipelines, and develop computer vision applications.
            I work with <span className="text-foreground font-medium">Python, SQL, Power BI, and Streamlit</span> to
            solve real-world problems through data-driven and AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-cyan hover:scale-[1.03] transition-all overflow-hidden">
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">View Projects</span>
              <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              type="button"
              onClick={async () => {
                try {
                  const res = await fetch(resumeAsset.url);
                  const blob = await res.blob();
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "Nemi-Chand-Sharma-Resume.pdf";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  URL.revokeObjectURL(url);
                } catch {
                  window.open(resumeAsset.url, "_blank");
                }
              }}
              className="group inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3.5 text-sm font-medium"
            >
              <Download size={16} className="text-primary group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3.5 text-sm font-medium">
              <Mail size={16} className="text-primary" />
              Contact Me
            </a>
          </motion.div>

          {/* Tech stack ticker */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">Tech Stack</span>
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="hover:text-primary transition-colors">Python</span>
              <span className="opacity-30">/</span>
              <span className="hover:text-primary transition-colors">SQL</span>
              <span className="opacity-30">/</span>
              <span className="hover:text-primary transition-colors">OpenCV</span>
              <span className="opacity-30">/</span>
              <span className="hover:text-primary transition-colors">Power BI</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Portrait */}
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative flex justify-center">
          <div className="relative w-[300px] h-[360px] md:w-[420px] md:h-[500px]">
            {/* Rotating ring */}
            <motion.div
              aria-hidden
              className="absolute -inset-6 rounded-full border border-dashed border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary glow-cyan" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-secondary" />
            </motion.div>

            {/* Glow halo */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-primary opacity-50 blur-3xl animate-pulse-glow" />

            {/* Gradient border */}
            <div className="absolute -inset-[2px] rounded-[2.6rem] bg-gradient-primary" />

            {/* Image card */}
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] glass">
              <img src={portrait} alt="Nemi Chand Sharma" width={1024} height={1024} className="h-full w-full object-cover" />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
              {/* Name plate */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate">Nemi Chand Sharma</p>
                  <p className="text-[10px] text-muted-foreground font-mono truncate">ML Engineer · Data Analyst</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, type: "spring" }}
              className="absolute -top-4 -right-4 md:-right-8 glass rounded-2xl p-3 text-center min-w-[80px] glow-violet"
            >
              <div className="text-2xl font-display font-bold text-gradient">3+</div>
              <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">Projects</div>
            </motion.div>

            {/* Floating tech icons */}
            {floatingIcons.map(({ Icon, label, x, y, delay }) => (
              <motion.div
                key={label}
                className="absolute glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl border-primary/20"
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
              >
                <Icon size={14} className="text-primary" />
                <span className="text-xs font-mono whitespace-nowrap">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>
    </section>
  );
}

const stats = [
  { v: 3, suf: "+", label: "Major Projects" },
  { v: 1, suf: "", label: "Internship" },
  { v: 10, suf: "+", label: "Technical Skills" },
  { v: 3, suf: "+", label: "Certifications" },
];

function Stats() {
  return (
    <section className="px-6 -mt-6 relative z-10">
      <div className="mx-auto max-w-7xl glass rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-1">
              <Counter to={s.v} suffix={s.suf} />
            </div>
            <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const focusAreas = [
  "Machine Learning", "Data Analytics", "Computer Vision",
  "Generative AI", "Dashboard Development", "Data Visualization",
];

function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>Building <span className="text-gradient">intelligence</span> from data</>}>
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3 glass rounded-3xl p-8">
          <p className="text-muted-foreground leading-relaxed mb-5">
            Nemi Chand Sharma is a Computer Science Engineering student passionate about Data Analytics,
            Artificial Intelligence, Machine Learning, and Computer Vision.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            He enjoys transforming raw data into meaningful insights, building intelligent applications,
            and creating solutions that solve practical problems.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Focus Areas</p>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="rounded-full glass px-4 py-1.5 text-sm">{f}</span>
            ))}
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 glass glass-hover rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-primary mb-5">
            <GraduationCap className="text-primary-foreground" size={22} />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Education</p>
          <h3 className="text-xl font-bold mb-1">B.Tech, Computer Science</h3>
          <p className="text-muted-foreground text-sm mb-4">Swami Keshvanand Institute of Technology (SKIT)<br />Jaipur, Rajasthan</p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">Expected Graduation</span>
            <span className="font-mono text-sm text-primary">May 2027</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

const skillGroups = [
  { title: "Programming Languages", items: ["Python", "SQL", "C", "C++"] },
  { title: "Machine Learning & AI", items: ["Machine Learning", "Predictive Modeling", "Random Forest", "Computer Vision", "Pose Estimation", "Feature Engineering", "Cross Validation", "Generative AI"] },
  { title: "Data Analytics", items: ["ETL", "Data Cleaning", "Data Visualization", "Dashboard Development"] },
  { title: "Tools & Frameworks", items: ["Pandas", "NumPy", "OpenCV", "MediaPipe", "Streamlit"] },
  { title: "Databases", items: ["MySQL", "SQL Server"] },
  { title: "Version Control & Cloud", items: ["Git", "GitHub", "Streamlit Cloud"] },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>Technical <span className="text-gradient">arsenal</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => (
          <motion.div key={g.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}
            className="glass glass-hover rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={16} className="text-primary" />
              <h3 className="font-display font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-lg bg-muted px-3 py-1 text-xs font-mono text-foreground/80 border border-border hover:border-primary/50 hover:text-primary transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Professional <span className="text-gradient">journey</span></>}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-10 relative">
          <div className="absolute top-8 left-8 h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
            <Briefcase className="text-primary-foreground" size={20} />
          </div>
          <div className="ml-20">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-bold">Data Analytics Intern</h3>
              <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-0.5 text-xs font-mono text-primary">Coplur</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono mb-6">May 2025 – July 2025</p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Developed SQL queries for data extraction and reporting",
                "Built ETL pipelines for automated data processing",
                "Cleaned and transformed business data for downstream analysis",
                "Developed reporting interfaces and dashboards",
                "Improved accessibility and usability of data insights",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const services = [
  { Icon: Brain, title: "Machine Learning Solutions", desc: "Design and develop ML models for prediction, classification, and intelligent decision-making systems." },
  { Icon: LineChart, title: "Data Analytics & Insights", desc: "Analyze business data and generate actionable insights through statistical analysis and visualization." },
  { Icon: Eye, title: "Computer Vision Applications", desc: "Build AI-powered computer vision systems using OpenCV, MediaPipe, and deep learning techniques." },
  { Icon: LayoutDashboard, title: "Power BI Dashboards", desc: "Create interactive dashboards and reports for business intelligence and performance tracking." },
  { Icon: Sparkles, title: "Streamlit Applications", desc: "Develop interactive AI and analytics web applications using Streamlit." },
  { Icon: Bot, title: "Python Automation", desc: "Automate workflows, data processing pipelines, and repetitive business tasks." },
];

function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>What I <span className="text-gradient">deliver</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ Icon, title, desc }, i) => (
          <motion.div key={title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}
            className="glass glass-hover rounded-3xl p-7 group">
            <div className="h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="text-primary-foreground" size={20} />
            </div>
            <h3 className="text-lg font-display font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const projects = [
  {
    title: "AI Real-Time Gym Trainer",
    desc: "A real-time fitness coaching application with live exercise tracking, rep counting, voice coaching, and workout analytics across multiple exercises.",
    tech: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
    Icon: Eye,
    github: "https://github.com/Nemi319-svg/AI-Real-time-GYM-Trainer",
  },
  {
    title: "AI Attendance Management System",
    desc: "Facial-recognition based attendance system with login authentication, live monitoring, and auto-generated reports.",
    tech: ["Python", "Computer Vision", "OpenCV", "Face Recognition"],
    Icon: Bot,
    github: "https://github.com/Nemi319-svg/Nemi-ai-attendance-project-app",
  },
  {
    title: "Data Analytics Dashboard",
    desc: "Interactive business analytics dashboard for sales analysis, customer behavior, and trend identification on large datasets.",
    tech: ["Power BI", "SQL", "Data Analytics"],
    Icon: BarChart3,
    github: null,
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title={<>Featured <span className="text-gradient">work</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
            className="glass glass-hover rounded-3xl overflow-hidden group">
            <div className="relative h-44 bg-gradient-primary flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <p.Icon size={64} className="text-primary-foreground/80 relative z-10 group-hover:scale-110 transition-transform" />
              <div className="absolute top-4 right-4 font-mono text-xs text-primary-foreground/80">0{i + 1}</div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-display font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-mono text-primary">{t}</span>
                ))}
              </div>
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors">
                  View on GitHub <ExternalLink size={14} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  Private project
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const certs = [
  { title: "GenAI Powered Data Analytics", org: "Tata Learning Platform" },
  { title: "Python for Data Science", org: "IBM" },
  { title: "Introduction to Data Science", org: "Cisco" },
];

const achievements = [
  { Icon: Trophy, title: "Top 10 Finalist", sub: "AMD Slingshot 2026 — National Tech Competition" },
  { Icon: Award, title: "Top 3 Position", sub: "Arya College Hackathon" },
  { Icon: Sparkles, title: "National Participant", sub: "The Big Code 2026" },
];

function CertsAchievements() {
  return (
    <Section id="achievements" eyebrow="Credentials" title={<>Certifications & <span className="text-gradient">achievements</span></>}>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display font-bold mb-5 text-lg">Certifications</h3>
          <div className="space-y-3">
            {certs.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Award className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-xs text-muted-foreground font-mono">{c.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold mb-5 text-lg">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div key={a.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shrink-0">
                  <a.Icon className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        "service_bn6k81x",
        "template_7aqaqef",
        formRef.current,
        { publicKey: "Jz2uWXca2XhGKD0g1" },
      );
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Get In Touch" title={<>Let's build <span className="text-gradient">something</span></>}>
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 glass rounded-3xl p-8 space-y-5">
          {[
            { Icon: MapPin, label: "Location", val: "Jaipur, Rajasthan, India" },
            { Icon: Phone, label: "Phone", val: "+91 92576 90770", href: "tel:+919257690770" },
            { Icon: Mail, label: "Email", val: "nemisharma9257@gmail.com", href: "mailto:nemisharma9257@gmail.com" },
            { Icon: Linkedin, label: "LinkedIn", val: "nemi-chand-sharma", href: "https://linkedin.com/in/nemi-chand-sharma-008006287" },
            { Icon: Github, label: "GitHub", val: "Nemi319-svg", href: "https://github.com/Nemi319-svg" },
          ].map(({ Icon, label, val, href }) => {
            const Wrap: React.ElementType = href ? "a" : "div";
            return (
              <Wrap key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center gap-4 group">
                <div className="h-11 w-11 rounded-xl glass flex items-center justify-center group-hover:bg-gradient-primary transition-all shrink-0">
                  <Icon size={18} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="text-sm truncate">{val}</p>
                </div>
              </Wrap>
            );
          })}
        </motion.div>

        <motion.form ref={formRef} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-3xl p-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="from_name" placeholder="Your Name" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
            <input required type="email" name="from_email" placeholder="Your Email" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
          </div>
          <input required name="subject" placeholder="Subject" className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" />
          <textarea required name="message" rows={5} placeholder="Your message..." className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" />
          <div className="flex flex-wrap gap-3">
            <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-cyan hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100">
              {sending ? "Sending..." : <>Send Message <Send size={14} /></>}
            </button>
            <a href="mailto:nemisharma9257@gmail.com" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-medium">
              Schedule Discussion
            </a>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="font-display text-lg font-bold">
            <span className="text-gradient">Nemi</span>.dev
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Designed and developed by Nemi Chand Sharma · Data Analyst & ML Engineer
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Nemi319-svg" target="_blank" rel="noreferrer" aria-label="GitHub" className="h-10 w-10 glass rounded-xl flex items-center justify-center hover:text-primary transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/nemi-chand-sharma-008006287" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 glass rounded-xl flex items-center justify-center hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:nemisharma9257@gmail.com" aria-label="Email" className="h-10 w-10 glass rounded-xl flex items-center justify-center hover:text-primary transition-colors">
            <Mail size={16} />
          </a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
      <p className="text-center text-[11px] text-muted-foreground mt-6 font-mono">
        © {new Date().getFullYear()} Nemi Chand Sharma. All rights reserved.
      </p>
    </footer>
  );
}
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <CertsAchievements />
      <Contact />
      <Footer />
    </div>
  );
}
