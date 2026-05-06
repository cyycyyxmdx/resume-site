import { useMemo } from "react";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingParticles({ count = 20 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: randomBetween(6, 18),
      left: randomBetween(0, 100),
      delay: randomBetween(0, 15),
      duration: randomBetween(18, 35),
      opacity: randomBetween(0.08, 0.2),
    }));
  }, [count]);

  return (
    <div className="particles-bg">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
