import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import gsap from "gsap";
import Loader from "./Loader";

function ShoeModel() {
  const { scene } = useGLTF("/3d_models/nike_air_max_akatsuki.glb");
  const group = useRef();

  useEffect(() => {
    if (group.current) {
      gsap.to(group.current.position, {
        y: -0.1,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.3} position={[0, -0.9, 0]} />
    </group>
  );
}

export default function ShoeCanvas() {
  return (
    <Canvas
      camera={{ position: [10, 0, 0], fov: 10 }}
      style={{ width: "44vw", height: "76vh" }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <Suspense fallback={<Loader />}>
        <ShoeModel />
      </Suspense>
    </Canvas>
  );
}
