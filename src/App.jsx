import { useState } from "react";
import "./App.css";

const ASSET_BASE = "/Portfolio/";

export default function App() {
  const [activeStop, setActiveStop] = useState(0);

  const profile = {
    name: "Parnicka Agarrwal",
    title: "HR Professional · People Operations · CHRP Candidate",
    subtitle:
      "Empathetic people leader blending modern HR strategy, compliance, and talent development to build stronger workplaces.",
    email: "parnickaagarrwal08@gmail.com",
    phone: "+1 519-981-7058",
    linkedin: "linkedin.com/in/parnickaagarrwal",
    emailHref: "mailto:parnickaagarrwal08@gmail.com",
    phoneHref: "tel:+15199817058",
    linkedinHref: "https://linkedin.com/in/parnickaagarrwal",
    location: "Ontario, Canada",
    heroImage: `${ASSET_BASE}/images/profile-placeholder.jpg`,
    resumeFile: `${ASSET_BASE}/resume.pdf`,
  };

  const stats = [
    { value: "25%", label: "Reduced Turnover" },
    { value: "12%", label: "Cut Labour Costs" },
    { value: "20%", label: "Improved Time-to-Fill" },
    { value: "15%", label: "Increased Productivity" },
    { value: "30%", label: "Reduced Conflicts" },
  ];

  const experience = [
    {
      company: "Quesada Burritos & Tacos",
      role: "Regional Operations Manager (HR & People Operations)",
      logo: `${ASSET_BASE}/images/logos/quesada.png`,
      period: "Sep 2024 – Oct 2025",
      location: "St. John’s, Newfoundland and Labrador",
      points: [
        "Managed HR operations for 50+ employees across recruitment, onboarding, employee relations, and compliance.",
        "Reduced turnover by 25% through structured hiring, onboarding redesign, and 90-day talent development programs.",
        "Advised leadership on grievances, discipline, workplace investigations, and policy development while maintaining zero legislative violations over 13 months.",
      ],
    },
    {
      company: "Subway",
      role: "Manager (Recruitment & Employee Relations)",
      logo: `${ASSET_BASE}/images/logos/subway.png`,
      period: "Dec 2023 – Aug 2024",
      location: "St. John’s, Newfoundland and Labrador",
      points: [
        "Led full-cycle recruitment, onboarding, and training for 20+ employees.",
        "Reached 92% retention within six months through stronger hiring and development practices.",
        "Reduced workplace conflicts by 30% through early intervention and progressive discipline.",
      ],
    },
    {
      company: "KSM Private Limited",
      role: "Human Resource Associate",
      logo: `${ASSET_BASE}/images/logos/ksm.png`,
      period: "Jun 2021 – Oct 2023",
      location: "Chandigarh, India",
      points: [
        "Managed full-cycle recruitment for 40+ roles annually.",
        "Reduced time-to-fill by 20% using better sourcing, screening, and job analysis.",
        "Built HR dashboards and reporting insights to support workforce planning and decision-making.",
      ],
    },
    {
      company: "Concentrix",
      role: "Customer Support Advisor",
      logo: `${ASSET_BASE}/images/logos/concentrix.png`,
      period: "Nov 2025 – Present",
      location: "Chatham, Ontario",
      points: [
        "Manage 100+ daily interactions with a strong focus on conflict resolution, policy interpretation, and problem-solving.",
        "Achieved a 90% first-contact resolution rate by using structured de-escalation and service recovery techniques.",
        "Improved efficiency by identifying trends and reducing average handling time by 15%.",
      ],
    },
    {
      company: "Click Labs",
      role: "Marketing Executive",
      logo: `${ASSET_BASE}/images/logos/clicklabs.png`,
      period: "Apr 2019 – May 2021",
      location: "Chandigarh, India",
      points: [
        "Managed digital marketing campaigns, increasing website traffic by 20% and lead conversion by 15%.",
        "Improved SEO performance, achieving a 30% increase in organic rankings through targeted data-driven strategies.",
        "Supported brand visibility through data-backed channel optimization.",
      ],
    },
  ];

  const orbitGroups = [
    {
      title: "People & Hiring",
      center: "Talent",
      items: [
        "Full-Cycle Recruitment",
        "Employee Relations",
        "Onboarding Programs",
        "Workforce Planning",
        "DEI Initiatives",
        "Performance Management",
        "Change Management",
        "Workplace Investigations",
      ],
    },
    {
      title: "Systems & Operations",
      center: "Ops",
      items: [
        "HR Compliance",
        "Policy Development",
        "Payroll & Benefits",
        "Return-to-Work Programs",
        "ADP Workforce Now",
        "BambooHR",
        "HRIS & ATS",
        "HR Analytics",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Management – Human Resources",
      school: "University of Windsor",
      logo: `${ASSET_BASE}/images/logos/uofwindsor.png`,
      period: "Sep 2022 – Dec 2023",
    },
    {
      degree: "Bachelor of Engineering – Computer Science and Engineering",
      school: "Chitkara University, India",
      logo: `${ASSET_BASE}/images/logos/chitkara.png`,
      period: "Aug 2016 – Jun 2020",
    },
  ];

  const certifications = [
    {
      title: "CHRP Candidate (HRPA)",
      subtitle: "Knowledge Exam Scheduled May 2026",
      logo: `${ASSET_BASE}/images/logos/hrpa.png`,
    },
    {
      title: "Understanding HR Systems Features & Benefits",
      subtitle: "LinkedIn Learning",
      logo: `${ASSET_BASE}/images/logos/linkedinlearning.png`,
    },
    {
      title: "People Analytics",
      subtitle: "LinkedIn Learning",
      logo: `${ASSET_BASE}/images/logos/linkedinlearning.png`,
    },
    {
      title: "Google Analytics Individual Qualification",
      subtitle: "Google",
      logo: `${ASSET_BASE}/images/logos/googleanalytics.png`,
    },
  ];

  const contactItems = [
    {
      label: profile.email,
      href: profile.emailHref,
      icon: `${ASSET_BASE}/images/icons/gmail.png`,
    },
    {
      label: profile.phone,
      href: profile.phoneHref,
      icon: `${ASSET_BASE}/images/icons/phone.png`,
    },
    {
      label: profile.linkedin,
      href: profile.linkedinHref,
      icon: `${ASSET_BASE}/images/icons/linkedin.png`,
    },
  ];

  const careerStops = [
    {
      question: "About Myself",
      answer:
        "I’m an HR professional with experience across recruitment, employee relations, people operations, and compliance. I enjoy building people processes that feel human but still create measurable business impact. My background has helped me support teams, improve retention, and manage HR operations in fast-paced environments.",
    },
    {
      question: "The reason I choose HR?",
      answer:
        "I chose HR because I enjoy understanding people, solving workplace challenges, and helping organizations create better employee experiences. HR gives me the opportunity to balance empathy with structure, which is exactly the kind of work I find meaningful.",
    },
    {
      question: "My biggest achievement?",
      answer:
        "One achievement I’m proud of is reducing employee turnover by 25%. I worked on improving onboarding, early engagement, and manager support through structured 30-60-90 day check-ins. That helped new employees feel more supported and improved retention.",
    },
    {
      question: "How do I handle employee conflict?",
      answer:
        "I start by listening to both sides without bias. Then I focus on understanding the root cause, clarifying expectations, and guiding the conversation toward a practical resolution. My goal is always to protect fairness, maintain professionalism, and preserve working relationships where possible.",
    },
    {
      question: "How do I stay compliant with employment standards?",
      answer:
        "I stay updated through HR resources, policy reviews, and employment standards updates. I also believe compliance should be proactive, not reactive, so I focus on clear documentation, consistent processes, and regular checks to reduce risk.",
    },
    {
      question: "What is my recruitment approach?",
      answer:
        "My recruitment approach is structured and people-focused. I start by understanding the role clearly, then use consistent screening criteria, strong communication, and timely follow-ups. I also focus on long-term fit, not just filling the role quickly.",
    },
    {
      question: "How do I handle pressure?",
      answer:
        "I handle pressure by prioritizing based on urgency and impact. I stay calm, communicate clearly, and break problems into manageable steps. Working in fast-paced environments has helped me become adaptable and practical under pressure.",
    },
    {
      question: "Why should you hire me?",
      answer:
        "I bring a mix of HR operations experience, employee relations skills, recruitment knowledge, and a strong people-first mindset. I’m comfortable working with both employees and leadership, and I focus on solutions that are fair, compliant, and useful for the business.",
    },
    {
      question: "My strengths?",
      answer:
        "My strengths are communication, problem-solving, adaptability, and relationship-building. I’m able to listen carefully, understand concerns, and turn them into practical actions. I also learn new systems quickly and enjoy improving processes.",
    },
    {
      question: "Where do I see myself in 3–5 years?",
      answer:
        "In the next few years, I see myself growing into a more strategic HR role where I can contribute to talent development, workforce planning, HR analytics, and leadership support. I also plan to continue building my HR credentials and deepen my expertise in people strategy.",
    },
  ];

  const getOrbitStyle = (index) => ({
    "--angle": `${index * 45}deg`,
  });

  const scrollToJourney = () => {
    document.getElementById("career-journey")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="grid-overlay" />

      <div className="dog-runner" aria-hidden="true">
        <div className="dog-bubble">
          Hire Parnicka! She is my mum. She is cool!
        </div>
        <img src={`${ASSET_BASE}/images/dog/dog-run.png`} alt="" />
      </div>

      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">PA</div>
          <div>
            <div className="brand-name">Parnicka Agarrwal</div>
            <div className="brand-sub">HR Portfolio</div>
          </div>
        </div>

        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#career-journey">Deep Dive</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Capabilities</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero-section">
          <div className="hero-top fade-up">
            <h1 className="hero-title">{profile.name}</h1>

            <div className="hero-photo-wrap">
              <div className="profile-ring hero-floating">
                <img
                  src={profile.heroImage}
                  alt="Parnicka Agarrwal"
                  className="profile-image"
                />
              </div>
            </div>

            <button className="deep-dive-btn" onClick={scrollToJourney}>
              🐾 Deep Dive Into My Career
            </button>

            <p className="hero-role">{profile.title}</p>
            <p className="hero-text">{profile.subtitle}</p>
          </div>

          <div className="hero-bottom-grid">
            <div className="hero-impact-card glass fade-up">
              <p className="section-tag">Impact Snapshot</p>
              <h3 className="impact-title">HR outcomes that moved the needle</h3>
              <p className="impact-text">
                Recruitment, compliance, workforce planning, employee relations,
                and people operations with measurable results.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={profile.resumeFile} download>
                  Download Resume
                </a>
                <a
                  className="btn btn-secondary"
                  href={profile.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
              </div>

              <div className="meta-row">
                <span className="meta-pill">{profile.location}</span>
                <span className="meta-pill">4+ years experience</span>
                <span className="meta-pill">CHRP Candidate</span>
              </div>
            </div>
          </div>

          <div className="stats-row-wrap">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card glass fade-up">
                  <div className="stat-top">
                    <div className="stat-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-bar-track">
                    <div
                      className="stat-bar-fill"
                      style={{ width: `${72 + index * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="career-journey" className="section career-journey-section">
          <div className="section-heading-center fade-up">
            <p className="section-tag section-tag-large">Career Snapshot Q&A</p>
          </div>

          <div className="journey-card glass fade-up">
            <div className="journey-road">
              <div className="road-line" />
              <img
                src={`${ASSET_BASE}/images/dog/dog-run.png`}
                alt="Benji guide"
                className="journey-dog"
                style={{ left: `${activeStop * 10.6}%` }}
              />

              {careerStops.map((stop, index) => (
                <button
                  key={stop.question}
                  className={`journey-stop ${
                    activeStop === index ? "journey-stop-active" : ""
                  }`}
                  style={{ left: `${index * 10.6}%` }}
                  onClick={() => setActiveStop(index)}
                  type="button"
                  aria-label={`Open question ${index + 1}`}
                >
                  <span>{index + 1}</span>
                </button>
              ))}
            </div>

            <div className="journey-answer-card">
              <div className="journey-answer-number">
                Stop {String(activeStop + 1).padStart(2, "0")}
              </div>
              <h3>{careerStops[activeStop].question}</h3>
              <p>{careerStops[activeStop].answer}</p>

              <div className="journey-controls">
                <button
                  type="button"
                  onClick={() => setActiveStop((prev) => Math.max(prev - 1, 0))}
                  disabled={activeStop === 0}
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStop((prev) =>
                      Math.min(prev + 1, careerStops.length - 1)
                    )
                  }
                  disabled={activeStop === careerStops.length - 1}
                >
                  Next Stop
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading-center fade-up">
            <p className="section-tag section-tag-large">About</p>
            <h2 className="section-title section-title-large">
              Empathy backed by execution
            </h2>
          </div>

          <div className="about-card about-card-centered glass fade-up">
            <p>
              Results-driven HR professional with experience across recruitment,
              employee relations, compliance, workforce planning, and HR systems.
              Her approach combines empathy, structure, and accountability so
              people feel supported while organizations get measurable outcomes.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading-center fade-up">
            <p className="section-tag section-tag-large">Experience</p>
            <h2 className="section-title section-title-large">
              Career highlights
            </h2>
          </div>

          <div className="experience-stack">
            {experience.map((job, index) => (
              <details
                key={`${job.company}-${job.role}`}
                className="experience-card glass fade-up"
              >
                <summary className="experience-summary">
                  <div className="experience-summary-left">
                    <div className="experience-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="exp-logo-panel">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="exp-logo-large"
                      />
                    </div>
                  </div>

                  <div className="exp-info-clean">
                    <p className="exp-company-clean">{job.company}</p>
                    <h3 className="exp-role-clean">{job.role}</h3>
                    <p className="exp-meta-clean">
                      {job.period} • {job.location}
                    </p>
                  </div>

                  <div className="dropdown-indicator">
                    Roles & Responsibilities
                  </div>
                </summary>

                <div className="experience-details">
                  <ul className="exp-list-clean">
                    {job.points.map((point) => (
                      <li key={point} className="exp-list-item-clean">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading-center fade-up">
            <p className="section-tag section-tag-large">Capabilities</p>
          </div>

          <div className="skill-orbits-grid">
            {orbitGroups.map((group) => (
              <div key={group.title} className="orbit-block fade-up">
                <h3 className="orbit-block-title">{group.title}</h3>

                <div className="skill-orbit-core">
                  <div className="skill-orbit-center-glow" />

                  <div className="skill-orbit-center">
                    <div className="skill-orbit-mini">HR</div>
                    <h4>{group.center}</h4>
                  </div>

                  {group.items.map((item, index) => (
                    <div
                      key={item}
                      className="orbit-skill"
                      style={getOrbitStyle(index)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="education-cert-grid">
            <div className="fade-up">
              <div className="section-heading-center">
                <p className="section-tag section-tag-large">Education</p>
                <h2 className="section-title section-title-large">
                  Academic background
                </h2>
              </div>

              <div className="stack-wrap">
                {education.map((item) => (
                  <div key={item.degree} className="edu-card glass">
                    <div className="edu-header">
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="edu-logo"
                      />
                      <div>
                        <h3 className="edu-title">{item.degree}</h3>
                        <p className="edu-school">{item.school}</p>
                        <p className="edu-meta">{item.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up">
              <div className="section-heading-center">
                <p className="section-tag section-tag-large">Certifications</p>
                <h2 className="section-title section-title-large">
                  Professional development
                </h2>
              </div>

              <div className="stack-wrap">
                {certifications.map((item) => (
                  <div
                    key={item.title}
                    className="cert-card cert-card-with-logo glass"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                      className="cert-logo"
                    />
                    <div>
                      <h3 className="cert-title">{item.title}</h3>
                      <p className="cert-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-card glass fade-up">
            <div className="contact-content-center">
              <p className="section-tag section-tag-large">Contact</p>
              <h2 className="section-title section-title-large contact-title">
                Open to HR and people operations opportunities
              </h2>
              <p className="contact-text">
                Feel free to reach out for recruitment, people operations, or HR
                opportunities.
              </p>

              <div className="contact-actions contact-actions-centered">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="footer-contact-btn"
                  >
                    <img src={item.icon} alt="" className="contact-icon" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}