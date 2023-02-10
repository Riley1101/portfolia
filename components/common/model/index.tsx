"use client";
import { Canvas, PrimitiveProps, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { MutableRefObject, Ref, useRef } from "react";
import { useObjectMovement } from "hooks/useMouse";
import { DirectionalLight } from "three";

type Props = {};
const ComputerModel = (props: Props) => {
  // change  gltf file to url
  const gltf = useLoader(GLTFLoader, "/models/retro.glb");
  const object: MutableRefObject<PrimitiveProps> =
    useRef() as MutableRefObject<PrimitiveProps>;
  const primaryLight: MutableRefObject<DirectionalLight> =
    useRef<DirectionalLight>() as MutableRefObject<DirectionalLight>;
  const accentLight: MutableRefObject<DirectionalLight> =
    useRef<DirectionalLight>() as MutableRefObject<DirectionalLight>;
  const control: any = useRef();
  useObjectMovement(object, primaryLight, accentLight);
  return (
    <div className="w-full mt-auto border border-theme-accent-opaque aspect-square">
      <Canvas
        className=""
        camera={{
          position: [50, 50, 110],
        }}
      >
        <directionalLight
          color={"#88ced3"}
          position={[-10, 5.0, 3]}
          intensity={0.7}
          castShadow
          ref={primaryLight}
        />
        <directionalLight
          color={"#f056c8"}
          intensity={0.7}
          position={[20, 5.0, 2]}
          castShadow
          ref={accentLight}
        />
        {/* <ambientLight color="#88ced3" intensity={0.1} /> */}
        <primitive
          ref={object}
          object={gltf.scene}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          children-0-castShadow
        />

        <OrbitControls ref={control} />
      </Canvas>
    </div>
  );
};
export default ComputerModel;
