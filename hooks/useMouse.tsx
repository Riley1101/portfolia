import { PrimitiveProps } from "@react-three/fiber";
import { useEffect, useState, MutableRefObject } from "react";
import { DirectionalLight } from "three";

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

) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const rotateModel = (evt: MouseEvent) => {
    const { x, y } = mousePosition;
    const { x: dx, y: dy } = getMouseDegrees(evt.clientX, evt.clientY, 10);
    if (object.current === undefined) return;
    if (x !== dx || y !== dy) {
      setMousePosition({ x: dx, y: dy });
      object.current.rotation.y = -(dx * Math.PI) / 180;
      object.current.rotation.x = -(dy * Math.PI) / 180;
    }
  };

  let onScroll = (e: WheelEvent) => {
    console.log(e);
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   document.querySelector("#main").addEventListener("scroll", onScroll);
    // }
    window.addEventListener("mousemove", rotateModel);
    window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("mousemove", rotateModel);
      window.removeEventListener("wheel", onScroll);
      //   document.querySelector("#main")?.removeEventListener("scroll", onScroll);
    };
  }, []);
  return { mousePosition, rotateModel };
};
