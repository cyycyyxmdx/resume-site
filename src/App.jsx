import HeroSphere from "./components/HeroSphere";
import FanCards from "./components/FanCards";
import FloatingParticles from "./components/FloatingParticles";
import { resumeData } from "./data";
import "./App.css";
import { motion } from "motion/react";

function App() {
  const { name, title, intro, experience } = resumeData;

  return (
    <div className="app">
      <FloatingParticles />

      <section className="hero-section" id="home">
        <HeroSphere />
        <div className="hero-overlay">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {title}
          </motion.p>
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {intro.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </motion.p>
          <motion.div
            className="hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1.5, duration: 0.6 },
              y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              marginTop: 40,
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
              letterSpacing: 2,
            }}
          >
            ↓ 向下滚动
          </motion.div>
        </div>
      </section>

      <section className="section" id="skills">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          专业技能
        </motion.h2>
        <div className="skills-grid">
          {resumeData.skills.map((s, i) => (
            <motion.div
              className="skill-item"
              key={s.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="skill-name">{s.name}</span>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          过往经历
        </motion.h2>
        <FanCards experiences={experience} />
      </section>

      <footer className="footer">
        <p>© 2026 {name} · 感谢访问</p>
      </footer>
    </div>
  );
}

export default App;
