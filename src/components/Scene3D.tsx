import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated space debris/asteroids
const SpaceDebris = ({ position, size = 0.1 }: { position: [number, number, number], size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5) * 0.001;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[size]} />
        <meshStandardMaterial 
          color="#4F46E5" 
          emissive="#1E40AF" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

// Floating energy orbs
const EnergyOrb = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

// Cosmic rings
const CosmicRing = ({ position, radius = 2 }: { position: [number, number, number], radius?: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={ringRef} position={position}>
        <torusGeometry args={[radius, 0.05, 8, 32]} />
        <meshStandardMaterial 
          color="#8B5CF6"
          emissive="#7C3AED"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

// Nebula particles
const NebulaParticles = () => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Create clustered nebula effect
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Color variation for nebula effect
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i * 3] = 0.3; colors[i * 3 + 1] = 0.5; colors[i * 3 + 2] = 1; // Blue
      } else if (colorChoice < 0.7) {
        colors[i * 3] = 0.8; colors[i * 3 + 1] = 0.4; colors[i * 3 + 2] = 1; // Purple
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0.6; colors[i * 3 + 2] = 0.8; // Pink
      }
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.positions.length / 3}
          array={particlesPosition.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesPosition.colors.length / 3}
          array={particlesPosition.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      className="w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #0F0F23, #1A0B2E, #16213E)' }}
    >
      {/* Lighting setup for space environment */}
      <ambientLight intensity={0.2} color="#4F46E5" />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#60A5FA" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#A855F7" />
      <pointLight position={[0, 0, 20]} intensity={0.4} color="#F472B6" />
      
      {/* Stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0.8} 
        fade 
        speed={0.5}
      />
      
      {/* Nebula particles */}
      <NebulaParticles />
      
      {/* Energy orbs */}
      <EnergyOrb position={[-8, 4, -5]} color="#3B82F6" />
      <EnergyOrb position={[8, -3, -8]} color="#8B5CF6" />
      <EnergyOrb position={[5, 6, -12]} color="#F472B6" />
      <EnergyOrb position={[-6, -4, -6]} color="#06B6D4" />
      
      {/* Cosmic rings */}
      <CosmicRing position={[-10, 2, -15]} radius={3} />
      <CosmicRing position={[12, -5, -20]} radius={2.5} />
      
      {/* Space debris */}
      <SpaceDebris position={[-15, 8, -10]} size={0.15} />
      <SpaceDebris position={[15, -6, -12]} size={0.12} />
      <SpaceDebris position={[8, 10, -18]} size={0.18} />
      <SpaceDebris position={[-12, -8, -14]} size={0.14} />
      <SpaceDebris position={[0, 12, -25]} size={0.16} />
      
      {/* Subtle orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.2}
        maxAzimuthAngle={Math.PI / 6}
        minAzimuthAngle={-Math.PI / 6}
      />
    </Canvas>
  );
};

export default Scene3D;