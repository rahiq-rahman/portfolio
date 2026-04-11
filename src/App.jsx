import { useEffect, useRef, useState } from 'react'
import profileImg from './assets/profile.jpeg'

// ─── Data ────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    icon: '⚡',
    name: 'Frontend',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: '🎨',
    name: 'UI/UX & Design',
    tags: ['Figma', 'Framer', 'Canva'],
  },
  {
    icon: '🔧',
    name: 'Backend',
    tags: ['Node.js', 'Express.js', 'Django', 'Python'],
  },
  {
    icon: '🗄️',
    name: 'Databases',
    tags: ['MongoDB', 'Firebase', 'SQL'],
  },
  {
    icon: '💻',
    name: 'Languages',
    tags: ['JavaScript', 'Python', 'C', 'C++', 'Java', 'Dart'],
  },
  {
    icon: '🤖',
    name: 'AI & Dev Tools',
    tags: ['GitHub Copilot', 'Claude AI', 'ChatGPT', 'Grok', 'WordPress'],
  },
]

const projects = [
  {
    title: 'IEEE NSU Student Branch Website',
    desc: 'Full-featured portal enabling dynamic management of emails, tasks, notifications, events, member records, achievements, budgeting, membership renewals, magazines, and blogs.',
    tags: ['React', 'Django', 'PostgreSQL', 'Figma'],
  },
  {
    title: 'SPAC 2024 Management System',
    desc: 'Event management platform handling registration, food distribution, goodies tracking, and security clearance via QR scanning with data tracking for attendance and financials.',
    tags: ['React', 'Node.js', 'Firebase', 'QR Integration'],
  },
  {
    title: 'SPAC 2025 Platform',
    desc: 'Extended SPAC 2024 with a modern promotional website, dedicated registration form, and advanced email filtering for phase-based participant communication.',
    tags: ['React', 'Django', 'Email API', 'Tailwind'],
  },
  {
    title: 'PowerExpress 2.0',
    desc: 'Event system with custom registration, integrated email communication, and QR-based verification for streamlined event operations.',
    tags: ['React', 'Node.js', 'QR Code', 'MongoDB'],
  },
  {
    title: 'STEP 25 Event System',
    desc: 'Built a complete event management system with a custom registration form, integrated email communication, and QR-based verification.',
    tags: ['React', 'Firebase', 'Tailwind', 'Email'],
  },
  {
    title: 'PEEIACON 2025 Website',
    desc: 'Managed and maintained the PEEIACON 2025 WordPress website, ensuring consistent design, content updates, and smooth UX throughout the event lifecycle.',
    tags: ['WordPress', 'CSS', 'PHP', 'Event Management'],
  },
]

const experiences = [
  {
    period: 'Mar 2025 – Present',
    role: 'Sub-Executive, Website Dev Team',
    org: 'IEEE NSU Student Branch (PES)',
    bullets: [
      'Leading the frontend team in planning and implementing new features',
      'Providing technical guidance and mentorship on development workflows',
      'Ensuring code quality through reviews and testing',
    ],
  },
  {
    period: 'Mar 2025 – Present',
    role: 'Core Volunteer, Membership Dev Team',
    org: 'IEEE NSU Student Branch (PES)',
    bullets: [
      'Supporting membership-related web features and integrations',
      'Contributing to team collaboration and feature delivery',
    ],
  },
  {
    period: 'Jul 2025 – Sep 2025',
    role: 'Webmaster',
    org: 'PEEIACON 2025',
    bullets: [
      'Maintained live website during the entire event lifecycle',
      'Ensured all information was current and site performance was optimal',
    ],
  },
  {
    period: 'Nov 2023 – Mar 2025',
    role: 'Team Volunteer, Website Dev Team',
    org: 'IEEE NSU Student Branch',
    bullets: [
      'Implemented new features and improved UI/UX of the NSU IEEE portal',
      'Collaborated in team sprints to deliver user-focused interfaces',
      'Contributed to feature development and usability improvements',
    ],
  },
  {
    period: 'Nov 2023 – Nov 2024',
    role: 'Core Volunteer, Media Team',
    org: 'IEEE NSU Student Branch (PES)',
    bullets: [
      'Captured high-quality photos and prepared visual assets for social media',
      'Designed and refined logos and graphics for consistent branding',
    ],
  },
]

const education = [
  {
    degree: 'BSc in Computer Science & Engineering',
    school: 'North South University',
    period: 'September 2022 – Present',
  },
  {
    degree: 'HSC',
    school: 'Ispahani Public School and College',
    period: 'Cumilla Cantonment, Cumilla',
    grade: 'GPA 5.00',
  },
  {
    degree: 'SSC',
    school: 'Ispahani Public School and College',
    period: 'Cumilla Cantonment, Cumilla',
    grade: 'GPA 5.00',
  },
]

// ─── Custom Cursor ────────────────────────────────────────────────────────────

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const cursorRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const onHover = (e) => {
      const el = e.target.closest('a, button, .project-card, .skill-category, .stat-card, .exp-content, .edu-card')
      if (el) cursorRef.current?.classList.add('hovering')
      else cursorRef.current?.classList.remove('hovering')
    }

    let raf
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onHover)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onHover)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={cursorRef} className="cursor">
      <div ref={dotRef} className="cursor-dot" style={{ position: 'fixed' }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: 'fixed' }} />
    </div>
  )
}

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────

