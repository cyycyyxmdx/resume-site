import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cardColors = ["#002fa7", "#1a4fc3", "#3366d6", "#4d7de8", "#6695f5"];

export default function FanCards({ experiences }) {
  const [selected, setSelected] = useState(null);
  const [flipped, setFlipped] = useState({});

  const handleSelect = (idx) => {
    if (selected === idx) {
      setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
    } else {
      setSelected(idx);
    }
  };

  const total = experiences.length;
  const spreadAngle = 50;
  const radius = 380;

  return (
    <div className="fan-container">
      <div className="fan-stage">
        {experiences.map((exp, i) => {
          const isSelected = selected === i;
          const angle = ((i - (total - 1) / 2) / (total - 1)) * spreadAngle;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.sin(rad);
          const y = -Math.abs(radius * (1 - Math.cos(rad))) - 20;

          return (
            <motion.div
              key={i}
              className="fan-card-wrapper"
              style={{ zIndex: isSelected ? 100 : total - i }}
              animate={{
                x,
                y,
                rotate: angle,
                opacity: selected === null ? 1 : isSelected ? 1 : 0.35,
                scale: isSelected ? 1.08 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => handleSelect(i)}
            >
              <motion.div
                className="fan-card"
                animate={{ rotateY: flipped[i] ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ background: cardColors[i % cardColors.length] }}
              >
                {/* Front */}
                <div className="fan-card-front">
                  <span className="fan-badge">{exp.type}</span>
                  <h3>{exp.company}</h3>
                  <p className="fan-role">{exp.role}</p>
                  <p className="fan-period">{exp.period}</p>
                  <p className="fan-summary">{exp.summary}</p>
                  <span className="fan-hint">点击翻转查看详情</span>
                </div>

                {/* Back */}
                <div className="fan-card-back">
                  <h3>{exp.company} - 详情</h3>
                  <ul>
                    {exp.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="fan-education">
        <h2 className="section-title">教育背景</h2>
        <div className="edu-card">
          <h3>厦门大学 — 经济学</h3>
          <p className="edu-period">2022.9 - 2026.6 | GPA: 专业前 10%</p>
          <ul>
            <li>主修课程：宏微观经济学、Python、计量经济学（专业前 10%）</li>
            <li>获厦门大学诺谦奖学金</li>
            <li>志愿者协会会长</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
