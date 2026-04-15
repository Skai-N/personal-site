import Image from "next/image";

/* ── Data ────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    role: "Incoming Software Engineer Intern",
    company: "Google",
    period: "Jan 2026 – Present",
    logo: "/logos/google.jpeg",
    bullets: [
      "Fall 2026",
      "Google Core SignalService",
    ],
  },
  {
    role: "Incoming Software Engineer Intern",
    company: "Meta",
    period: "Oct 2025 – Present",
    logo: "/logos/meta.jpeg",
    bullets: [
      "Summer 2026",
      "Network Security Analytics",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Microsoft",
    period: "May 2025 – Aug 2025",
    logo: "/logos/microsoft.jpeg",
    bullets: [
      "Developed C# app to automatically assess codebase regression risk across 8000+ pull requests per day in Azure",
      "Re-architected system to remove polling and redundant API calls, decreasing compute and response time by 33%",
      "Automated repository onboarding process with GitOps, reducing time to onboard new teams from days to minutes"
    ],
  },
  {
    role: "ASCEND Intern",
    company: "LinkedIn",
    period: "Sep 2024 – May 2025",
    logo: "/logos/linkedin.jpeg",
    bullets: [
      "Built AI-powered full-stack React web app to practice behavioral interview skills, utilizing Next.js and Supabase",
      "Established Llama 3.2 inference pipeline with Hugging Face to generate feedback on the quality of user answers",
      "Refactored deployment to prefetch and serve LLM on separate Flask server, reducing inference time by over 89%"
    ],
  },
  {
    role: "Explore Intern",
    company: "Microsoft",
    period: "May 2024 – Aug 2024",
    logo: "/logos/microsoft.jpeg",
    bullets: [
      "Deployed ASP.NET web app to simplify cloud cost management for 100+ internal Azure teams with 2 teammates",
      "Created spend dashboard using the Azure SDK, reducing the number of clicks to set and enforce budgets by 93%",
      "Refactored backend API calls and streamlined business logic, decreasing time to load website pages by over 61%"
    ],
  },
];

const PROJECTS = [
  {
    title: "[Project Name]",
    tech: "[React, TypeScript, …]",
    description: "[One-liner about what this project does and why it matters]",
    link: "#",
  },
  {
    title: "[Project Name]",
    tech: "[Python, FastAPI, …]",
    description: "[One-liner about what this project does and why it matters]",
    link: "#",
  },
  {
    title: "[Project Name]",
    tech: "[Swift, CoreML, …]",
    description: "[One-liner about what this project does and why it matters]",
    link: "#",
  },
];

const LEADERSHIP = [
  {
    role: "[Your Role]",
    org: "[Organization Name]",
    period: "Mon YYYY – Present",
    description:
      "[Describe your leadership contributions and impact in this role]",
  },
  {
    role: "[Your Role]",
    org: "[Organization Name]",
    period: "Mon YYYY – Mon YYYY",
    description:
      "[Describe your leadership contributions and impact in this role]",
  },
];

const CONTACT_LINKS = [
  { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname",
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname",
  },
];

/* ── Page ────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background font-sans">
      {/* ─── Navbar ─────────────────────────── */}
      <nav
        id="navbar"
        className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-base font-semibold tracking-tight text-foreground"
          >
            Skai Nzeuton
          </a>
          <div className="hidden gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-muted"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex flex-1 flex-col">
        {/* ─── Hero ───────────────────────────── */}
        <section
          id="hero"
          className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:py-32"
        >
          {/* ── Headshot  ── */}
          <Image
            src="/headshot.jpg"
            alt="Headshot photo"
            width={350}
            height={350}
            className="object-contain"
          />

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
              {/* [Your Tagline — e.g. Software Engineer] */}
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Skai Nzeuton
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Hey, I'm Skai!

              As a junior studying computer science and entrepreneurship at Cornell University, I'm passionate about using technology and innovation to solve complex issues!

              My interests include machine learning, high-performance computing, quantum computing, and social entrepreneurship. To further these interests, I started my own nonprofit called Food for All NYC, joined the National Society of Black Engineers, the Cornell Data Science project team, and serve as a mentor for LinkedIn's ASCEND program.

              Feel free to contact me at san82 [at] cornell [dot] edu!
            </p>
          </div>
        </section>

        {/* ─── Work Experience ────────────────── */}
        <section id="experience" className="bg-section-alt">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="section-divider" />
            <h2 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
              Work Experience
            </h2>

            <div className="flex flex-col gap-10">
              {EXPERIENCE.map((job, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">

                  {/* ── Logo  ── */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-xs text-muted">
                    {
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    }
                  </div>

                  {/* ── Content ── */}
                  <div className="flex flex-col gap-2 w-full">

                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-semibold text-foreground">
                        {job.role}{" "}
                        <span className="font-normal text-muted">
                          · {job.company}
                        </span>
                      </h3>

                      <span className="shrink-0 text-sm text-muted">
                        {job.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-border" />
                          {b}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Projects ──────────────────────── */}
        <section id="projects">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="section-divider" />
            <h2 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
              Projects
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex flex-col gap-3 rounded-xl border border-border bg-surface p-6"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {project.tech}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <span className="mt-auto pt-2 text-xs font-medium text-accent">
                    View Project →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Leadership Experience ─────────── */}
        <section id="leadership" className="bg-section-alt">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="section-divider" />
            <h2 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
              Leadership Experience
            </h2>

            <div className="flex flex-col gap-10">
              {LEADERSHIP.map((item, i) => (
                <div key={i} className="flex flex-col gap-1 sm:flex-row sm:gap-12">
                  <div className="mb-1 min-w-[180px] text-sm text-muted sm:mb-0 sm:pt-0.5">
                    {item.period}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.role}{" "}
                      <span className="font-normal text-muted">
                        · {item.org}
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ───────────────────────── */}
        <section id="contact">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="section-divider" />
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-muted">
              [Write a short message inviting people to reach out]
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              {CONTACT_LINKS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link flex items-center gap-3 rounded-lg border border-border px-5 py-3 text-sm text-muted"
                >
                  <span className="font-medium text-foreground">
                    {c.label}
                  </span>
                  <span className="text-xs">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ──────────────────────────── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <span className="text-xs text-muted">
            © {new Date().getFullYear()} Skai Nzeuton
          </span>
          <span className="text-xs text-muted">
            Built with Next.js
          </span>
        </div>
      </footer>
    </div>
  );
}