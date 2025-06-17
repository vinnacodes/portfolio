import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Realistic Planet Component
const Planet = ({ position, size = 1, color, ringColor, hasRings = false }: { 
  position: [number, number, number], 
  size?: number, 
  color: string,
  ringColor?: string,
  hasRings?: boolean 
}) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      planetRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.2) * 0.002;
      planetRef.current.position.z += Math.cos(state.clock.elapsedTime * 0.15) * 0.001;
    }
    if (ringRef.current && hasRings) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group position={position}>
        {/* Planet */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial 
            color={color}
            emissive={color}
            emissiveIntensity={0.1}
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>
        
        {/* Planet Rings */}
        {hasRings && (
          <mesh ref={ringRef}>
            <torusGeometry args={[size * 1.5, size * 0.1, 8, 32]} />
            <meshStandardMaterial 
              color={ringColor || color}
              emissive={ringColor || color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        )}
        
        {/* Planet Glow */}
        <mesh>
          <sphereGeometry args={[size * 1.2, 16, 16]} />
          <meshBasicMaterial 
            color={color}
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

// Asteroid Belt
const AsteroidBelt = () => {
  const asteroids = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 15 + Math.random() * 5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 2;
      const size = 0.05 + Math.random() * 0.1;
      temp.push({ position: [x, y, z] as [number, number, number], size });
    }
    return temp;
  }, []);

  return (
    <>
      {asteroids.map((asteroid, index) => (
        <Float key={index} speed={0.5 + Math.random()} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={asteroid.position}>
            <dodecahedronGeometry args={[asteroid.size]} />
            <meshStandardMaterial 
              color="#8B7355"
              emissive="#4A3728"
              emissiveIntensity={0.1}
              roughness={0.9}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

// Distant Galaxy
const DistantGalaxy = ({ position }: { position: [number, number, number] }) => {
  const galaxyRef = useRef<THREE.Points>(null);
  
  const galaxyGeometry = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      const radius = Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 0.5;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      colors[i * 3] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
      colors[i * 3 + 2] = 1;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={galaxyRef} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={galaxyGeometry.positions.length / 3}
          array={galaxyGeometry.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={galaxyGeometry.colors.length / 3}
          array={galaxyGeometry.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        vertexColors 
        transparent 
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Space Dust
const SpaceDust = () => {
  const dustRef = useRef<THREE.Points>(null);
  
  const dustGeometry = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (dustRef.current) {
      dustRef.current.rotation.x = state.clock.elapsedTime * 0.001;
      dustRef.current.rotation.y = state.clock.elapsedTime * 0.002;
    }
  });

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dustGeometry.length / 3}
          array={dustGeometry}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.005} 
        color="#666666"
        transparent 
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      className="w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #000000, #0A0A0F, #1A0B2E)' }}
    >
      {/* Realistic space lighting */}
      <ambientLight intensity={0.1} color="#1a1a2e" />
      <pointLight position={[20, 20, 20]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-20, -20, -20]} intensity={0.3} color="#4F46E5" />
      <directionalLight position={[0, 0, 50]} intensity={0.2} color="#A855F7" />
      
      {/* Deep space stars */}
      <Stars 
        radius={200} 
        depth={100} 
        count={5000} 
        factor={6} 
        saturation={0.9} 
        fade 
        speed={0.2}
      />
      
      {/* Space dust for depth */}
      <SpaceDust />
      
      {/* Realistic planets */}
      <Planet position={[-25, 8, -30]} size={2} color="#FF6B35" hasRings={true} ringColor="#FFB347" />
      <Planet position={[30, -10, -40]} size={1.5} color="#4A90E2" />
      <Planet position={[-35, -15, -50]} size={1.8} color="#8B5A3C" hasRings={true} ringColor="#D4A574" />
      <Planet position={[40, 12, -35]} size={1.2} color="#50C878" />
      <Planet position={[-20, 20, -60]} size={0.8} color="#DA70D6" />
      
      {/* Asteroid belt */}
      <AsteroidBelt />
      
      {/* Distant galaxies */}
      <DistantGalaxy position={[-50, 0, -80]} />
      <DistantGalaxy position={[60, -20, -90]} />
      
      {/* Subtle orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.1}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 2.4}
        maxAzimuthAngle={Math.PI / 8}
        minAzimuthAngle={-Math.PI / 8}
      />
    </Canvas>
  );
};

export default Scene3D;