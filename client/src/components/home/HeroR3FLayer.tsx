import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const R = 2.2;

const CITIES: { lat: number; lon: number }[] = [
  { lat: 40.7, lon: -74.0 },
  { lat: 51.5, lon: -0.1 },
  { lat: 48.9, lon: 2.3 },
  { lat: 35.7, lon: 139.7 },
  { lat: 22.3, lon: 114.2 },
  { lat: 19.1, lon: 72.9 },
  { lat: 1.35, lon: 103.8 },
  { lat: -33.9, lon: 151.2 },
  { lat: 37.8, lon: -122.4 },
  { lat: 25.2, lon: 55.3 },
  { lat: 55.8, lon: 37.6 },
  { lat: -23.5, lon: -46.6 },
  { lat: 28.6, lon: 77.2 },
  { lat: -1.3, lon: 36.8 },
];

const CONNECTIONS = [
  [0, 1], [1, 4], [4, 3], [3, 7], [5, 4],
  [5, 9], [1, 10], [0, 11], [6, 5], [8, 0],
  [9, 1], [12, 5], [13, 9], [2, 1], [4, 6],
];

const ARC_COLORS = ["#38bdf8", "#818cf8", "#f97316", "#34d399", "#f472b6", "#a78bfa"];

function latLon(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const th = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(th),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(th)
  );
}

function arcPoints(a: THREE.Vector3, b: THREE.Vector3, segs: number, lift: number): [number, number, number][] {
  const pts: [number, number, number][] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const v = new THREE.Vector3().lerpVectors(a, b, t).normalize();
    v.multiplyScalar(R + Math.sin(t * Math.PI) * lift);
    pts.push([v.x, v.y, v.z]);
  }
  return pts;
}

/* ─── Globe dot surface ─── */
function GlobeDots() {
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let lat = -80; lat <= 80; lat += 7) {
      const cols = Math.max(6, Math.round(52 * Math.cos(lat * Math.PI / 180)));
      for (let i = 0; i < cols; i++) {
        const lon = -180 + (360 / cols) * i;
        const v = latLon(lat, lon, R);
        pos.push(v.x, v.y, v.z);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, []);

  return (
    <points geometry={geo}>
      <pointsMaterial
        size={0.028}
        color="#60a5fa"
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Lat / lon grid lines ─── */
function GlobeGrid() {
  const latLines = useMemo(() =>
    [-60, -30, 0, 30, 60].map((lat) => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= 80; i++) {
        const lon = -180 + (360 / 80) * i;
        const v = latLon(lat, lon, R * 1.002);
        pts.push([v.x, v.y, v.z]);
      }
      return pts;
    }), []);

  const lonLines = useMemo(() =>
    [0, 45, 90, 135, 180, -135, -90, -45].map((lon) => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= 40; i++) {
        const lat = -90 + (180 / 40) * i;
        const v = latLon(lat, lon, R * 1.002);
        pts.push([v.x, v.y, v.z]);
      }
      return pts;
    }), []);

  return (
    <>
      {latLines.map((pts, i) => (
        <Line key={`la${i}`} points={pts} color="#3b82f6" lineWidth={0.6} transparent opacity={0.28} />
      ))}
      {lonLines.map((pts, i) => (
        <Line key={`lo${i}`} points={pts} color="#3b82f6" lineWidth={0.6} transparent opacity={0.28} />
      ))}
    </>
  );
}

