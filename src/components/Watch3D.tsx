import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function WatchModel() {
  const tourbillonRef = useRef<THREE.Group>(null);
  const handsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (tourbillonRef.current) {
      tourbillonRef.current.rotation.z = state.clock.elapsedTime * 2;
    }
    if (handsRef.current) {
      handsRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
      {/* Case */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.6, 64]} />
        <meshStandardMaterial color="#8a8d91" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Bezel */}
      <mesh position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.15, 64, 128]} />
        <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.15} />
      </mesh>

      {/* Dial */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1.85, 1.85, 0.05, 64]} />
        <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.8} />
      </mesh>

      {/* Dial Markers */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin((i * Math.PI) / 6) * 1.6, 
            0.28, 
            Math.cos((i * Math.PI) / 6) * 1.6
          ]} 
          rotation={[0, (i * Math.PI) / 6, 0]}
        >
          <boxGeometry args={[0.05, 0.02, 0.2]} />
          <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} />
        </mesh>
      ))}

      {/* Tourbillon Cutout */}
      <mesh position={[0, 0.26, -0.8]}>
        <cylinderGeometry args={[0.5, 0.5, 0.06, 32]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* Tourbillon Gear */}
      <group position={[0, 0.27, -0.8]} rotation={[-Math.PI / 2, 0, 0]} ref={tourbillonRef}>
        <mesh>
          <torusGeometry args={[0.3, 0.05, 16, 32]} />
          <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.6, 0.05, 0.05]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.6, 0.05, 0.05]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Hands */}
      <group position={[0, 0.3, 0]} ref={handsRef}>
        {/* Minute Hand */}
        <mesh position={[0, 0.02, 0.4]}>
          <boxGeometry args={[0.05, 0.02, 1.2]} />
          <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Hour Hand */}
        <mesh position={[0, 0.04, 0.2]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.08, 0.02, 0.8]} />
          <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Center Pin */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
          <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.1} />
        </mesh>
      </group>

      {/* Crown */}
      <mesh position={[2.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 0.3, 32]} />
        <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} />
      </mesh>

      {/* Lugs */}
      <mesh position={[1.2, 0, -2.2]} rotation={[0, Math.PI / 6, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.8]} />
        <meshStandardMaterial color="#8a8d91" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-1.2, 0, -2.2]} rotation={[0, -Math.PI / 6, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.8]} />
        <meshStandardMaterial color="#8a8d91" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[1.2, 0, 2.2]} rotation={[0, -Math.PI / 6, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.8]} />
        <meshStandardMaterial color="#8a8d91" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-1.2, 0, 2.2]} rotation={[0, Math.PI / 6, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.8]} />
        <meshStandardMaterial color="#8a8d91" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Glass */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[1.88, 1.88, 0.1, 64]} />
        <meshPhysicalMaterial 
          transmission={1} 
          opacity={1} 
          transparent 
          roughness={0} 
          ior={1.5} 
          thickness={0.5} 
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function Watch3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing relative rounded-2xl overflow-hidden border border-[#F5F2ED]/10 bg-[#050505]">
      <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></div>
        <div className="text-xs tracking-widest uppercase text-[#C5A059]">
          Interactive 360° View
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-10 text-[10px] tracking-widest uppercase text-[#F5F2ED]/40">
        Drag to rotate • Scroll to zoom
      </div>
      <Canvas shadows camera={{ position: [0, 5, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <WatchModel />
        </Float>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={4} 
          maxDistance={12} 
          autoRotate 
          autoRotateSpeed={1} 
        />
      </Canvas>
    </div>
  );
}
