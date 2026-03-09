"use client";

import { useEffect, useCallback } from "react";
import NavASide from "../nav-aside/index";

type Props = {
  visible: boolean;
  toggle: () => void;
};

export default function NavModal({ visible, toggle }: Props) {
  const onEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") toggle();
    },
    [toggle],
  );

  useEffect(() => {
    if (!visible) return;
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [visible, onEscape]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[999] grid h-dvh w-full place-items-center overflow-y-auto overscroll-contain bg-theme-bg-base/80 py-6 backdrop-blur-lg"
      onClick={toggle}
    >
      <div
        className="w-[90%] max-w-sm rounded-theme bg-theme-bg-elevated shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <NavASide />
      </div>
    </div>
  );
}
