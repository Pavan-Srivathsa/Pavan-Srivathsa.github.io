import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, Bot, ArrowRight, Download, Sparkles, ChevronDown } from 'lucide-react'

// ---------- CONFIG ----------
const PROXY_URL = "" // optional: set to your Cloudflare Worker URL for remote LLM calls
const LOCAL_LLM_DEFAULT = true

const socials = [
  { href: "mailto:pavansri@usc.edu", icon: Mail, label: "Email" },
  { href: "https://github.com/Pavan-Srivathsa", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pavan-srivathsa-1a6342165/", icon: Linkedin, label: "LinkedIn" },
]

const experience = [
  {
    company: "BlackBuckInsights (BBI)",
    role: "AI Engineer",
    period: "Aug 2024 – Present",
    bullets: [
      "Automated Gemini 1.5–powered weekly sales & inventory recaps (LW vs LY), cutting manual effort by ~80% (20+ hrs/wk).",
      "Improved reliability of data processing and on-time delivery of insights for decisions.",
    ],
  },
  {
    company: "Koantek",
    role: "Data Scientist",
    period: "Nov 2021 – Aug 2024",
    bullets: [
      "Built supply-chain chatbot with dynamic SQL generation and agentic workflow.",
      "RAG Studio: PDFs/SQL/URLs with routing agent (LangChain + Llama3 80B on Databricks), ↓ latency 22%.",
      "LLM fine-tuning (WizardVicuna/Dolly) with PEFT/QLoRA, Chroma + FAISS store.",
      "Time-series demand forecasting (SARIMAX/Prophet), MAPE 9.1%, Azure MLOps lifecycle.",
      "CV & NLP: Siamese U-Net for disaster analysis (Grad-CAM), spaCy NER from PDFs.",
      "Recommenders: ALS + Apriori on 1M interactions → +35% conversion, +15% AOV.",
    ],
  },
  {
    company: "Ugam Solutions",
    role: "Associate Analyst",
    period: "Mar 2021 – Oct 2021",
    bullets: ["Scaled web scraping pipelines across multi-regional retailers (BeautifulSoup, requests)."],
  },
]

const projects = [
  { title: "LLM RAG Studio", img: "/images/rag-studio.jpg", caption: "RAG over PDFs/SQL/URLs with routing agent and eval harness", tags: ["LangChain", "Llama 3", "Databricks", "FAISS"] },
  { title: "Supply-Chain Chatbot", img: "/images/supplychain-chatbot.jpg", caption: "Agentic SQL generation with clarifying Qs and NL answers", tags: ["Agents", "SQL", "FastAPI"] },
  { title: "Glaucoma Segmentation", img: "/images/optic-disc-cup.jpg", caption: "CLAHE + Res-UNet; DICE ↑ 71% → 81%", tags: ["PyTorch", "Med-CV", "Grad-CAM"] },
  { title: "Neural MRI Synthesis", img: "/images/cyclegan-mri.jpg", caption: "CycleGAN for multi-contrast synthesis; potential 10% cost reduction", tags: ["CycleGAN"] },
  { title: "Virtual Try-On", img: "/images/virtual-tryon.jpg", caption: "Faster-RCNN + StyleGAN for realistic apparel try-on", tags: ["CV", "GANs"] },
  { title: "E-commerce Recommenders", img: "/images/recsys.jpg", caption: "+35% conversion, +15% AOV via ALS + sequence mining", tags: ["ALS", "Apriori", "Spark"] },
]

const talks = [
  { title: "RAG for Document Processing", desc: "Hands-on walkthrough integrating vector DBs + fine-tuned LLMs.", when: "Workshop", img: "/images/rag-studio.jpg" },
  { title: "LLM Seminar", desc: "llama.cpp, GGML, vector DBs; 45–50 attendees; 3 startup conversions.", when: "Seminar", img: "/images/llm-seminar.jpg" },
  { title: "Fine-Tuning LLMs", desc: "LoRA, QLoRA, LongLoRA, PEFT, MoE, Prompt Tuning.", when: "Workshop", img: "/images/fine-tune.jpg" },
]

const education = [
  { school: "University of Southern California", program: "MS Computer Science (AI)", time: "Jan 2025 – Dec 2026" },
  { school: "IIIT-B & Liverpool John Moores University", program: "M.Sc / PGD in AI/ML — Distinction", time: "Dec 2019 – Apr 2022" },
  { school: "Dr. Ambedkar Institute of Technology", program: "B.E. Computer Science — 8.8/10", time: "Aug 2016 – Aug 2020" },
]

// ---------- Helpers ----------
function useProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 })
  return scaleX
}

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`section ${className}`}>{children}</section>
)

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-25vh"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <div ref={ref} className="hero">
      <motion.div style={{ y, opacity }} className="hero-inner">
        <div className="chip"><Sparkles size={16}/> Open to internships & roles</div>
        <h1>Hi, I'm <span className="accent">Pavan</span> — I build <span className="underline">data products</span> & AI systems.</h1>
        <p className="muted">MS CS (AI) @ USC · LLMs, RAG, MLOps, Time-series, CV. Passionate about healthcare AI & reproducible research.</p>
        <div className="btnrow">
          {socials.map(s => (
            <a key={s.label} className="btn" href={s.href} target="_blank" rel="noreferrer">
              <s.icon size={16}/> {s.label}
            </a>
          ))}
          <a className="btn primary" href="/Pavan_CV_Jan_25.pdf" target="_blank" rel="noreferrer">
            <Download size={16}/> Resume
          </a>
        </div>
        <div className="scrollhint"><ChevronDown size={18}/> Scroll</div>
      </motion.div>

      {/* parallax blobs */}
      <motion.div className="blob blob-a" style={{ y: useTransform(scrollYProgress,[0,1],[0,80]) }} />
      <motion.div className="blob blob-b" style={{ y: useTransform(scrollYProgress,[0,1],[0,-100]) }} />
    </div>
  )
}

