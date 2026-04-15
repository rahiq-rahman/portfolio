import { useEffect, useRef, useState, useCallback } from 'react'

/* ── DATA ─────────────────────────────────────────────────── */
const skills = [
  {
    cat: 'Frontend',
    title: 'Interface Craft',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    cat: 'Backend',
    title: 'Server-Side',
    tags: ['Node.js', 'Express.js', 'Django', 'Python'],
  },
  {
    cat: 'Data & Design',
    title: 'Tools & Systems',
    tags: ['Figma', 'Framer', 'Canva', 'SQL', 'MongoDB', 'Firebase'],
  },
  {
    cat: 'Languages',
    title: 'Code Fluency',
    tags: ['JavaScript', 'Python', 'C', 'C++', 'Java', 'Dart'],
  },
  {
    cat: 'AI & Dev',
    title: 'Developer Tools',
    tags: ['GitHub', 'ChatGPT', 'Claude', 'GitHub Copilot Pro', 'Firebase Studio'],
  },
  {
    cat: 'Platforms',
    title: 'CMS & Deploy',
    tags: ['WordPress', 'Vercel', 'Git'],
  },
]

const projects = [
  {
    num: '01',
    name: 'IEEE NSU Student Branch Portal',
    desc: 'Full-featured internal management system handling emails, tasks, events, member records, achievements, budgeting, and magazine publishing.',
    tags: ['React', 'Django', 'Firebase'],
  },
  {
    num: '02',
    name: 'SPAC 2024 & 2025',
    desc: 'Conference management platform with QR-based check-in, food & goodies tracking, financial records, phased registration, and advanced email filtering.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    num: '03',
    name: 'PowerExpress 2.0',
    desc: 'Event system with custom registration, integrated email communication, and QR-based verification for streamlined event operations.',
    tags: ['JavaScript', 'Firebase'],
  },
  {
    num: '04',
    name: 'STEP 25 Event System',
    desc: 'End-to-end event platform featuring custom registration forms, email communication pipeline, and QR-based verification.',
    tags: ['React', 'Express.js'],
  },
  {
    num: '05',
    name: 'PEEIACON 2025 Website',
    desc: 'Managed and maintained the PEEIACON 2025 WordPress site ensuring consistent design, content updates, and smooth UX throughout the event.',
    tags: ['WordPress', 'CSS'],
  },
]

const experiences = [
  {
    role: 'Sub-Executive',
    org: 'IEEE NSU — Website Dev Team',
    period: 'Mar 2025 – Present',
    desc: 'Led the frontend team, mentored members, ensured code quality through reviews and testing, and delivered bug-free features on time.',
  },
  {
    role: 'Sub-Executive',
    org: 'IEEE NSU — Membership Dev Team',
    period: 'Mar 2025 – Present',
    desc: 'Planned and implemented new platform features, provided technical guidance and collaborative workflow support to team members.',
  },
  {
    role: 'Webmaster',
    org: 'PEEIACON 2025',
    period: 'Jul – Sep 2025',
    desc: 'Kept all website information current and ensured the site ran smoothly throughout the event lifecycle.',
  },
  {
    role: 'Team Volunteer',
    org: 'IEEE NSU — Website Dev Team',
    period: 'Nov 2023 – Mar 2025',
    desc: 'Volunteered as a Frontend Developer for the IEEE NSU Student Branch portal, implementing new features and improving UI/UX design.',
  },
  {
    role: 'Core Volunteer',
    org: 'IEEE PES — Media Team',
    period: 'Nov 2023 – Nov 2024',
    desc: 'Captured high-quality event photos, designed and refined logos, and maintained consistent branding across social media assets.',
  },
]

const education = [
  {
    school: 'North South University',
    degree: 'BSc in Computer Science & Engineering',
    period: 'Sep 2022 – Present',
    grade: null,
    note: 'Dhaka, Bangladesh',
  },
  {
    school: 'Ispahani Public School & College',
    degree: 'HSC',
    period: '2021',
    grade: '5.00',
    note: 'Cumilla Cantonment',
  },
  {
    school: 'Ispahani Public School & College',
    degree: 'SSC',
    period: '2019',
    grade: '5.00',
    note: 'Cumilla Cantonment',
  },
]

const marqueeItems = [
  'React', 'JavaScript', 'UI/UX Design', 'Django', 'Frontend Development',
  'Figma', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Full-Stack', 'Firebase', 'Python',
  'React', 'JavaScript', 'UI/UX Design', 'Django', 'Frontend Development',
  'Figma', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Full-Stack', 'Firebase', 'Python',
]

/* ── CUSTOM CURSOR ────────────────────────────────────────── */
function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const pos   = useRef({ x: 0, y: 0 })
  const ring  = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    const onEnter = () => {
      cursorRef.current?.classList.add('hovered')
      ringRef.current?.classList.add('hovered')
    }
    const onLeave = () => {
      cursorRef.current?.classList.remove('hovered')
      ringRef.current?.classList.remove('hovered')
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />
    </>
  )
}

/* ── TILT CARD ────────────────────────────────────────────── */
function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`
  }
  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }

  return (
    <div className={`tilt-wrapper ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div ref={ref} className="tilt-card" style={{ transition: 'transform 0.15s ease' }}>
        {children}
      </div>
    </div>
  )
}