/* ─── Glowing city node ─── */
function CityNode({ lat, lon, color, size }: { lat: number; lon: number; color: string; size: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLon(lat, lon, R), [lat, lon]);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (mesh.current) {
      const s = 0.85 + 0.18 * Math.sin(t * 1.6 + seed);
      mesh.current.scale.setScalar(s);
    }
    if (ring.current) {
      const rs = 1 + 0.5 * ((Math.sin(t * 1.1 + seed) + 1) / 2);
      ring.current.scale.setScalar(rs);
      (ring.current.material as THREE.MeshStandardMaterial).opacity =
        0.6 * (1 - ((Math.sin(t * 1.1 + seed) + 1) / 2) * 0.8);
    }
  });

  return (
    <group position={[pos.x, pos.y, pos.z]}>
      {/* Outer expanding ring */}
      <mesh ref={ring}>
        <sphereGeometry args={[size * 2.8, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.0}
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </mesh>
      {/* Core dot */}
      <mesh ref={mesh}>
        <sphereGeometry args={[size, 10, 10]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={4.0}
          roughness={0}
          metalness={0}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ─── Animated arc between cities ─── */
function ConnectionArc({
  fromCity, toCity, color, speed, offset,
}: {
  fromCity: { lat: number; lon: number };
  toCity: { lat: number; lon: number };
  color: string;
  speed: number;
  offset: number;
}) {
  const a = useMemo(() => latLon(fromCity.lat, fromCity.lon, R), [fromCity]);
  const b = useMemo(() => latLon(toCity.lat, toCity.lon, R), [toCity]);
  const pts = useMemo(() => arcPoints(a, b, 60, 0.55), [a, b]);

  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = ((offset + clock.elapsedTime * speed * 0.065) % 1 + 1) % 1;
    if (!pulseRef.current) return;
    const raw = t * (pts.length - 1);
    const idx = Math.floor(raw);
    const frac = raw - idx;
    const p0 = pts[idx];
    const p1 = pts[Math.min(idx + 1, pts.length - 1)];
    pulseRef.current.position.set(
      p0[0] + (p1[0] - p0[0]) * frac,
      p0[1] + (p1[1] - p0[1]) * frac,
      p0[2] + (p1[2] - p0[2]) * frac,
    );
  });

  return (
    <>
      <Line points={pts} color={color} lineWidth={1.2} transparent opacity={0.35} />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={5}
          roughness={0}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}

/* ─── Inner dim sphere so stars don't show through globe ─── */
function GlobeInner() {
  return (
    <mesh>
      <sphereGeometry args={[R * 0.97, 48, 48]} />
      <meshStandardMaterial color="#030c1c" roughness={1} metalness={0} />
    </mesh>
  );
}

/* ─── Atmospheric glow shells ─── */
function Atmosphere() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[R * 1.04, 48, 48]} />
        <meshStandardMaterial
          color="#1d4ed8"
          emissive="#1e40af"
          emissiveIntensity={0.3}
          transparent
          opacity={0.07}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[R * 1.10, 48, 48]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={0.15}
          transparent
          opacity={0.04}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

/* ─── Background stars ─── */
function Stars() {
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let i = 0; i < 1200; i++) {
      const r = 9 + Math.random() * 5;
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      pos.push(r * Math.sin(v) * Math.cos(u), r * Math.sin(v) * Math.sin(u), r * Math.cos(v));
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, []);

  return (
    <points geometry={geo}>
      <pointsMaterial size={0.04} color="#e2e8f0" sizeAttenuation transparent opacity={0.7} depthWrite={false} />
    </points>
  );
}

/* ─── Full scene ─── */
function GlobeScene() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y = clock.elapsedTime * 0.08;
    globeRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.035;
  });

  return (
    <>
      <Stars />

      {/* Lighting */}
      <ambientLight intensity={0.15} color="#c7d2fe" />
      <directionalLight position={[6, 5, 8]} intensity={0.5} color="#bfdbfe" />
      <pointLight position={[5, 3, 6]} intensity={1.4} color="#38bdf8" distance={18} decay={2} />
      <pointLight position={[-5, -2, 4]} intensity={0.7} color="#6366f1" distance={14} decay={2} />
      <pointLight position={[0, 6, -4]} intensity={0.5} color="#818cf8" distance={14} decay={2} />

      <group ref={globeRef}>
        {/* Globe inner (opaque so stars don't bleed through) */}
        <GlobeInner />

        {/* Grid lines */}
        <GlobeGrid />

        {/* Surface dots */}
        <GlobeDots />

        {/* Atmosphere glow */}
        <Atmosphere />

        {/* City nodes */}
        {CITIES.map((c, i) => (
          <CityNode
            key={i}
            lat={c.lat}
            lon={c.lon}
            color={i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#818cf8" : "#f97316"}
            size={i < 5 ? 0.052 : 0.038}
          />
        ))}

        {/* Connection arcs + pulses */}
        {CONNECTIONS.map(([fi, ti], i) => (
          <ConnectionArc
            key={i}
            fromCity={CITIES[fi]}
            toCity={CITIES[ti]}
            color={ARC_COLORS[i % ARC_COLORS.length]}
            speed={0.55 + (i % 5) * 0.13}
            offset={i / CONNECTIONS.length}
          />
        ))}
      </group>
    </>
  );
}

export default function HeroR3FLayer() {
  return (
    <Canvas
      className="mx-auto h-[min(560px,88vw)] w-full touch-none md:h-[min(640px,56vw)] md:max-w-none lg:h-[min(720px,52vw)]"
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.5, 5.5], fov: 44, near: 0.1, far: 60 }}
      onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
    >
      <Suspense fallback={null}>
        <GlobeScene />
      </Suspense>
    </Canvas>
  );
}
