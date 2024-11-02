"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { DirectionalLight } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useObjectMovement } from "@/hooks/useMouse";
import { useRef, useEffect, useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_DOMAIN;
const glbpath = baseURL + "/models/retro.glb";

const ComputerModel = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const accentLight = useRef<DirectionalLight>(undefined);
  const gltf = useLoader(GLTFLoader, glbpath);
  const object = useRef(undefined);
  const primaryLight = useRef<DirectionalLight>(undefined);
  useLoader.preload(GLTFLoader, glbpath);
  useObjectMovement(object);

  useEffect(() => {
    if (typeof window !== undefined) {
      setShowModel(true);
    }
  }, []);

  return (
    <div className="w-full mt-auto aspect-square">
      {showModel && (
        <Canvas
          camera={{
            position: [50, 50, 110],
          }}
        >
          <directionalLight
            color={"#88ced3"}
            position={[-20, 0, 10]}
            intensity={1}
            castShadow
            ref={primaryLight}
          />
          <directionalLight
            color={"#f056c8"}
            intensity={1}
            position={[20, 0, 10]}
            castShadow
            ref={accentLight}
          />
          <primitive
            ref={object}
            object={gltf.scene}
            position={[0, 0, 0]}
            scale={[1.5, 1.5, 1.5]}
            children-0-castShadow
          />
        </Canvas>
      )}
    </div>
  );
};
export default ComputerModel;
