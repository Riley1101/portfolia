import "./globals.css";
import "katex/dist/katex.min.css";
import "dracula-prism/dist/css/dracula-prism.min.css";

import NavAside from "@/components/common/nav-aside";
import RightAside from "@/components/common/right-aside";
import Header from "@/components/common/header";
import React from "react";
import { Poppins } from "@next/font/google";

const ubuntu = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <head />
      <body>
        {/* ! TODO  */}
        <div className="grid w-full max-h-screen overflow-hidden font-mono grid-rows-dashboard bg-theme-bg ">
          <Header />
          <div className=" grid grid-cols-1 lg:grid-cols-[230px_auto_100px] xl:grid-cols-[230px_auto_200px] md:grid-cols-[15%_auto_15%] w-full lg:w-[70%] mx-auto text-theme-body row-start-2 overflow-hidden">
            <NavAside />
            <main className=" col-start-2 h-screen overflow-y-scroll lg:p-12 p-4 pt-[6em] scrollbar-hide lg:pt-[6em] overflow-hidden ">
              <div>{children}</div>
            </main>
            <RightAside />
          </div>
        </div>
      </body>
    </html>
  );
}
