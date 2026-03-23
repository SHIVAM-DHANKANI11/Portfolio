import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

// Project Cube Component
function ProjectCube({ position, title, description, tech, color, onClick }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      
      // Hover effect
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Cube */}
        <mesh 
          ref={meshRef}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color={hovered ? '#00f3ff' : color}
            emissive={hovered ? '#00f3ff' : color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Glow effect */}
        {hovered && (
          <pointLight distance={5} intensity={2} color="#00f3ff" />
        )}
        
        {/* Label */}
        <Html distanceFactor={10} position={[0, -1.5, 0]}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid #00f3ff',
            borderRadius: '8px',
            padding: '8px',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)'
          }}>
            {title}
          </div>
        </Html>
      </group>
    </Float>
  );
}

// Neural Sphere for Skills
function NeuralSphere({ position }) {
  const groupRef = useRef();
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);

  const skills = [
    { name: 'Python', angle: 0, radius: 1.2 },
    { name: 'ML', angle: 60, radius: 1.2 },
    { name: 'YOLO', angle: 120, radius: 1.2 },
    { name: 'OpenCV', angle: 180, radius: 1.2 },
    { name: 'Git', angle: 240, radius: 1.2 },
    { name: 'Web', angle: 300, radius: 1.2 },
  ];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
    }
    if (sphereRef.current) {
      sphereRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        sphereRef.current.material.emissiveIntensity,
        hovered ? 0.8 : 0.3,
        0.1
      );
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Main Sphere */}
        <mesh 
          ref={sphereRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#bc13fe"
            emissive="#bc13fe"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* Wireframe overlay */}
        <mesh>
          <sphereGeometry args={[1.05, 16, 16]} />
          <meshBasicMaterial
            color="#00f3ff"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        
        {/* Skill Nodes */}
        {skills.map((skill) => {
          const x = Math.cos(skill.angle * Math.PI / 180) * skill.radius;
          const z = Math.sin(skill.angle * Math.PI / 180) * skill.radius;
          return (
            <group key={skill.name} position={[x, 0, z]}>
              <mesh>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshBasicMaterial color="#00f3ff" />
              </mesh>
              <Html distanceFactor={10}>
                <div style={{
                  background: 'rgba(0, 243, 255, 0.2)',
                  border: '1px solid #00f3ff',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  color: '#fff',
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  whiteSpace: 'nowrap'
                }}>
                  {skill.name}
                </div>
              </Html>
            </group>
          );
        })}
        
        {/* Connection lines */}
        {skills.map((skill, i) => {
          const nextSkill = skills[(i + 1) % skills.length];
          const x1 = Math.cos(skill.angle * Math.PI / 180) * skill.radius;
          const z1 = Math.sin(skill.angle * Math.PI / 180) * skill.radius;
          const x2 = Math.cos(nextSkill.angle * Math.PI / 180) * nextSkill.radius;
          const z2 = Math.sin(nextSkill.angle * Math.PI / 180) * nextSkill.radius;
          
          return (
            <line key={i}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([x1, 0, z1, x2, 0, z2])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#00f3ff" transparent opacity={0.4} />
            </line>
          );
        })}
      </group>
    </Float>
  );
}

// Hologram Panel for About
function HologramPanel({ position }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Hologram Screen */}
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial
          color="#00f3ff"
          transparent
          opacity={hovered ? 0.6 : 0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Scan lines */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, -0.8 + i * 0.4, 0.01]}>
          <planeGeometry args={[2.8, 0.02]} />
          <meshBasicMaterial color="#fff" transparent opacity={0.3} />
        </mesh>
      ))}
      
      {/* Border glow */}
      <line>
        <edgesGeometry args={[new THREE.PlaneGeometry(3, 2)]} />
        <lineBasicMaterial color="#00f3ff" linewidth={2} />
      </line>
      
      {/* Info text */}
      <Html distanceFactor={8} position={[0, 0, 0.1]}>
        <div style={{
          width: '280px',
          textAlign: 'center',
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: '11px',
          lineHeight: '1.6',
          textShadow: '0 0 10px #00f3ff'
        }}>
          <strong>SHIVAM DHANKANI</strong><br/>
          CS Student | AI/ML Enthusiast<br/>
          Chandigarh Group of Colleges<br/>
          CGPA: 8.33
        </div>
      </Html>
    </group>
  );
}

// Trophy Pod for Achievements
function TrophyPod({ position, title, icon }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Base */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.2, 16]} />
          <meshStandardMaterial color="#bc13fe" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Trophy */}
        <mesh 
          ref={meshRef}
          position={[0, 0.2, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <torusGeometry args={[0.2, 0.05, 16, 32]} />
          <meshStandardMaterial 
            color={hovered ? '#ffd700' : '#ff1493'} 
            emissive={hovered ? '#ffd700' : '#ff1493'}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={1}
            roughness={0.1}
          />
        </mesh>
        
        {/* Icon */}
        <Html distanceFactor={10} position={[0, 0.5, 0]}>
          <div style={{
            fontSize: '24px',
            filter: `drop-shadow(0 0 10px ${hovered ? '#ffd700' : '#ff1493'})`
          }}>
            {icon}
          </div>
        </Html>
        
        {/* Label */}
        <Html distanceFactor={10} position={[0, -0.6, 0]}>
          <div style={{
            background: 'rgba(255, 20, 147, 0.2)',
            border: '1px solid #ff1493',
            borderRadius: '8px',
            padding: '6px',
            color: '#fff',
            fontSize: '10px',
            fontFamily: 'monospace',
            maxWidth: '150px',
            textAlign: 'center'
          }}>
            {title}
          </div>
        </Html>
      </group>
    </Float>
  );
}

export { ProjectCube, NeuralSphere, HologramPanel, TrophyPod };