function TiltCard({ children, className, style }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rx = ((y - cy) / cy) * 8
    const ry = ((x - cx) / cx) * -8
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`)
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: 'transform 0.4s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

const marqueeItems = [
  'React', 'Django', 'Figma', 'Framer', 'Node.js', 'Tailwind CSS',
  'MongoDB', 'Firebase', 'JavaScript', 'Python', 'UI/UX Design',
]

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  useReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="noise" />
      <Cursor />

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>
            {link}
          </a>
        ))}
        <a href="mailto:rahirahman2001@gmail.com" onClick={closeMenu}
          style={{ color: 'var(--accent)', fontSize: 'clamp(1.2rem, 5vw, 1.6rem)' }}>
          Hire Me →
        </a>
      </div>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          RR <span className="dot" />
        </a>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="mailto:rahirahman2001@gmail.com" className="nav-cta">
            Hire Me
          </a>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid-bg" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-content">
          <div className="hero-label">Available for freelance work</div>
          <h1 className="hero-title">
            <span className="line-1">Rahiq</span>
            <br />
            <span className="accent-word">Rahman</span>
          </h1>
          <p className="hero-desc">
            CSE student at North South University &amp; Frontend Developer with 3+ years building
            responsive, user-friendly web applications. Turning complex requirements into
            clean, performant UI/UX.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work
              <span>↓</span>
            </a>
            <a href="mailto:rahirahman2001@gmail.com" className="btn-secondary">
              Get in Touch
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="hero-image-container">
          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              <img src={profileImg} alt="Rahiq Rahman" />
            </div>
            <div className="hero-image-accent" />
            <div className="hero-image-badge">
              <div className="badge-label">Experience</div>
              <div className="badge-value">3+ Years</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-label reveal">Profile</div>
        <div className="about-grid">
          <div>
            <h2 className="section-title reveal">
              Building the web,
              <br />
              <em style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)' }}>one pixel</em> at a time.
            </h2>
            <p className="about-text reveal">
              I'm a <span className="about-highlight">Computer Science student at North South University</span>, 
              Dhaka, with a passion for building beautiful, functional web experiences. 
              With over 3 years of hands-on development experience, I specialize in turning 
              complex requirements into clean, scalable implementations.
            </p>
            <p className="about-text reveal">
              From contributing to the <span className="about-highlight">IEEE NSU Student Branch portal</span> to 
              building event management systems used by hundreds of participants, 
              I thrive at the intersection of design and engineering.
            </p>
            <div className="about-stats">
              {[
                { num: '3+', label: 'Years of Experience' },
                { num: '6+', label: 'Projects Shipped' },
                { num: '5.0', label: 'Academic GPA' },
                { num: '∞', label: 'Lines of Code' },
              ].map((s, i) => (
                <div key={i} className={`stat-card reveal reveal-delay-${i + 1}`}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-info-cards">
            <div className="info-card reveal">
              <div className="info-card-icon">🎯</div>
              <h3 className="info-card-title">Frontend Specialist</h3>
              <p className="info-card-text">
                Focused on creating responsive, accessible interfaces with React and modern CSS. I care deeply about performance and user experience.
              </p>
            </div>
            <div className="info-card reveal reveal-delay-2">
              <div className="info-card-icon">🚀</div>
              <h3 className="info-card-title">Full-Stack Capable</h3>
              <p className="info-card-text">
                Comfortable across the stack — from Django REST APIs and MongoDB to Firebase integrations and Node.js backends.
              </p>
            </div>
            <div className="info-card reveal reveal-delay-3">
              <div className="info-card-icon">🎨</div>
              <h3 className="info-card-title">Design-Minded</h3>
              <p className="info-card-text">
                Proficient in Figma and Framer for UI/UX design, with an eye for typography, spacing, and visual hierarchy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <div className="section-label reveal">Toolkit</div>
        <h2 className="section-title reveal">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <TiltCard
              key={cat.name}
              className={`skill-category reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-label reveal">Work</div>
        <h2 className="section-title reveal">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <TiltCard key={proj.title} className={`project-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="project-arrow">↗</div>
              <div className="project-num">/{String(i + 1).padStart(2, '0')}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section" id="experience">
        <div className="section-label reveal">Journey</div>
        <h2 className="section-title reveal">Experience</h2>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`exp-item reveal reveal-delay-${(i % 3) + 1}`}>
              <div><div className="exp-dot" /></div>
              <div className="exp-content">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org">{exp.org}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education-section" id="education">
        <div className="section-label reveal">Academia</div>
        <h2 className="section-title reveal">Education</h2>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <div key={i} className={`edu-card reveal reveal-delay-${i + 1}`}>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-period">{edu.period}</div>
              {edu.grade && <span className="edu-grade">⭐ {edu.grade}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>Contact</div>
        <h2 className="contact-tagline reveal">
          Let's build something
          <br />
          <span className="accent">remarkable.</span>
        </h2>
        <p className="contact-sub reveal">
          I'm open to freelance projects, collaborations, and full-time opportunities.
          Drop me a message and let's create something great together.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:rahirahman2001@gmail.com" className="contact-link">
            ✉ rahirahman2001@gmail.com
          </a>
          <a href="tel:+8801999370967" className="contact-link">
            📞 +880 1999 370967
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            ⌥ GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">
          © 2025 <span>Rahiq Rahman</span>. Crafted with care in Dhaka, Bangladesh.
        </div>
        <div className="footer-copy">
          Built with <span>React</span> + <span>Vite</span>
        </div>
      </footer>
    </>
  )
}