/* ── REVEAL ON SCROLL ─────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ── NAV ──────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav" style={{
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      background: scrolled ? 'rgba(245,242,237,0.75)' : 'transparent',
      transition: 'background 0.5s, backdrop-filter 0.5s',
      borderBottom: scrolled ? '1px solid rgba(10,10,10,0.06)' : 'none',
    }}>
      <a href="#" className="nav-logo">Rahiq Rahman</a>
      <ul className="nav-links">
        {['About','Skills','Work','Experience','Contact'].map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}

/* ── HERO ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-line" />

      <div className="hero-left">
        <p className="hero-eyebrow">Frontend + Fullstack Developer</p>
        <h1 className="hero-name">
          Rahiq<br /><em>Rahman</em>
        </h1>
        <p className="hero-desc">
          CSE student at North South University crafting responsive,
          user-first web experiences with React, Django & modern design tools.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">
            <span>View Work</span>
          </a>
          <a href="mailto:rahirahman2001@gmail.com" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-right">
        <TiltCard>
          <div className="hero-card">
            <p className="hero-card-label">Currently Studying</p>
            <p className="hero-card-value">BSc in CSE</p>
            <p className="hero-card-sub">North South University</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="hero-card">
            <p className="hero-card-label">Years of Experience</p>
            <p className="hero-card-value">3+ Years</p>
            <p className="hero-card-sub">Frontend & Full-Stack Development</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="hero-card">
            <p className="hero-card-label">Projects Shipped</p>
            <p className="hero-card-value">5+ Projects</p>
            <p className="hero-card-sub">Real-world platforms & event systems</p>
          </div>
        </TiltCard>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>
    </section>
  )
}

/* ── MARQUEE ──────────────────────────────────────────────── */
function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── ABOUT ────────────────────────────────────────────────── */
function About() {
  return (
    <section className="section about" id="about">
      <div className="section-header reveal">
        <div>
          <p className="section-number">// 01</p>
          <h2 className="section-title">About <em>Me</em></h2>
        </div>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <p className="about-text reveal">
          I'm a <strong>CSE student</strong> at North South University with over three years
          of hands-on experience building responsive, user-friendly applications.
          I specialise in turning <strong>complex requirements</strong> into clean UI/UX and
          scalable implementations — from internal portals to conference platforms.
          Passionate about <strong>clean code, performance,</strong> and solving real-world
          problems for startups and growing products.
        </p>
        <div className="about-details">
          {[
            { label: 'Location', value: 'Bashundhara R/A, Dhaka, Bangladesh' },
            { label: 'Email', value: 'rahirahman2001@gmail.com' },
            { label: 'Phone', value: '01999370967' },
            { label: 'Available for', value: 'Freelance & Full-time Roles' },
          ].map((d, i) => (
            <div key={i} className={`about-detail-item reveal reveal-delay-${i + 1}`}>
              <p className="about-detail-label">{d.label}</p>
              <p className="about-detail-value">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SKILLS ───────────────────────────────────────────────── */
function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header reveal">
        <div>
          <p className="section-number">// 02</p>
          <h2 className="section-title"><em>Skills</em> & Tools</h2>
        </div>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className={`skill-card reveal reveal-delay-${(i % 4) + 1}`}>
            <p className="skill-cat">{s.cat}</p>
            <h3 className="skill-title">{s.title}</h3>
            <div className="skill-tags">
              {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── PROJECTS ─────────────────────────────────────────────── */
function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="section-header reveal">
        <div>
          <p className="section-number">// 03</p>
          <h2 className="section-title">Selected <em>Work</em></h2>
        </div>
        <div className="section-line" />
      </div>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div key={i} className="project-item reveal">
            <span className="project-num">{p.num}</span>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags-row">
              {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
            </div>
            <div className="project-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── EXPERIENCE ───────────────────────────────────────────── */
function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header reveal">
        <div>
          <p className="section-number">// 04</p>
          <h2 className="section-title"><em>Experience</em></h2>
        </div>
        <div className="section-line" />
      </div>
      <div className="experience-list">
        {experiences.map((e, i) => (
          <div key={i} className="exp-item reveal">
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-org">{e.org}</p>
            </div>
            <p className="exp-desc">{e.desc}</p>
            <p className="exp-period">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── EDUCATION ────────────────────────────────────────────── */
function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-header reveal">
        <div>
          <p className="section-number">// 05</p>
          <h2 className="section-title"><em>Education</em></h2>
        </div>
        <div className="section-line" />
      </div>
      <div className="edu-grid">
        {education.map((e, i) => (
          <div key={i} className={`edu-card reveal reveal-delay-${i + 1}`}>
            <h3 className="edu-school">{e.school}</h3>
            <p className="edu-degree">{e.degree}</p>
            <p className="edu-period">{e.note} · {e.period}</p>
            {e.grade && <span className="edu-grade">GPA {e.grade}</span>}
            {!e.grade && <span className="edu-grade" style={{ fontSize: '1.2rem', marginTop: '1rem', display: 'block' }}>In Progress</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CONTACT ──────────────────────────────────────────────── */
function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="section-number reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>// 06</p>
      <h2 className="contact-big reveal">Let's build<br />something <em>great.</em></h2>
      <p className="contact-sub reveal">
        Open for freelance projects, collaborations, and full-time opportunities.
        Don't hesitate to reach out.
      </p>
      <div className="contact-links reveal">
        <a href="mailto:rahirahman2001@gmail.com" className="contact-link">
          ✉ rahirahman2001@gmail.com
        </a>
        <a href="tel:+8801999370967" className="contact-link">
          ✆ +880 1999 370967
        </a>
      </div>
    </section>
  )
}

/* ── FOOTER ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">© 2025 Rahiq Rahman — All rights reserved</p>
      <span className="footer-name">Rahiq Rahman</span>
      <p className="footer-copy">Dhaka, Bangladesh</p>
    </footer>
  )
}

/* ── APP ──────────────────────────────────────────────────── */
export default function App() {
  useReveal()
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
