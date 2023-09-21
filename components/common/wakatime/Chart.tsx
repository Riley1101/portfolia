"use client";
import React, { useEffect, useRef } from "react";
import ChartComp from "chart.js/auto";
import { shortMonths } from "@/utils/group-by-months";
import {
  useArticlePublishData,
  useSnippetPublishedData,
} from "@/utils/waka-chart";

const colors = {
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
};

export function Chart() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const articles = useArticlePublishData();
  const snippets = useSnippetPublishedData();

  useEffect(() => {
    if (!canvasEl.current || canvasEl.current === null) return;
    const ctx = canvasEl.current.getContext("2d");
    if (ctx === null) return;

    const data = {
      labels: shortMonths,
      datasets: [
        {
          label: "Articles",
          data: articles,
          tension: 0.4,
          pointStyle: "circle",

          pointRadius: 3,
          borderWidth: 2,
          borderColor: colors.primary.half,
          lineTension: 0.4,
          pointBackgroundColor: colors.primary.default,
          fill: true,
        },
        {
          pointStyle: "circle",
          pointRadius: 3,
          label: "Snippets",
          data: snippets,
          tension: 0.4,
          borderWidth: 2,
          borderColor: colors.accent.half,
          lineTension: 0.4,
          pointBackgroundColor: colors.accent.default,
          fill: true,
        },
      ],
    };

    const config: any = {
      type: "line",
      data: data,

      options: {
        interaction: {
          mode: "index",
        },
        legend: {
          display: false,
        },

        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    };
    const myLineChart = new ChartComp(ctx, config);
    return function cleanup() {
      myLineChart.destroy();
    };
  }, [articles, snippets]);

  return (
    <div className="w-full aspect-video  pt-2 px-8 p-2  rounded-md glass-box border-theme-accent-opaque">
      <canvas className="w-full h-full" ref={canvasEl}></canvas>
    </div>
  );
}
