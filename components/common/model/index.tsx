"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

type Props = {};
const ComputerModel = (props: Props) => {
  const gltf = useLoader(GLTFLoader, "/models/retro.glb");
  const light1 = useRef<any>();

  return (
    <div className="w-full h-full border border-theme-accent-opaque aspect-square">
      <Canvas
        className=""
        camera={{
          position: [50, 70, 110],
        }}
      >
        <directionalLight
          color={"#88ced3"}
          position={[-10, 5.0, 3]}
          intensity={0.7}
          castShadow
          ref={light1}
        />
        <directionalLight
          color={"#f056c8"}
          intensity={0.7}
          position={[20, 5.0, 2]}
          castShadow
        />
        {/* <ambientLight color="#88ced3" intensity={0.1} /> */}
        <primitive
          object={gltf.scene}
          position={[0, 0, 0]}
          scale={[0.85, 0.85, 0.85]}
          children-0-castShadow
        />

        <OrbitControls />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};
export default ComputerModel;
