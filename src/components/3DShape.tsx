
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// This is the actual 3D shape component that will be rendered inside the Canvas
const Shape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color={new THREE.Color("#7f5af0")}
        emissive={new THREE.Color("#300080")}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

interface ShapeCanvasProps {
  className?: string;
}

// This is the main component that will be imported into other components
const ShapeCanvas = ({ className }: ShapeCanvasProps) => {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 3] }}
        gl={{ 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Shape />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default ShapeCanvas;