function Experience() {
  return (
    <div className="grid">
      {experience.map(job => (
        <div key={job.company} className="card">
          <div className="card-head">
            <div className="card-title">{job.company}</div>
            <span className="badge">{job.period}</span>
          </div>
          <div className="muted small">{job.role}</div>
          <ul className="bullets">
            {job.bullets.map((b,i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <div className="grid">
      {projects.map(p => (
        <motion.a key={p.title} href="#" whileHover={{ y: -4 }} className="card linkcard">
          <div className="thumb">
            <img src={p.img} alt={p.title} />
            <div className="thumb-grad"></div>
          </div>
          <div className="card-title">{p.title}</div>
          <div className="muted small">{p.caption}</div>
          <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
        </motion.a>
      ))}
    </div>
  )
}

function Talks() {
  return (
    <div className="timeline">
      {talks.map(t => (
        <div key={t.title} className="titem reveal">
          <span className="dot"></span>
          <div className="tcard">
            <div className="tmeta"><span>{t.when}</span><span className="badge soft">Talk</span></div>
            <div className="card-title" style={{margin:"4px 0 8px"}}>{t.title}</div>
            <p className="small">{t.desc}</p>
            <img className="timg" src={t.img} alt={t.title} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Education() {
  return (
    <div className="grid">
      {education.map(e => (
        <div key={e.school} className="card">
          <div className="card-title">{e.school}</div>
          <div className="muted small">{e.time}</div>
          <div className="small" style={{marginTop:8}}>{e.program}</div>
        </div>
      ))}
    </div>
  )
}

// ---------- Chatbot (WebLLM local with optional proxy fallback) ----------
function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{role:"assistant", content:"Hi! Ask me anything about AI — LLMs, RAG, MLOps, CV, you name it."}])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const [useLocal, setUseLocal] = useState(LOCAL_LLM_DEFAULT)
  const webllmRef = useRef(null)

  // lazy load WebLLM when opening
  useEffect(() => {
    if (!open || !useLocal || webllmRef.current) return
    ;(async () => {
      try {
        const webllm = await import("@mlc-ai/web-llm")
        const engine = await webllm.CreateMLCEngine({
          model: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
          onProgress: (p) => console.log(p?.progress || p)
        })
        webllmRef.current = engine
      } catch (e) {
        console.warn("WebLLM load failed; falling back to proxy if configured", e)
        setUseLocal(false)
      }
    })()
  }, [open, useLocal])

  async function ask() {
    const q = input.trim()
    if (!q) return
    setMessages(m => [...m, {role:"user", content:q}])
    setInput("")
    setBusy(true)
    try {
      if (useLocal && webllmRef.current) {
        const reply = await webllmRef.current.chat.completions.create({
          messages: [{role:"system", content:"You are an AI expert."}, ...messages, {role:"user", content:q}],
          temperature: 0.3,
          max_tokens: 512
        })
        const text = reply?.choices?.[0]?.message?.content || "(no response)"
        setMessages(m => [...m, {role:"assistant", content:text}])
      } else if (PROXY_URL) {
        const resp = await fetch(PROXY_URL, {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{role:"system", content:"You are an AI expert."}, ...messages, {role:"user", content:q}],
            temperature: 0.3,
            max_tokens: 512
          })
        })
        const data = await resp.json()
        const text = data?.choices?.[0]?.message?.content || JSON.stringify(data)
        setMessages(m => [...m, {role:"assistant", content:text}])
      } else {
        setMessages(m => [...m, {role:"assistant", content:"No backend configured. Enable WebLLM (local) or set PROXY_URL."}])
      }
    } catch (e) {
      setMessages(m => [...m, {role:"assistant", content:`Error: ${e.message || e}`}])
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <button className="fab" title="AI Chatbot" onClick={()=>setOpen(true)}><Bot size={18}/></button>
      {open && (
        <div className="modal">
          <div className="dialog">
            <div className="dialog-head">
              <div>Ask me anything about AI</div>
              <label className="switch"><input type="checkbox" checked={useLocal} onChange={e=>setUseLocal(e.target.checked)}/><span>Use local (WebLLM)</span></label>
              <button className="iconbtn" onClick={()=>setOpen(false)}>✕</button>
            </div>
            <div className="chat">
              {messages.map((m,i)=>(
                <div key={i} className={`bubble ${m.role==="user"?"user":""}`}>{m.content}</div>
              ))}
            </div>
            <div className="chat-input">
              <input placeholder="Ask about LLMs, RAG, MLOps, CV…" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&ask()}/>
              <button className="btn" onClick={ask} disabled={busy}>Send <ArrowRight size={16}/></button>
            </div>
            {(!useLocal && !PROXY_URL) && <div className="tiny muted" style={{marginTop:6}}>Tip: set <code>PROXY_URL</code> to your Cloudflare Worker to call remote models.</div>}
          </div>
        </div>
      )}
    </>
  )
}

export default function App() {
  const scaleX = useProgressBar()

  // simple reveal-on-scroll for talks items
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, {threshold:0.15})
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
    return ()=>obs.disconnect()
  },[])

  return (
    <div>
      <motion.div style={{ scaleX }} className="progress" />

      <header className="nav">
        <div className="brand">Pavan</div>
        <nav className="navlinks">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#talks">Talks</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="iconlink"><s.icon size={18}/></a>
          ))}
        </div>
      </header>

      <Section id="home"><Hero/></Section>

      <Section id="experience">
        <h2>Experience</h2>
        <Experience/>
      </Section>

      <Section id="projects">
        <h2>Projects</h2>
        <Projects/>
      </Section>

      <Section id="talks">
        <h2>Talks & Workshops</h2>
        <Talks/>
      </Section>

      <Section id="education">
        <h2>Education</h2>
        <Education/>
      </Section>

      <Section id="contact">
        <h2>Contact</h2>
        <div className="card">
          <div className="muted">Email: <a href="mailto:pavansri@usc.edu">pavansri@usc.edu</a></div>
          <div className="btnrow">
            {socials.map(s => (<a key={s.label} className="btn outline" href={s.href} target="_blank" rel="noreferrer"><s.icon size={16}/> {s.label}</a>))}
          </div>
        </div>
      </Section>

      <footer className="footer">© {new Date().getFullYear()} Pavan Srivathsa Ramesh</footer>

      <Chatbot/>
    </div>
  )
}
