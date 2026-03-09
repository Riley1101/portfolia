"use client";

import dynamic from "next/dynamic";

const ComputerModel = dynamic(() => import("."), {
  ssr: false,
});

export default function ModelWrapper() {
  return <ComputerModel />;
}
