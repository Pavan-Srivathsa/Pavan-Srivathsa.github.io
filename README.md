<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pavan Srivathsa Ramesh — Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    body {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin:0;padding:0;background:#f9fafc;color:#1a1a1a;}
    header {background:#0a192f;color:#fff;padding:2rem;text-align:center;}
    header h1 {margin:0;font-size:2.5rem;}
    header p {margin:.5rem 0;}
    nav {display:flex;justify-content:center;gap:2rem;margin-top:1rem;}
    nav a {color:#64ffda;text-decoration:none;font-weight:bold;}
    section {padding:3rem 10%;}
    h2 {color:#0a192f;margin-bottom:1rem;}
    .grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;}
    .card {background:#fff;border-radius:12px;padding:1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.08);}
    .card h3 {margin-top:0;}
    .tag {background:#e6f7f4;color:#007f73;padding:4px 10px;border-radius:20px;font-size:.8rem;margin-right:5px;}
    footer {background:#0a192f;color:#aaa;text-align:center;padding:2rem;margin-top:2rem;}
    .contact a {color:#64ffda;margin:0 10px;font-size:1.2rem;}
  </style>
</head>
<body>
  <header>
    <h1>Pavan Srivathsa Ramesh</h1>
    <p>MS in Computer Science (AI) @ USC | Data Scientist & AI Engineer</p>
    <nav>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#talks">Talks</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="experience">
    <h2>Professional Experience</h2>
    <div class="grid">
      <div class="card">
        <h3>BlackBuckInsights (AI Engineer)</h3>
        <p><em>Aug 2024 – Present</em></p>
        <ul>
          <li>Built automated Gemini Pro 1.5 email system, saving 20+ hours/week.</li>
          <li>Enhanced weekly sales & inventory insights delivery efficiency.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Koantek (Data Scientist)</h3>
        <p><em>Nov 2021 – Aug 2024</em></p>
        <ul>
          <li>Developed RAG chatbot with LangChain & Llama3 80B.</li>
          <li>Built supply chain chatbot with dynamic SQL generation.</li>
          <li>Fine‑tuned LLMs (Wizard Vicuna, Dolly) using QLoRA & PEFT.</li>
          <li>Created time‑series demand forecasting (MAPE 9.1%).</li>
        </ul>
      </div>
      <div class="card">
        <h3>Ugam Solutions (Associate Analyst)</h3>
        <p><em>Mar 2021 – Oct 2021</em></p>
        <ul>
          <li>Developed web‑scraping scripts with BeautifulSoup for retailers.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="projects">
    <h2>Key Projects</h2>
    <div class="grid">
      <div class="card">
        <h3>Semantic Segmentation of Optic Disc & Cup</h3>
        <p>Improved glaucoma diagnosis with Res‑Unet & CLAHE preprocessing (DICE ↑ to 81%).</p>
      </div>
      <div class="card">
        <h3>Neural Synthesis of MRI Images</h3>
        <p>Built CycleGAN model to generate multi‑contrast MRI scans, reducing cost by 10%.</p>
      </div>
      <div class="card">
        <h3>Recommendation Engine</h3>
        <p>ALS & Apriori based engine, improving conversions by 35% and AOV by 15%.</p>
      </div>
      <div class="card">
        <h3>Virtual Try‑On</h3>
        <p>Used Faster‑RCNN & StyleGAN to build realistic AI‑powered apparel try‑on system.</p>
      </div>
    </div>
  </section>

  <section id="talks">
    <h2>Technical Talks & Workshops</h2>
    <div class="grid">
      <div class="card">
        <h3>RAG for Document Processing</h3>
        <p>Hands‑on walkthrough of Retrieval‑Augmented Generation (RAG).</p>
      </div>
      <div class="card">
        <h3>LLM Seminar</h3>
        <p>Talk on Llama.cpp, GGML, and vector DBs; converted 3 startups into clients.</p>
      </div>
      <div class="card">
        <h3>Fine‑Tuning LLMs Workshop</h3>
        <p>Covered LoRA, QLoRA, PEFT, MoE Fine‑Tuning, and Prompt Tuning.</p>
      </div>
    </div>
  </section>

  <section id="education">
    <h2>Education</h2>
    <div class="grid">
      <div class="card">
        <h3>University of Southern California</h3>
        <p>MS in Computer Science (AI) (2025 – 2026)</p>
      </div>
      <div class="card">
        <h3>IIIT‑Bangalore & Liverpool John Moores University</h3>
        <p>M.Sc in AI & ML — Distinction (2019 – 2022)</p>
      </div>
      <div class="card">
        <h3>Dr. Ambedkar Institute of Technology</h3>
        <p>B.E. Computer Science — 8.8/10.0 (2016 – 2020)</p>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <div class="contact" style="text-align:center">
      <a href="mailto:pavansri@usc.edu"><i class="fa fa-envelope"></i></a>
      <a href="https://github.com/Pavan-Srivathsa" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/pavan-srivathsa-1a6342165/" target="_blank"><i class="fab fa-linkedin"></i></a>
    </div>
  </section>

  <footer>
    <p>© 2025 Pavan Srivathsa Ramesh</p>
  </footer>
</body>
</html>
