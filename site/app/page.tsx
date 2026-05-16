"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdChevronLeft,
  MdChevronRight,
  MdEmail,
  MdOpenInNew,
  MdInsertDriveFile,
} from "react-icons/md";
import { basePath } from "@/lib/config";

/* ── Data ────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  team: string;
  logo: string;
  details?: ReactNode;
  bullets: ReactNode[];
};

function Emphasis({ children }: { children: ReactNode }) {
  return <strong className="resume-emphasis">{children}</strong>;
}

function ExperienceBullets({
  bullets,
  className = "text-sm",
}: {
  bullets: ReactNode[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-1.5 leading-relaxed text-muted ${className}`}>
      {bullets.map((b, j) => (
        <li key={j} className="flex gap-2">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function ExperienceCard({
  job,
  onSelect,
}: {
  job: ExperienceItem;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="card experience-card flex min-h-64 w-full cursor-pointer flex-col items-center justify-between gap-4 rounded-lg border border-border bg-surface p-4 text-center sm:w-60"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-27 w-27 shrink-0 items-center justify-center rounded-md border border-border bg-surface p-1 text-xs text-muted">
          <Image
            src={`${basePath}${job.logo}`}
            alt={`${job.company} logo`}
            width={76}
            height={76}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {job.role}
          </h3>
          <p className="mt-2 text-sm text-muted">
            {job.period}
          </p>
          <p className="mt-2 text-sm text-muted">
            {job.team}
          </p>
        </div>
      </div>

      <span className="text-xs font-medium text-accent">
        View Details
      </span>
    </button>
  );
}

function ExperienceModal({
  job,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  total,
}: {
  job: ExperienceItem;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}) {
  const hasDetails = job.bullets.length > 0 || job.details;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/35 px-6 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-3xl overflow-auto rounded-lg border border-border bg-surface p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close experience details"
          className="contact-link absolute right-4 top-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xl leading-none text-muted"
        >
          ×
        </button>

        <button
          type="button"
          onClick={onPrevious}
          aria-label="Previous experience"
          className="contact-link absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-muted"
        >
          <MdChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next experience"
          className="contact-link absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-muted"
        >
          <MdChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div
          className={
            hasDetails
              ? "grid gap-6 px-12 md:grid-cols-[220px_1fr] md:gap-0"
              : "flex justify-center px-12"
          }
        >
          <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center md:pr-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center p-1">
              <Image
                src={`${basePath}${job.logo}`}
                alt={`${job.company} logo`}
                width={92}
                height={92}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="mb-2 text-sm font-medium text-muted">
                {job.company}
              </p>
              <h3 id="experience-modal-title" className="text-base font-semibold leading-snug text-foreground">
                {job.role}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {job.period}
              </p>
              <p className="mt-2 text-sm text-muted">
                {job.team}
              </p>
            </div>
          </div>

          {hasDetails && (
            <div className="flex items-center md:border-l md:border-border md:pl-6">
              {job.bullets.length > 0 ? (
                <ExperienceBullets bullets={job.bullets} className="text-base" />
              ) : (
                <p className="text-base leading-relaxed text-muted">
                  {job.details}
                </p>
              )}
            </div>
          )}
        </div>

        <p className="mt-5 text-center text-xs font-medium text-muted">
          {currentIndex + 1} / {total}
        </p>
      </div>
    </div>
  );
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Google",
    period: "Aug 2026 – Nov 2026",
    team: "Google Core",
    logo: "/logos/google.jpeg",
    details: "Coming soon in Fall 2026...",
    bullets: [],
  },
  {
    role: "Software Engineer Intern",
    company: "Meta",
    period: "May 2026 – Aug 2026",
    team: "Suppliers",
    logo: "/logos/meta.jpeg",
    details: "Coming soon in Summer 2026...",
    bullets: [],
  },
  {
    role: "Software Engineer Intern",
    company: "Microsoft",
    period: "May 2025 – Aug 2025",
    team: "Azure Storage",
    logo: "/logos/microsoft.jpeg",
    bullets: [
      <>
        Developed <Emphasis>C#</Emphasis> app to automatically assess codebase regression risk across{" "}
        <Emphasis>8000+ pull requests per day</Emphasis> in Azure
      </>,
      <>
        Re-architected system to remove polling and redundant API calls, <Emphasis>decreasing compute</Emphasis>{" "}
        and <Emphasis>response time</Emphasis> by <Emphasis>33%</Emphasis>
      </>,
      <>
        Automated repository onboarding process with <Emphasis>GitOps</Emphasis>,{" "}
        <Emphasis>reducing time</Emphasis> to onboard new teams from{" "}
        <Emphasis>days</Emphasis> to <Emphasis>minutes</Emphasis>
      </>,
    ],
  },
  {
    role: "ASCEND Intern",
    company: "LinkedIn",
    period: "Sep 2024 – May 2025",
    team: "ASCEND",
    logo: "/logos/linkedin.jpeg",
    bullets: [
      <>
        Built AI-powered full-stack <Emphasis>React</Emphasis> web app to practice behavioral interview skills, utilizing{" "}
        <Emphasis>Next.js</Emphasis> and <Emphasis>Supabase</Emphasis>
      </>,
      <>
        Established <Emphasis>Llama 3.2</Emphasis> inference pipeline with{" "}
        <Emphasis>Hugging Face</Emphasis> to generate feedback on the quality of user answers
      </>,
      <>
        Refactored deployment to prefetch and serve LLM on separate <Emphasis>Flask</Emphasis> server,{" "}
        <Emphasis>reducing inference time</Emphasis> by over <Emphasis>89%</Emphasis>
      </>,
    ],
  },
  {
    role: "Explore Intern",
    company: "Microsoft",
    period: "May 2024 – Aug 2024",
    team: "Azure Storage",
    logo: "/logos/microsoft.jpeg",
    bullets: [
      <>
        Deployed <Emphasis>ASP.NET</Emphasis> web app to simplify cloud cost management for{" "}
        <Emphasis>100+ internal Azure teams</Emphasis> with 2 teammates
      </>,
      <>
        Created spend dashboard using the <Emphasis>Azure SDK</Emphasis>,{" "}
        <Emphasis>reducing</Emphasis> the number of <Emphasis>clicks</Emphasis>{" "}
        to set and enforce budgets by <Emphasis>93%</Emphasis>
      </>,
      <>
        Refactored backend API calls and streamlined business logic, <Emphasis>decreasing time</Emphasis>{" "}
        to load website pages by over <Emphasis>61%</Emphasis>
      </>,
    ],
  },
];

const PROJECTS = [
  {
    title: "GitDistributed",
    tech: "C++, TCP Networking, Distributed Systems",
    description: "C++ implementation of essential Git commands, featuring a distributed remote server replicated via the Primary-Backup model.",
    link: "https://youtu.be/qhKPWgMNqMY",
  },
  {
    title: "Quantization on Edge",
    tech: "Python, ONNX, Machine Learning",
    description: "Python ONNX implementation of symmetric and asymmetric post-training static and dynamic quantization techniques.",
    link: "https://docs.google.com/presentation/d/1gnHAot5ASr7be5nIqDEKw6tbAFfQTv1nIGAL4Oloe24/edit?usp=sharing",
  },
];

type LeadershipItem = {
  role: string;
  org: string;
  href?: string;
  period: string;
  description: ReactNode;
  links?: LeadershipLink[];
};

type LeadershipLink = {
  title: string;
  href: string;
  source?: string;
  kind?: "Article" | "Video" | "Feature" | "Interview";
  image?: string;
};

function LeadershipLinkCarousel({ links }: { links: LeadershipLink[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLink = links[currentIndex];
  const hasMultipleLinks = links.length > 1;
  const visibleLinks = hasMultipleLinks
    ? [-1, 0, 1].map((offset) => ({
        link: links[(currentIndex + offset + links.length) % links.length],
        offset,
      }))
    : [{ link: currentLink, offset: 0 }];

  const showPreviousLink = () => {
    setCurrentIndex((current) => (current - 1 + links.length) % links.length);
  };

  const showNextLink = () => {
    setCurrentIndex((current) => (current + 1) % links.length);
  };

  if (!currentLink) {
    return null;
  }

  return (
    <div className="mt-4 w-full">
      <div className="flex items-center gap-3">
        {hasMultipleLinks && (
          <button
            type="button"
            onClick={showPreviousLink}
            aria-label="Previous leadership link"
            className="contact-link flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted"
          >
            <MdChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <div className="grid min-w-0 flex-1 gap-4 sm:grid-cols-3">
          {visibleLinks.map(({ link, offset }) => (
            <a
              key={`${link.href}-${offset}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-link group flex min-w-0 flex-col gap-3 rounded-lg border border-border bg-surface p-3 ${
                offset === 0 ? "" : "hidden sm:flex"
              }`}
            >
              {link.image && (
                <Image
                  src={`${basePath}${link.image}`}
                  alt=""
                  width={320}
                  height={180}
                  className="aspect-video w-full rounded-md object-cover"
                />
              )}

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  {link.kind && (
                    <p className="mb-1 text-xs font-medium text-accent">
                      {link.kind}
                    </p>
                  )}
                  <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground underline decoration-border underline-offset-4 group-hover:decoration-foreground">
                    {link.title}
                  </h4>
                  {link.source && (
                    <p className="mt-2 truncate text-xs text-muted">
                      {link.source}
                    </p>
                  )}
                </div>
                <MdOpenInNew className="mt-0.5 h-4 w-4 shrink-0 text-muted group-hover:text-foreground" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        {hasMultipleLinks && (
          <button
            type="button"
            onClick={showNextLink}
            aria-label="Next leadership link"
            className="contact-link flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted"
          >
            <MdChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {hasMultipleLinks && (
        <div className="mt-3 text-center text-xs text-muted">
          {currentIndex + 1} / {links.length}
        </div>
      )}
    </div>
  );
}

const LEADERSHIP: LeadershipItem[] = [
  {
    role: "Vice President",
    org: "Cornell Data Science Project Team",
    href: "https://cornelldata.science",
    period: "May 2025 – May 2026",
    description: (
      <>
        Led Cornell&apos;s largest student-run data science organization, spanning <Emphasis>14 projects</Emphasis> across{" "}
        <Emphasis>60+ club members</Emphasis> and <Emphasis>2 corporate sponsorships</Emphasis>
      </>
    ),
  },
  {
    role: "Academic Excellence Chair",
    org: "National Society of Black Engineers",
    href: "https://nsbe.org",
    period: "May 2024 – May 2025",
    description: (
      <>
        Organized <Emphasis>5-member committee</Emphasis> to create workshops, improving course performance and time usage for{" "}
        <Emphasis>400+ students</Emphasis>
      </>
    ),
  },
  {
    role: "Founder",
    org: "Food for All NYC",
    href: "https://foodforallnyc.org",
    period: "Jun 2022 – May 2024",
    description: (
      <>
        Orchestrated team of <Emphasis>10</Emphasis> and managed <Emphasis>2 corporate partnerships</Emphasis>, donating{" "}
        <Emphasis>~20,000 pounds of food</Emphasis> across <Emphasis>2,000+ schools</Emphasis>
      </>
    ),
    links: [
      {
        title: "Meet Skai and Will",
        href: "https://www.grassrootsgrocery.org/blog/meet-skai-and-will-food-rescue-movement-makers",
        source: "Grassroots Grocery",
        kind: "Article",
        image: "/thumbnails/grassroots_thumbnail.jpeg",
      },
      {
        title: "High School Student Collects Excess Cafeteria Food to Fight Hunger",
        href: "https://www.thedrewbarrymoreshow.com/videos/drew-and-brandon-marshall-meet-a-high-school-student-who-collects-excess-cafeteria-food-to",
        source: "The Drew Barrymore Show",
        kind: "Feature",
        image: "/thumbnails/drew_thumbnail.jpeg",
      },
      {
        title: "Students Team Up With Nonprofit to Help Fight Hunger",
        href: "https://www.youtube.com/watch?v=rQukdK8V6ng",
        source: "CBS New York",
        kind: "Video",
        image: "/thumbnails/cbs_thumbnail.jpeg",
      },
      {
        title: "Stuyvesant Teens Fight Hunger as Grocery Prices Rise",
        href: "https://www.nbcnewyork.com/news/local/stuyvesant-teens-fight-hunger-as-grocery-prices-rise/4062911/",
        source: "NBC New York",
        kind: "Article",
        image: "/thumbnails/nbc_thumbnail.jpeg",
      },
      {
        title: "The Stuyvesant Food Security Club",
        href: "https://simple-acts-big-impact.castos.com/episodes/the-stuyvesant-food-security-club",
        source: "Simple Acts Big Impact",
        kind: "Interview",
        image: "/thumbnails/simpleacts_thumbnail.jpeg",
      },
    ],
  },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "san82@cornell.edu",
    href: "mailto:san82@cornell.edu",
    icon: MdEmail,
  },
  {
    label: "LinkedIn",
    value: "in/skainzeuton",
    href: "https://linkedin.com/in/skainzeuton",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/skai-n",
    href: "https://github.com/skai-n",
    icon: FaGithub,
  },
] as const;

const RESUME_FILE = "Skai Nzeuton Resume.pdf";
const contactIconClass = "h-5 w-5 shrink-0 text-foreground";
const heroContactIconClass = "h-4 w-4 text-foreground";

/* ── Page ────────────────────────────────────── */

