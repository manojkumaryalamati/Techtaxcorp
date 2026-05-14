import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const R = 2.8;

/* ─── Major city nodes ─── */
const CITIES: { lat: number; lon: number }[] = [
  { lat: 40.7, lon: -74.0 },   // New York
  { lat: 51.5, lon: -0.1 },    // London
  { lat: 48.9, lon: 2.3 },     // Paris
  { lat: 35.7, lon: 139.7 },   // Tokyo
  { lat: 22.3, lon: 114.2 },   // Hong Kong
  { lat: 19.1, lon: 72.9 },    // Mumbai
  { lat: 1.35, lon: 103.8 },   // Singapore
  { lat: -33.9, lon: 151.2 },  // Sydney
  { lat: 37.8, lon: -122.4 },  // San Francisco
  { lat: 25.2, lon: 55.3 },    // Dubai
  { lat: 55.8, lon: 37.6 },    // Moscow
  { lat: -23.5, lon: -46.6 },  // São Paulo
  { lat: 28.6, lon: 77.2 },    // Delhi
  { lat: -1.3, lon: 36.8 },    // Nairobi
  { lat: 39.9, lon: 116.4 },   // Beijing
  { lat: 41.0, lon: 28.9 },    // Istanbul
  { lat: 31.2, lon: 121.5 },   // Shanghai
  { lat: -26.2, lon: 28.0 },   // Johannesburg
];

const CONNECTIONS = [
  [0, 1], [1, 4], [4, 3], [3, 7],
  [5, 4], [5, 9], [1, 10], [0, 11],
  [6, 5], [8, 0], [9, 1], [12, 5],
  [13, 9], [2, 1], [4, 6], [14, 3],
  [15, 1], [16, 14], [17, 13], [10, 15],
  [0, 2], [8, 11], [5, 12],
];

const ARC_COLORS = [
  "#38bdf8", "#818cf8", "#f97316",
  "#34d399", "#f472b6", "#a78bfa", "#facc15",
];

function latLon(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const th  = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(th),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(th),
  );
}

function arcPoints(
  a: THREE.Vector3, b: THREE.Vector3, segs: number, lift: number,
): [number, number, number][] {
  const pts: [number, number, number][] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const v = new THREE.Vector3().lerpVectors(a, b, t).normalize();
    v.multiplyScalar(R + Math.sin(t * Math.PI) * lift);
    pts.push([v.x, v.y, v.z]);
  }
  return pts;
}

/* ─── Dense dot surface (landmass-style) ─── */
function GlobeDots() {
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let lat = -80; lat <= 80; lat += 5.5) {
      const cols = Math.max(6, Math.round(72 * Math.cos(lat * Math.PI / 180)));
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
        size={0.022}
        color="#7dd3fc"
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Lat / lon grid lines ─── */
function GlobeGrid() {
  const latLines = useMemo(() =>
    [-60, -30, 0, 30, 60].map(lat => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= 96; i++) {
        const lon = -180 + (360 / 96) * i;
        const v = latLon(lat, lon, R * 1.001);
        pts.push([v.x, v.y, v.z]);
      }
      return pts;
    }), []);

  const lonLines = useMemo(() =>
    [0, 30, 60, 90, 120, 150, 180, -150, -120, -90, -60, -30].map(lon => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= 48; i++) {
        const lat = -90 + (180 / 48) * i;
        const v = latLon(lat, lon, R * 1.001);
        pts.push([v.x, v.y, v.z]);
      }
      return pts;
    }), []);

  return (
    <>
      {latLines.map((pts, i) => (
        <Line key={`la${i}`} points={pts} color="#3b82f6" lineWidth={0.5} transparent opacity={0.22} />
      ))}
      {lonLines.map((pts, i) => (
        <Line key={`lo${i}`} points={pts} color="#3b82f6" lineWidth={0.5} transparent opacity={0.22} />
      ))}
    </>
  );
}

