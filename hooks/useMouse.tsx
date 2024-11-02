import { RefObject, useEffect } from "react";

function getMouseDegrees(x: number, y: number, degreeLimit: number) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

  let w = { x: window.innerWidth, y: window.innerHeight };

  if (x <= w.x / 2) {
    xdiff = w.x / 2 - x;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }

  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
  }
  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }
  return { x: dx, y: dy };
}

export const useObjectMovement = (object: RefObject<any>) => {
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

  useEffect(() => {
    window.addEventListener("mousemove", rotateModel);
    return () => {
      window.removeEventListener("mousemove", rotateModel);
    };
  }, []);
  return { rotateModel };
};
