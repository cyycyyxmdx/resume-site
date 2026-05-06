import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function BreathingSphere() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.scale.setScalar(1 + 0.1 * Math.sin(t * 0.8));
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    ref.current.rotation.y = Math.sin(t * 0.3) * 0.1;
  });
  return (
    <Sphere ref={ref} args={[1.8, 64, 64]}>
      <MeshDistortMaterial
        color="#ff8c42"
        emissive="#ff6b35"
        emissiveIntensity={0.6}
        transparent
        opacity={0.85}
        distort={0.4}
        speed={2}
        roughness={0.15}
        metalness={0.05}
      />
    </Sphere>
  );
}

function AmbientGlow() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = 0.4 * Math.sin(t * 0.6);
    ref.current.position.x = 0.2 * Math.sin(t * 0.4);
  });
  return (
    <group ref={ref}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <pointLight position={[0, 0, 3]} intensity={2} color="#ff8c42" />
      <pointLight position={[0, 0, -3]} intensity={0.5} color="#ffb347" />
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
