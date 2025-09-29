import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import Loader from "./Loader";

function ShoeModel() {
  const { scene } = useGLTF("/3d_models/nike_air_max_akatsuki_draco.glb", true);
  const group = useRef();

  useEffect(() => {
    if (group.current) {
      const tl = gsap.timeline();
      tl.to(group.current.rotation, {
        y: Math.PI * 2,
        duration: 4,
        ease: "power2.inOut",
      });

      tl.to(
        group.current.position,
        {
          y: -0.1,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        },
        "+=0.3"
      );
    }
  }, []);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.3} position={[0, -0.9, 0]} />
    </group>
  );
}

export default function ShoeCanvas() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cameraConfig = useMemo(() => ({ position: [10, 0, 0], fov: 10 }), []);

  const canvasStyle = useMemo(
    () => ({
      width: isMobile ? "100vw" : "44vw",
      height: isMobile ? "36vh" : "76vh",
    }),
    [isMobile]
  );

  return (
    <Canvas camera={cameraConfig} style={canvasStyle}>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }
      >
        <ShoeModel />
      </Suspense>
    </Canvas>
  );
}
