import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const R = 2.5;

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

function GlobeDots() {
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let lat = -80; lat <= 80; lat += 8) {
      const count = Math.max(4, Math.round(36 * Math.cos(lat * Math.PI / 180)));
      for (let i = 0; i < count; i++) {
        const lon = -180 + (360 / count) * i;
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
      <pointsMaterial size={0.018} color="#3b82f6" sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

function GlobeGrid() {
  const lats = useMemo(() => [-60, -30, 0, 30, 60], []);
  const lons = useMemo(() => [0, 45, 90, 135, 180, -135, -90, -45], []);

  const latLines = useMemo(() =>
    lats.map((lat) => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= 64; i++) {
        const lon = -180 + (360 / 64) * i;
        const v = latLon(lat, lon, R * 1.001);
        pts.push([v.x, v.y, v.z]);
      }
      return pts;
    }), [lats]);

  const lonLines = useMemo(() =>
    lons.map((lon) => {
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= 32; i++) {
        const lat = -90 + (180 / 32) * i;
        const v = latLon(lat, lon, R * 1.001);
        pts.push([v.x, v.y, v.z]);
      }
      return pts;
    }), [lons]);

  return (
    <>
      {latLines.map((pts, i) => (
        <Line key={`lat-${i}`} points={pts} color="#1e40af" lineWidth={0.4} transparent opacity={0.18} />
      ))}
      {lonLines.map((pts, i) => (
        <Line key={`lon-${i}`} points={pts} color="#1e40af" lineWidth={0.4} transparent opacity={0.18} />
      ))}
    </>
  );
}

function CityNode({ lat, lon, color, size }: { lat: number; lon: number; color: string; size: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLon(lat, lon, R), [lat, lon]);
  const t0 = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const pulse = 0.9 + 0.12 * Math.sin(clock.elapsedTime * 1.8 + t0);
    mesh.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={mesh} position={[pos.x, pos.y, pos.z]}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2.2}
        roughness={0.1}
        metalness={0.0}
        toneMapped={false}
      />
    </mesh>
  );
}

function ConnectionArc({
  fromCity,
  toCity,
  color,
  speed,
  offset,
}: {
  fromCity: { lat: number; lon: number };
  toCity: { lat: number; lon: number };
  color: string;
  speed: number;
  offset: number;
}) {
  const a = useMemo(() => latLon(fromCity.lat, fromCity.lon, R), [fromCity]);
  const b = useMemo(() => latLon(toCity.lat, toCity.lon, R), [toCity]);
  const arcPts = useMemo(() => arcPoints(a, b, 48, 0.48), [a, b]);

  const pulseRef = useRef<THREE.Mesh>(null);
  const tRef = useRef(offset);

  useFrame(({ clock }) => {
    tRef.current = (offset + clock.elapsedTime * speed * 0.07) % 1;
    if (!pulseRef.current) return;
    const t = tRef.current;
    const idx = Math.floor(t * (arcPts.length - 1));
    const frac = t * (arcPts.length - 1) - idx;
    const p0 = arcPts[idx];
    const p1 = arcPts[Math.min(idx + 1, arcPts.length - 1)];
    pulseRef.current.position.set(
      p0[0] + (p1[0] - p0[0]) * frac,
      p0[1] + (p1[1] - p0[1]) * frac,
      p0[2] + (p1[2] - p0[2]) * frac
    );
  });

  return (
    <>
      <Line points={arcPts} color={color} lineWidth={0.8} transparent opacity={0.28} />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.036, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={3.5}
          roughness={0.0}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[R * 1.06, 48, 48]} />
      <meshStandardMaterial
        color="#1d4ed8"
        emissive="#1e40af"
        emissiveIntensity={0.18}
        transparent
        opacity={0.055}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function AtmosphereRing() {
  return (
    <mesh>
      <sphereGeometry args={[R * 1.12, 48, 48]} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#0284c7"
        emissiveIntensity={0.08}
        transparent
        opacity={0.022}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function GlobeCore() {
  return (
    <mesh>
      <sphereGeometry args={[R * 0.998, 64, 64]} />
      <meshStandardMaterial
        color="#050e1f"
        roughness={0.95}
        metalness={0.05}
      />
    </mesh>
  );
}

function Stars() {
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let i = 0; i < 900; i++) {
      const r = 8 + Math.random() * 6;
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      pos.push(
        r * Math.sin(v) * Math.cos(u),
        r * Math.sin(v) * Math.sin(u),
        r * Math.cos(v)
      );
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, []);

  return (
    <points geometry={geo}>
      <pointsMaterial size={0.035} color="#e2e8f0" sizeAttenuation transparent opacity={0.65} />
    </points>
  );
}

const ARC_COLORS = ["#38bdf8", "#818cf8", "#f97316", "#34d399", "#f472b6", "#a78bfa"];

function GlobeScene() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y = clock.elapsedTime * 0.09;
    globeRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.04;
  });

  return (
    <>
      <Stars />
      <ambientLight intensity={0.35} color="#c7d2fe" />
      <directionalLight position={[5, 4, 5]} intensity={0.6} color="#dbeafe" />
      <directionalLight position={[-4, -2, -4]} intensity={0.18} color="#1e40af" />
      <pointLight position={[3, 2, 4]} intensity={0.9} color="#38bdf8" distance={12} decay={2} />
      <pointLight position={[-3, -1, 3]} intensity={0.45} color="#818cf8" distance={10} decay={2} />

      <group ref={globeRef}>
        <GlobeCore />
        <GlobeGrid />
        <GlobeDots />
        <Atmosphere />
        <AtmosphereRing />

        {CITIES.map((c, i) => (
          <CityNode
            key={i}
            lat={c.lat}
            lon={c.lon}
            color={i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#818cf8" : "#f97316"}
            size={i < 4 ? 0.038 : 0.028}
          />
        ))}

        {CONNECTIONS.map(([fi, ti], i) => (
          <ConnectionArc
            key={i}
            fromCity={CITIES[fi]}
            toCity={CITIES[ti]}
            color={ARC_COLORS[i % ARC_COLORS.length]}
            speed={0.6 + (i % 4) * 0.15}
            offset={(i / CONNECTIONS.length)}
          />
        ))}
      </group>
    </>
  );
}

export default function HeroR3FLayer() {
  return (
    <Canvas
      className="mx-auto h-[min(640px,92vw)] w-full touch-none md:h-[min(720px,62vw)] md:max-w-none lg:h-[min(800px,58vw)]"
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.3, 4.0], fov: 52, near: 0.1, far: 60 }}
      onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
    >
      <Suspense fallback={null}>
        <GlobeScene />
      </Suspense>
    </Canvas>
  );
}
