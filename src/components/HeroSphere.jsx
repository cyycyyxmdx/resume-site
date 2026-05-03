import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function BreathingSphere() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.scale.setScalar(1 + 0.08 * Math.sin(t * 1.0));
  });
  return (
    <Sphere ref={ref} args={[1.8, 64, 64]}>
      <MeshDistortMaterial
        color="#4facfe"
        emissive="#4facfe"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
        distort={0.35}
        speed={1.8}
        roughness={0.1}
        metalness={0.1}
      />
    </Sphere>
  );
}

function AmbientGlow() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = 0.3 * Math.sin(t * 0.5);
    ref.current.position.x = 0.15 * Math.sin(t * 0.35);
  });
  return (
    <group ref={ref}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#4facfe" />
      <pointLight position={[0, 0, -3]} intensity={0.4} color="#87ceeb" />
      <BreathingSphere />
    </group>
  );
}

export default function HeroSphere() {
  return (
    <div className="hero-sphere-container">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <AmbientGlow />
      </Canvas>
    </div>
  );
}
