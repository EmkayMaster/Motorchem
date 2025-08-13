"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Sparkles } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <p className="text-white">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

function AnimatedOilDrop() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={[1.5, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.95}
            emissive="#b8860b"
            emissiveIntensity={0.2}
          />
        </mesh>
        <Sparkles count={15} scale={1.5} size={2} speed={0.5} color="#ffd700" />
      </group>
    </Float>
  )
}

function EnhancedPiston() {
  const pistonRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (pistonRef.current) {
      pistonRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={pistonRef} position={[-1.5, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
          <meshStandardMaterial
            color="#dc2626"
            metalness={0.95}
            roughness={0.05}
            emissive="#991b1b"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.6, 32]} />
          <meshStandardMaterial
            color="#b91c1c"
            metalness={0.95}
            roughness={0.05}
            emissive="#7f1d1d"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
          <meshStandardMaterial color="#4a5568" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#dc2626" />
      <pointLight position={[-3, -3, -3]} intensity={0.8} color="#ffd700" />
      <spotLight position={[5, 5, 5]} angle={0.2} penumbra={1} intensity={1.2} color="#ffffff" />

      <AnimatedOilDrop />
      <EnhancedPiston />

      <Environment preset="warehouse" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
