import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';
import { ProjectCube, NeuralSphere, HologramPanel, TrophyPod } from './AIWorkspace';
import NeuralNetworkBackground from './NeuralNetworkBackground';

// Camera Controller for smooth movement
function CameraController({ currentPosition }) {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(0, 0, 8));

  useFrame(() => {
    // Smooth camera movement
    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Grid Floor
function GridFloor() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {/* Main grid */}
      <gridHelper args={[50, 50, '#00f3ff', '#bc13fe']} position={[0, -2, 0]} />
      
      {/* Glowing plane underneath */}
      <mesh position={[0, -2.1, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          color="#0a0a0f"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

// Ambient Particles
function AmbientParticles() {
  const particlesRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 30;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f3ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main Immersive Scene
function ImmersiveScene() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: 'Discount Calculator', 
      description: 'Web-based calculator for online shopping',
      tech: ['HTML', 'CSS', 'JS'],
      color: '#667eea',
      position: [-4, 0, -3]
    },
    { 
      title: 'Object Detection AI', 
      description: 'Real-time object detection using YOLO',
      tech: ['Python', 'YOLO', 'OpenCV'],
      color: '#f093fb',
      position: [0, 0, -4]
    },
    { 
      title: 'Face Recognition Login', 
      description: 'Secure authentication with facial recognition',
      tech: ['Python', 'OpenCV', 'ML'],
      color: '#4facfe',
      position: [4, 0, -3]
    },
  ];

  const achievements = [
    { title: 'D4 Club Core Member', icon: '🎯', position: [-5, 1, 2] },
    { title: 'Hack N Win Coordinator', icon: '🏆', position: [-3, 1.5, 3] },
    { title: 'Smart India Hackathon', icon: '🇮🇳', position: [3, 1.5, 3] },
    { title: 'Coding Competitions', icon: '💻', position: [5, 1, 2] },
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
      <spotLight position={[0, 15, 0]} intensity={1} angle={0.5} penumbra={1} />
      
      {/* Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <NeuralNetworkBackground />
      <AmbientParticles />
      <GridFloor />
      
      {/* Central Character Area */}
      <group position={[0, -1, 0]}>
        {/* Placeholder for character - will be enhanced */}
        <pointLight position={[0, 2, 0]} intensity={2} color="#00f3ff" distance={5} />
      </group>
      
      {/* Project Cubes */}
      {projects.map((project, index) => (
        <ProjectCube
          key={index}
          position={project.position}
          title={project.title}
          description={project.description}
          tech={project.tech}
          color={project.color}
          onClick={() => setSelectedProject(project)}
        />
      ))}
      
      {/* Neural Sphere (Skills) */}
      <NeuralSphere position={[0, 2, 0]} />
      
      {/* Hologram Panel (About) */}
      <HologramPanel position={[0, 0, 3]} />
      
      {/* Trophy Pods (Achievements) */}
      {achievements.map((achievement, index) => (
        <TrophyPod
          key={index}
          position={achievement.position}
          title={achievement.title}
          icon={achievement.icon}
        />
      ))}
      
      {/* Post Processing Effects */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.9} intensity={1.5} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Noise opacity={0.05} />
      </EffectComposer>
      
      {/* Camera Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default ImmersiveScene;
