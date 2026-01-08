"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function PetalField() {
  const count = 150;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Randomized positions, rotations, speeds
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: (Math.random() - 0.5) * 10,
        y: Math.random() * 8 - 4,
        z: (Math.random() - 0.5) * 10,
        rot: Math.random() * Math.PI,
        speed: 0.002 + Math.random() * 0.002,
      })),
    [count]
  );

  useFrame(() => {
    if (!mesh.current) return;
    petals.forEach((p, i) => {
      p.y -= p.speed;
      p.rot += p.speed * 4;
      if (p.y < -5) p.y = 5;

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rot, p.rot * 0.3, p.rot * 0.8);
      dummy.scale.setScalar(0.15 + Math.random() * 0.1);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <planeGeometry args={[0.3, 0.2]} />
      <meshStandardMaterial color="#eabfff" side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

export default function PetalsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />
        <Suspense fallback={null}>
          <PetalField />
        </Suspense>
      </Canvas>
    </div>
  );
}
