import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useTexture,
  Environment,
  Float,
  ContactShadows,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const CanMesh = () => {
  const canRef = useRef();
  // Grape Grind can texture
  const texture = useTexture("/images/am-hero.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);

  useFrame((state, delta) => {
    if (canRef.current) {
      canRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group>
      <mesh ref={canRef} castShadow position={[0, 0, 0]}>
        {/* Slim tall energy drink cylinder */}
        <cylinderGeometry args={[1.25, 1.25, 7.8, 128]} />
        <meshPhysicalMaterial
          map={texture}
          metalness={0.85}
          roughness={0.18}
          envMapIntensity={2}
          clearcoat={0.5}
          clearcoatRoughness={0.3}
          reflectivity={1}
          color="#ffffff"
        />
        {/* Top lid */}
        <mesh position={[0, 3.9, 0]}>
          <cylinderGeometry args={[1.05, 1.25, 0.2, 128]} />
          <meshPhysicalMaterial metalness={0.95} roughness={0.1} color="#c0c0c0" />
        </mesh>
        {/* Bottom */}
        <mesh position={[0, -3.9, 0]}>
          <cylinderGeometry args={[1.15, 1.25, 0.12, 128]} />
          <meshPhysicalMaterial metalness={0.95} roughness={0.1} color="#c0c0c0" />
        </mesh>
      </mesh>
    </group>
  );
};

export default function Can3D() {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 10, pointerEvents: "auto" }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 16], fov: 38 }}>
        {/* Very dim ambient */}
        <ambientLight intensity={0.1} />

        {/* Main key light - cool white from upper left */}
        <spotLight
          position={[-10, 12, 10]}
          angle={0.2}
          penumbra={1}
          intensity={20}
          castShadow
          color="#cce8ff"
          shadow-mapSize={[2048, 2048]}
        />

        {/* Neon cyan rim light */}
        <spotLight
          position={[10, -6, 6]}
          color="#00f5ff"
          angle={0.35}
          penumbra={1}
          intensity={25}
        />

        {/* Purple backlight for dramatic glow */}
        <spotLight
          position={[-6, -8, -10]}
          color="#9b30ff"
          angle={0.5}
          penumbra={1}
          intensity={12}
        />

        {/* Top fill */}
        <pointLight position={[0, 10, 4]} intensity={3} color="#ffffff" />
        {/* Front fill */}
        <pointLight position={[0, -4, 10]} intensity={2} color="#e8f4ff" />

        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.8}>
          <CanMesh />
        </Float>

        {/* Neon ground shadow */}
        <ContactShadows
          position={[0, -4.8, 0]}
          opacity={0.85}
          scale={18}
          blur={3.5}
          far={6}
          color="#000015"
        />

        {/* Cyan sparkles for cinematic atmosphere */}
        <Sparkles
          count={80}
          scale={16}
          size={3.5}
          speed={0.1}
          opacity={0.12}
          color="#00f5ff"
        />
        {/* Purple sparkles */}
        <Sparkles
          count={40}
          scale={14}
          size={2.5}
          speed={0.08}
          opacity={0.08}
          color="#9b30ff"
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
