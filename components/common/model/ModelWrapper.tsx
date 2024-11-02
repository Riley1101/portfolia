"use client";

import React from "react";
import dynamic from "next/dynamic";

const ComputerModel = dynamic(() => import("."), {
  ssr: false,
});

export default function ModelWrapper() {
  return <ComputerModel />;
}
