"use client";
import { Canvas, PrimitiveProps, useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MutableRefObject,  useRef } from "react";
import { useObjectMovement } from "@/hooks/useMouse";
import { DirectionalLight } from "three";
const ComputerModel = () => {
  // change  gltf file to url
  const glbpath = "/models/retro.glb";
  useLoader.preload(GLTFLoader, glbpath /* extensions */)
  const gltf = useLoader(GLTFLoader, glbpath);
  const object: MutableRefObject<PrimitiveProps> =
    useRef() as MutableRefObject<PrimitiveProps>;
  const primaryLight: MutableRefObject<DirectionalLight> =
    useRef<DirectionalLight>() as MutableRefObject<DirectionalLight>;
  const accentLight: MutableRefObject<DirectionalLight> =
    useRef<DirectionalLight>() as MutableRefObject<DirectionalLight>;
  useObjectMovement(object);
  return (
    <div className="w-full mt-auto aspect-square">
      <Canvas

        camera={{
          position: [50, 50, 110],
        }}
      >
        <directionalLight
          color={"#88ced3"}
          position={[-20,0,10]}
          intensity={1}
          castShadow
          ref={primaryLight}
        />
        <directionalLight
          color={"#f056c8"}
          intensity={1}
          position={[20, 0,10]}
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
    </div>
  );
};
export default ComputerModel;
