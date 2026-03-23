import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Html, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Character({ mousePosition }) {
  const groupRef = useRef();
  const headRef = useRef();
  const bodyRef = useRef();
  const laptopRef = useRef();
  
  // Get viewport for responsive sizing
  const { size } = useThree();
  const isMobile = size.width < 768;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Breathing animation
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.sin(time * 0.5) * 0.05;
    }
    
    // Head tracking mouse
    if (headRef.current && mousePosition) {
      const targetX = mousePosition.x * 0.3;
      const targetY = mousePosition.y * 0.2;
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetX,
        0.05
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -targetY,
        0.05
      );
    }
    
    // Laptop subtle movement
    if (laptopRef.current) {
      laptopRef.current.rotation.x = Math.sin(time * 0.3) * 0.02 + 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[isMobile ? 0 : 2.5, -1, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Body */}
        <group ref={bodyRef} position={[0, 0, 0]}>
          {/* Torso */}
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.8, 1, 0.4]} />
            <meshStandardMaterial 
              color="#1a1a2e" 
              emissive="#667eea"
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Glowing chest piece */}
          <mesh position={[0, 0.7, 0.21]}>
            <circleGeometry args={[0.15, 32]} />
            <meshBasicMaterial color="#00f3ff" transparent opacity={0.8} />
          </mesh>
        </group>

        {/* Head with mouse tracking */}
        <group ref={headRef} position={[0, 1.3, 0]}>
          {/* Head base */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshStandardMaterial 
              color="#2a2a3e" 
              emissive="#bc13fe"
              emissiveIntensity={0.2}
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          
          {/* Visor/Eyes */}
          <mesh position={[0, 0.05, 0.28]}>
            <boxGeometry args={[0.25, 0.08, 0.05]} />
            <meshBasicMaterial color="#00f3ff" />
          </mesh>
          
          {/* Neural network pattern on head */}
          <mesh position={[0, -0.1, 0.3]}>
            <torusGeometry args={[0.12, 0.02, 16, 32]} />
            <meshBasicMaterial color="#bc13fe" transparent opacity={0.6} />
          </mesh>
        </group>

        {/* Arms holding laptop */}
        <group position={[0.5, 0.5, 0.3]}>
          <mesh rotation={[0.3, 0, 0.5]}>
            <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
            <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
        
        <group position={[-0.5, 0.5, 0.3]}>
          <mesh rotation={[0.3, 0, -0.5]}>
            <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
            <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
          </mesh>
        </group>

        {/* Laptop */}
        <group ref={laptopRef} position={[0, 0.3, 0.5]}>
          {/* Base */}
          <mesh rotation={[-0.2, 0, 0]}>
            <boxGeometry args={[0.7, 0.02, 0.45]} />
            <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.1} />
          </mesh>
          
          {/* Screen */}
          <mesh position={[0, 0.15, -0.2]} rotation={[0.2, 0, 0]}>
            <boxGeometry args={[0.65, 0.3, 0.02]} />
            <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
          </mesh>
          
          {/* Glowing screen */}
          <mesh position={[0, 0.15, -0.19]}>
            <planeGeometry args={[0.6, 0.25]} />
            <meshBasicMaterial color="#667eea" transparent opacity={0.6} />
          </mesh>
          
          {/* Keyboard glow */}
          <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.65, 0.4]} />
            <meshBasicMaterial color="#00f3ff" transparent opacity={0.3} />
          </mesh>
        </group>

        {/* Floating holographic screens */}
        <group position={[0.8, 0.8, 0.5]}>
          <mesh rotation={[0, -0.3, 0]}>
            <planeGeometry args={[0.6, 0.4]} />
            <meshBasicMaterial color="#bc13fe" transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>
          <Html distanceFactor={10}>
            <div style={{
              background: 'rgba(188, 19, 254, 0.2)',
              border: '1px solid #bc13fe',
              borderRadius: '8px',
              padding: '8px',
              color: '#fff',
              fontSize: '8px',
              fontFamily: 'monospace',
              width: '120px'
            }}>
              {'{'}Code:{'}'} AI_Systems
            </div>
          </Html>
        </group>

        <group position={[0.9, 0.3, 0.3]} rotation={[0, 0.5, 0]}>
          <mesh>
            <planeGeometry args={[0.5, 0.35]} />
            <meshBasicMaterial color="#00f3ff" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
          <Html distanceFactor={10}>
            <div style={{
              background: 'rgba(0, 243, 255, 0.2)',
              border: '1px solid #00f3ff',
              borderRadius: '8px',
              padding: '8px',
              color: '#fff',
              fontSize: '8px',
              fontFamily: 'monospace',
              width: '100px'
            }}>
              ML Models: Active
            </div>
          </Html>
        </group>

        {/* Particle effect around character */}
        <ParticleEffect count={50} color="#00f3ff" />
      </Float>
    </group>
  );
}

// Helper component for particles
function ParticleEffect({ count, color }) {
  const pointsRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.2;
    }
  });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 3;
    }
    return pos;
  }, [count]);

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default Character;
