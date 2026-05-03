import HeroSphere from "./components/HeroSphere";
import FanCards from "./components/FanCards";
import { resumeData } from "./data";
import "./App.css";
import { motion } from "motion/react";

function App() {
  const { name, title, intro, experience } = resumeData;

  return (
    <div className="app">
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
        </div>
      </section>

      <section className="section" id="skills">
        <h2 className="section-title">专业技能</h2>
        <div className="skills-grid">
          {resumeData.skills.map((s) => (
            <div className="skill-item" key={s.name}>
              <span className="skill-name">{s.name}</span>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <h2 className="section-title">过往经历</h2>
        <FanCards experiences={experience} />
      </section>

      <footer className="footer">
        <p>© 2026 {name} · 感谢访问</p>
      </footer>
    </div>
  );
}

export default App;