/* ─── Glowing city node with pulse ring ─── */
function CityNode({ lat, lon, color, size }: {
  lat: number; lon: number; color: string; size: number;
}) {
  const core  = useRef<THREE.Mesh>(null);
  const ring  = useRef<THREE.Mesh>(null);
  const pos   = useMemo(() => latLon(lat, lon, R), [lat, lon]);
  const seed  = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (core.current) {
      core.current.scale.setScalar(0.85 + 0.18 * Math.sin(t * 1.6 + seed));
    }
    if (ring.current) {
      const rs = 1 + 0.6 * ((Math.sin(t * 1.1 + seed) + 1) / 2);
      ring.current.scale.setScalar(rs);
      (ring.current.material as THREE.MeshStandardMaterial).opacity =
        0.55 * (1 - ((Math.sin(t * 1.1 + seed) + 1) / 2) * 0.85);
    }
  });

  return (
    <group position={[pos.x, pos.y, pos.z]}>
      <mesh ref={ring}>
        <sphereGeometry args={[size * 3.2, 8, 8]} />
        <meshStandardMaterial
          color={color} emissive={color} emissiveIntensity={1.2}
          transparent opacity={0.5} depthWrite={false}
        />
      </mesh>
      <mesh ref={core}>
        <sphereGeometry args={[size, 10, 10]} />
        <meshStandardMaterial
          color={color} emissive={color} emissiveIntensity={5}
          roughness={0} metalness={0} toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ─── Animated connection arc with travelling pulse ─── */
function ConnectionArc({ fromCity, toCity, color, speed, offset }: {
  fromCity: { lat: number; lon: number };
  toCity:   { lat: number; lon: number };
  color: string; speed: number; offset: number;
}) {
  const a   = useMemo(() => latLon(fromCity.lat, fromCity.lon, R), [fromCity]);
  const b   = useMemo(() => latLon(toCity.lat,   toCity.lon,   R), [toCity]);
  const pts = useMemo(() => arcPoints(a, b, 72, 0.7), [a, b]);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = ((offset + clock.elapsedTime * speed * 0.055) % 1 + 1) % 1;
    if (!ref.current) return;
    const raw = t * (pts.length - 1);
    const idx = Math.floor(raw);
    const frac = raw - idx;
    const p0 = pts[idx], p1 = pts[Math.min(idx + 1, pts.length - 1)];
    ref.current.position.set(
      p0[0] + (p1[0] - p0[0]) * frac,
      p0[1] + (p1[1] - p0[1]) * frac,
      p0[2] + (p1[2] - p0[2]) * frac,
    );
  });

  return (
    <>
      <Line points={pts} color={color} lineWidth={1.4} transparent opacity={0.4} />
      <mesh ref={ref}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial
          color={color} emissive={color} emissiveIntensity={6}
          roughness={0} toneMapped={false}
        />
      </mesh>
    </>
  );
}

/* ─── Dark inner sphere (occludes stars through globe) ─── */
function GlobeInner() {
  return (
    <mesh>
      <sphereGeometry args={[R * 0.97, 64, 64]} />
      <meshStandardMaterial color="#02091a" roughness={1} metalness={0} />
    </mesh>
  );
}

/* ─── Multi-layer atmospheric glow ─── */
function Atmosphere() {
  return (
    <>
      {[1.035, 1.07, 1.12].map((s, i) => (
        <mesh key={i}>
          <sphereGeometry args={[R * s, 48, 48]} />
          <meshStandardMaterial
            color={i === 0 ? "#1d4ed8" : i === 1 ? "#0ea5e9" : "#6366f1"}
            emissive={i === 0 ? "#1e40af" : i === 1 ? "#0284c7" : "#4f46e5"}
            emissiveIntensity={0.35 - i * 0.08}
            transparent
            opacity={0.07 - i * 0.016}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
}

/* ─── Background star field ─── */
function Stars() {
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let i = 0; i < 1800; i++) {
      const r = 11 + Math.random() * 7;
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
      <pointsMaterial size={0.05} color="#e2e8f0" sizeAttenuation transparent opacity={0.75} depthWrite={false} />
    </points>
  );
}

/* ─── Full scene ─── */
function GlobeScene() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y = clock.elapsedTime * 0.07;
    globeRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.09) * 0.04;
  });

  return (
    <>
      <Stars />

      <ambientLight intensity={0.1} color="#c7d2fe" />
      <directionalLight position={[8, 6, 10]} intensity={0.5} color="#bfdbfe" />
      <pointLight position={[6, 4, 8]}  intensity={1.8} color="#38bdf8" distance={24} decay={2} />
      <pointLight position={[-6, -3, 5]} intensity={0.9} color="#6366f1" distance={18} decay={2} />
      <pointLight position={[0, 8, -6]} intensity={0.6} color="#818cf8" distance={18} decay={2} />

      <group ref={globeRef}>
        <GlobeInner />
        <GlobeGrid />
        <GlobeDots />
        <Atmosphere />

        {CITIES.map((c, i) => (
          <CityNode
            key={i} lat={c.lat} lon={c.lon}
            color={i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#818cf8" : "#f97316"}
            size={i < 6 ? 0.058 : 0.042}
          />
        ))}

        {CONNECTIONS.map(([fi, ti], i) => (
          <ConnectionArc
            key={i}
            fromCity={CITIES[fi]} toCity={CITIES[ti]}
            color={ARC_COLORS[i % ARC_COLORS.length]}
            speed={0.5 + (i % 6) * 0.12}
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
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.8, 6.8], fov: 50, near: 0.1, far: 80 }}
      onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
    >
      <Suspense fallback={null}>
        <GlobeScene />
      </Suspense>
    </Canvas>
  );
}
