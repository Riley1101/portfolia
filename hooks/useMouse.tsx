import { PrimitiveProps } from "@react-three/fiber";
import { useEffect, useState, MutableRefObject } from "react";
import { DirectionalLight } from "three";
// ! WIP
function getMouseDegrees(x: number, y: number, degreeLimit: number) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

  let w = { x: window.innerWidth, y: window.innerHeight };

  // Left (Rotates neck left between 0 and -degreeLimit)
  // 1. If cursor is in the left half of screen
  if (x <= w.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = w.x / 2 - x;
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xdiff / (w.x / 2)) * 100;
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }

  // Right (Rotates neck right between 0 and degreeLimit)
  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }
  // Up (Rotates neck up between 0 and -degreeLimit)
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    // Note that I cut degreeLimit in half when she looks up
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
  }
  // Down (Rotates neck down between 0 and degreeLimit)
  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }
  return { x: dx, y: dy };
}

export const useObjectMovement = (
  object: MutableRefObject<PrimitiveProps>,
  primaryLight: MutableRefObject<DirectionalLight>,
  accentLight: MutableRefObject<DirectionalLight>,
) => {
  // const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
  //   x: 0,
  //   y: 0,
  // });

  const rotateModel = (evt: MouseEvent) => {
    const { x, y } = {
      x: 0,
      y: 0,
    };
    const { x: dx, y: dy } = getMouseDegrees(evt.clientX, evt.clientY, 10);
    if (object.current === undefined) return;
    if (x !== dx || y !== dy) {
      object.current.rotation.y = -(dx * Math.PI) / 180;
      object.current.rotation.x = -(dy * Math.PI) / 180;
    }
  };

  // let onScroll = (e: WheelEvent) => {
  //   // rotate the lights around the model
  //   if (primaryLight.current === undefined) return;
  //   if (accentLight.current === undefined) return;

  //   // keep the value between -10 and 10 
  //   // const rotationX = Math.min(Math.max(primaryLight.current.position.x + e.deltaY * 0.01, -10), 10);
  //   // const rotationZ = Math.min(Math.max(primaryLight.current.position.z + e.deltaY * 0.01, -10), 10);

  //   const rotationX = Math.sin (Date.now() / 1000) * 20;
  //   const rotationZ = Math.cos (Date.now() / 1000) * 10;
  //   console.log(rotationX, rotationZ)

  //   primaryLight.current.position.x = rotationX;
  //   // primaryLight.current.position.z = rotationZ;
  //   accentLight.current.position.x = rotationX;
  //   // accentLight.current.position.z = rotationZ;
     
  // };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   document.querySelector("#main").addEventListener("scroll", onScroll);
    // }
    
    window.addEventListener("mousemove", rotateModel);
    // window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("mousemove", rotateModel);
      // window.removeEventListener("wheel", onScroll);
      //   document.querySelector("#main")?.removeEventListener("scroll", onScroll);
    };
  }, []);
  return { rotateModel };
};
