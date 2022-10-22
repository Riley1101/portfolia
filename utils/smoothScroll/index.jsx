import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import styles from "./index.module.css";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 10, mass: 0.07, stiffness: 75 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className={styles.container}
      >
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