export default function Home() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] =
    useState<number | null>(null);

  const selectedExperience =
    selectedExperienceIndex === null ? null : EXPERIENCE[selectedExperienceIndex];

  const showPreviousExperience = () => {
    setSelectedExperienceIndex((current) =>
      current === null ? current : (current - 1 + EXPERIENCE.length) % EXPERIENCE.length
    );
  };

  const showNextExperience = () => {
    setSelectedExperienceIndex((current) =>
      current === null ? current : (current + 1) % EXPERIENCE.length
    );
  };

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
          <div className="flex flex-col items-center gap-5">
            <Image
              src={`${basePath}/headshot.jpg`}
              alt="Headshot photo"
              width={400}
              height={350}
              className="object-contain"
              style={{ height: "auto" }}
            />

            <div className="flex items-center gap-3">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  title={c.label}
                  className="contact-link flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
                >
                  <c.icon className={heroContactIconClass} aria-hidden="true" />
                </a>
              ))}

              <a
                href={`${basePath}/${encodeURIComponent(RESUME_FILE)}`}
                download={RESUME_FILE}
                aria-label="Resume"
                title="Resume"
                className="contact-link flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
              >
                <MdInsertDriveFile className={heroContactIconClass} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
              {/* [Software Engineer] */}
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Skai Nzeuton
            </h1>
            <div className="max-w-md text-base leading-relaxed text-muted space-y-4">
              <p>Hey, I&apos;m <strong>Skai</strong>! 🤙 </p>

              <p>
                As a junior studying <strong>computer science</strong> and <strong>entrepreneurship</strong> at <strong>Cornell
                University</strong>, I&apos;m passionate about using technology and innovation to <strong>solve
                complex issues</strong>!
              </p>

              <p>
                My interests include <strong>distributed systems</strong>, 
                <strong> machine learning</strong>, and <strong>entrepreneurship</strong>.
              </p>

              <p>
                To further these interests, I <strong>founded</strong> my own nonprofit called <strong>Food for All NYC</strong>, 
                joined the <strong>Cornell Data Science</strong> project team, the <strong>National Society of Black Engineers</strong>, 
                and serve as a mentor for <strong>LinkedIn&apos;s ASCEND</strong> program.
              </p>

              <p>
                Feel free to <strong>contact me</strong> at <strong>san82 [at] cornell [dot] edu</strong>!
              </p>
            </div>
          </div>
        </section>

        {/* ─── Work Experience ────────────────── */}
        <section id="experience" className="bg-section-alt">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="section-divider" />
            <h2 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
              Work Experience
            </h2>

            <div className="flex flex-col gap-4">
              <div className="mx-auto flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                {EXPERIENCE.slice(0, 2).map((job, index) => (
                  <ExperienceCard
                    key={`${job.company}-${job.period}`}
                    job={job}
                    onSelect={() => setSelectedExperienceIndex(index)}
                  />
                ))}
              </div>

              <div className="mx-auto flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                {EXPERIENCE.slice(2).map((job, index) => (
                  <ExperienceCard
                    key={`${job.company}-${job.period}`}
                    job={job}
                    onSelect={() => setSelectedExperienceIndex(index + 2)}
                  />
                ))}
              </div>
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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-12">
                    <div className="mb-1 min-w-[180px] text-sm text-muted sm:mb-0 sm:pt-0.5">
                      {item.period}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.role}{" "}
                        {item.href ? (
                          <span className="font-normal text-muted">
                            ·{" "}
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="contact-link inline-flex items-center gap-1 underline decoration-border underline-offset-4 hover:decoration-foreground"
                            >
                              <span>{item.org}</span>
                              <MdOpenInNew className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          </span>
                        ) : (
                          <span className="font-normal text-muted">
                            · {item.org}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {item.links && item.links.length > 0 && (
                    <LeadershipLinkCarousel links={item.links} />
                  )}
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
              Feel free to <Emphasis>contact me</Emphasis> at <Emphasis>san82 [at] cornell [dot] edu</Emphasis>!
            </p>

            <div className="grid gap-4 lg:grid-cols-4 lg:gap-3">
              {CONTACT_LINKS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  className="contact-link flex min-w-0 items-center gap-3 overflow-hidden rounded-lg border border-border px-5 py-4 text-sm text-muted"
                >
                  <c.icon className={contactIconClass} aria-hidden="true" />
                  <span className="min-w-0 truncate text-sm">{c.value}</span>
                </a>
              ))}

              <a
                href={`${basePath}/${encodeURIComponent(RESUME_FILE)}`}
                download={RESUME_FILE}
                aria-label="Resume"
                className="contact-link flex min-w-0 items-center gap-3 overflow-hidden rounded-lg border border-border px-5 py-4 text-sm text-muted"
              >
                <MdInsertDriveFile className={contactIconClass} aria-hidden="true" />
                <span className="min-w-0 truncate text-sm">Resume</span>
              </a>
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

      {selectedExperience && (
        <ExperienceModal
          job={selectedExperience}
          onClose={() => setSelectedExperienceIndex(null)}
          onPrevious={showPreviousExperience}
          onNext={showNextExperience}
          currentIndex={selectedExperienceIndex ?? 0}
          total={EXPERIENCE.length}
        />
      )}
    </div>
  );
}
