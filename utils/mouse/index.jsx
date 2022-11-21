import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";
const Mouse = () => {
  const mouse = useRef(null);
  const [click, setClick] = useState(false);
  let cursor;
  const handleMouseMove = (e) => {
    cursor.setAttribute(
      "style",
      `top : ${e.pageY - 10}px; left:${e.pageX - 10}px;`
    );
  };
  const handleMouseClick = () => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 500);
  };
  useEffect(() => {
    cursor = mouse.current;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);
  return (
    <div
      className={`${styles.cursor} ${click && styles.expand} z-[9999] `}
      ref={mouse}
    ></div>
  );
};
export default Mouse;
