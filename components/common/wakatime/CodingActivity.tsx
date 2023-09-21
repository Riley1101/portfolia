"use client";

import React, { useEffect, useRef, useState } from "react";
import { getGoals } from "@/utils/waka-api";
import type { CodingActivity } from "@/utils/waka-api/types";

/* const _= {
  primary: {
    default: "rgba(240, 86, 200, 0.5)",
    half: "rgba(240, 86, 200, 0.4)",
    quarter: "rgba(240, 86, 200, 0.2)",
    tiny: "rgba(240, 86, 200, 0.15)",
  },
  accent: {
    default: "rgba(136, 206, 211, 1)",
    half: "rgba(136, 206, 211, 0.5)",
    quarter: "rgba(136, 206, 211, 0.3)",
    tiny: "rgba(136, 206, 211, 0.2)",
  },
}; */

export function CodingActivityChart() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const [commits, _] = useState<CodingActivity | null>(null);

  console.log(commits);
  useEffect(() => {
    getGoals().then((data) => {
      if (data.data) {
        console.log(data.data);
      }
    });
  }, [commits]);
  return (
    <div className="w-full aspect-video  pt-2 px-8 p-2  rounded-md glass-box border-theme-accent-opaque">
      <canvas className="w-full h-full" ref={canvasEl}></canvas>
    </div>
  );
}
