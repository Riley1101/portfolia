import "./global.css";
import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="grid w-full h-screen overflow-hidden">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
