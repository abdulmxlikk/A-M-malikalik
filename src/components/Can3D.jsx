import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useTexture,
  Environment,
  Float,
  ContactShadows,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const CanMesh = () => {
  const canRef = useRef();
  // We use the provided image as the cylinder texture
  const texture = useTexture("/images/am-hero.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);

  useFrame((state, delta) => {
    // Smooth, slow continuous rotation (left to right)
    if (canRef.current) {
      canRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group>
      <mesh ref={canRef} castShadow position={[0, 0, 0]}>
        {/* Tall slim cylinder shape for energy drink */}
        <cylinderGeometry args={[1.3, 1.3, 7.5, 64]} />
        <meshPhysicalMaterial
          map={texture}
          metalness={0.8}     // High metalness for premium look
          roughness={0.2}     // Low roughness for glossy finish
          envMapIntensity={1.5}
          clearcoat={0.3}     // Adds the glossy "wet" look for condensation simulation
          clearcoatRoughness={0.4}
          color="#ffffff"
        />
        {/* Can Top (Metallic) */}
        <mesh position={[0, 3.75, 0]}>
          <cylinderGeometry args={[1.3, 1.3, 0.05, 64]} />
          <meshStandardMaterial metalness={0.9} roughness={0.15} color="#d4d4d4" />
        </mesh>
        {/* Can Bottom (Metallic) */}
        <mesh position={[0, -3.75, 0]}>
          <cylinderGeometry args={[1.3, 1.3, 0.05, 64]} />
          <meshStandardMaterial metalness={0.9} roughness={0.15} color="#d4d4d4" />
        </mesh>
      </mesh>
    </group>
  );
};

export default function Can3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        pointerEvents: "auto", // Ensure interaction works everywhere
      }}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 16], fov: 40 }}>
        {/* Ambient lighting - very dim for dramatic studio effect */}
        <ambientLight intensity={0.15} />

        {/* Soft white studio rim light on the left */}
        <spotLight
          position={[-12, 10, 8]}
          angle={0.25}
          penumbra={1}
          intensity={15} // Adjusted for physical lighting
          castShadow
          color="#ffffff"
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Intense Red glow on the right side */}
        <spotLight
          position={[12, -5, 5]}
          color="#ff0022"
          angle={0.4}
          penumbra={1}
          intensity={20}
        />
        
        {/* Subtle top fill light */}
        <pointLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
        {/* Soft fill light from bottom front */}
        <pointLight position={[0, -5, 8]} intensity={1.5} color="#ffffff" />

        <PresentationControls
          global
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }} // Snap back to center beautifully
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 12, Math.PI / 12]} // Subtle up/down tilt limitation
          azimuth={[-Math.PI / 3, Math.PI / 3]} // Subtle left/right tilt limitations
        >
          <Float
            speed={1.5} // Slow, premium floating animation speed
            rotationIntensity={0.2} // Very subtle rotation intensity for parallax
            floatIntensity={0.7} // Up/down float bounds
          >
            <CanMesh />
          </Float>
        </PresentationControls>

        {/* Ultra-realistic shadow under the can / floor reflection */}
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.9}
          scale={20}
          blur={3}
          far={6}
          color="#000000"
        />

        {/* Very subtle floating dust/smoke to give a dense studio atmosphere */}
        <Sparkles 
          count={60} 
          scale={14} 
          size={4} 
          speed={0.15} 
          opacity={0.15} 
          color="#ffffff" 
        />

        {/* Studio environment for realistic metallic reflections */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
