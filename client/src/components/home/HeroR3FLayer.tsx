import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function CameraRig() {
  useFrame(({ clock, camera }) => {
    const t = clock.elapsedTime * 0.35;
    const targetX = Math.sin(t) * 0.12;
    const targetY = 0.12 + Math.sin(t * 0.7) * 0.04;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
    camera.lookAt(0, 0.05, 0);
  });
  return null;
}

const LINE_HUB: [number, number, number] = [0, 0.06, 0];

function smoothCurve3D(
  from: [number, number, number],
  to: [number, number, number],
  segments: number
): [number, number, number][] {
  const pts: [number, number, number][] = [];
  const mid: [number, number, number] = [
    (from[0] + to[0]) * 0.5,
    Math.max(from[1], to[1]) + 0.35,
    (from[2] + to[2]) * 0.5 + 0.15,
  ];
  for (let i = 0; i <= segments; i++) {
    const u = i / segments;
    const o = 1 - u;
    const x = o * o * from[0] + 2 * o * u * mid[0] + u * u * to[0];
    const y = o * o * from[1] + 2 * o * u * mid[1] + u * u * to[1];
    const z = o * o * from[2] + 2 * o * u * mid[2] + u * u * to[2];
    pts.push([x, y, z]);
  }
  return pts;
}

function LedgerScene() {
  const scene = useRef<THREE.Group>(null);
  const { size } = useThree();
  const isNarrow = size.width < 520;

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!scene.current) return;
    scene.current.rotation.y = Math.sin(t * 0.25) * 0.07;
    scene.current.rotation.x = Math.sin(t * 0.18) * 0.025;
  });

  const cardLX = isNarrow ? -1.42 : -2.05;
  const cardRX = isNarrow ? 1.32 : 1.95;
  const leftCard: [number, number, number] = [cardLX, 0.28, 0.08];
  const rightCard: [number, number, number] = [cardRX, 0.22, -0.04];

  const lineL = useMemo(() => smoothCurve3D(LINE_HUB, [cardLX, 0.28, 0.08], 28), [cardLX]);
  const lineR = useMemo(() => smoothCurve3D(LINE_HUB, [cardRX, 0.22, -0.04], 28), [cardRX]);

  return (
    <group ref={scene}>
      <CameraRig />
      <hemisphereLight args={["#f8fafc", "#0a1628", 0.55]} position={[0, 3, 0]} />
      <directionalLight position={[4, 5.5, 6]} intensity={0.45} color="#e2e8f0" />
      <directionalLight position={[-5, 2, -4]} intensity={0.18} color="#38bdf8" />
      <pointLight position={[2.2, 1.2, 3]} intensity={0.35} color="#fb923c" distance={14} decay={2} />
      <pointLight position={[-2, 0.5, 2.5]} intensity={0.22} color="#7dd3fc" distance={12} decay={2} />

      <RoundedBox args={[3.2, 1.85, 0.04]} radius={0.06} smoothness={4} position={[0, 0.55, -0.95]} rotation={[-0.1, 0.06, 0]}>
        <meshStandardMaterial color="#0c1829" metalness={0.12} roughness={0.78} emissive="#1a2f4a" emissiveIntensity={0.035} />
      </RoundedBox>

      <group position={[0, -0.12, 0]}>
        {[0, 0.09, 0.18].map((y, i) => (
          <RoundedBox key={i} args={[1.95, 0.055, 1.15]} radius={0.02} smoothness={2} position={[0, y, 0]}>
            <meshStandardMaterial color="#0e1f35" metalness={0.55} roughness={0.28} emissive="#152a45" emissiveIntensity={0.05 + i * 0.02} />
          </RoundedBox>
        ))}
      </group>

      <RoundedBox args={[0.95, 1.15, 0.045]} radius={0.04} smoothness={3} position={leftCard}>
        <meshStandardMaterial color="#0f1c2e" metalness={0.42} roughness={0.38} emissive="#c2410c" emissiveIntensity={0.04} />
      </RoundedBox>
      <RoundedBox args={[0.14, 0.28, 0.05]} radius={0.02} smoothness={2} position={[leftCard[0] - 0.22, leftCard[1] + 0.32, leftCard[2] + 0.02]}>
        <meshStandardMaterial color="#ea580c" emissive="#f97316" emissiveIntensity={0.35} roughness={0.45} metalness={0.2} />
      </RoundedBox>

      <RoundedBox args={[0.95, 1.15, 0.045]} radius={0.04} smoothness={3} position={rightCard}>
        <meshStandardMaterial color="#0f1c2e" metalness={0.42} roughness={0.38} emissive="#0369a1" emissiveIntensity={0.035} />
      </RoundedBox>
      <RoundedBox args={[0.14, 0.28, 0.05]} radius={0.02} smoothness={2} position={[rightCard[0] + 0.22, rightCard[1] + 0.32, rightCard[2] - 0.02]}>
        <meshStandardMaterial color="#0ea5e9" emissive="#38bdf8" emissiveIntensity={0.28} roughness={0.45} metalness={0.2} />
      </RoundedBox>

      <Line points={lineL} color="#fdba74" lineWidth={1.5} transparent opacity={0.45} />
      <Line points={lineR} color="#7dd3fc" lineWidth={1.5} transparent opacity={0.38} />
    </group>
  );
}

export default function HeroR3FLayer() {
  return (
    <Canvas
      className="mx-auto h-[min(380px,62vw)] w-full max-w-lg touch-none md:h-[min(440px,42vw)] md:max-w-none"
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.2, 6.2], fov: 40, near: 0.1, far: 40 }}
      onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
    >
      <Suspense fallback={null}>
        <LedgerScene />
      </Suspense>
    </Canvas>
  );
}
