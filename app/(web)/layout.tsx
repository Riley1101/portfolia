import "@styles/globals.css";
import "dracula-prism/dist/css/dracula-prism.min.css";
import GradientMesh from "@/components/common/gradient-mesh";
import Header from "@/components/common/header";
import NavAside from "@/components/common/nav-aside";
import type { Metadata } from "next";
import { AnalyticsWrapper } from "@/components/common/analytics";
import { Merriweather } from "next/font/google";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import { CSPostHogProvider } from "@/components/providers/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || ""),

  title: {
    default: metaData.title,
    template: "%s",
  },

  description: metaData.description,
  generator: "Next.js",
  applicationName: metaData.siteName,
  referrer: "origin-when-cross-origin",
  keywords: metaData.keywords,

  authors: [
    { name: metaData.title, url: metaData.url },
    { name: "Arkar Myat", url: "https://arkar.space" },
  ],

  creator: metaData.title,
  publisher: metaData.title,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: getOpenGraph(
    "/images/arkar.png",
    metaData.title,
    metaData.description,
    metaData.url,
  ),

  twitter: getTwitterCard(
    "/images/arkar.png",
    metaData.title,
    metaData.description,
  ),
};

const ubuntu = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <head />
      <CSPostHogProvider>
        <body className="overflow-hidden bg-theme-bg-base">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100000] focus:px-4 focus:py-2 focus:rounded-theme focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg-base focus:bg-theme-bg-elevated focus:outline-none"
          >
            Skip to main content
          </a>
          <div className="w-full overflow-hidden max-h-dvh bg-theme-bg-base/0 px-4 md:px-8 lg:px-10 xl:px-12">
            <Header />
            <div
              className="grid w-full max-w-[1400px] mx-auto grid-cols-1 text-theme-body overflow-hidden lg:grid-cols-[200px_minmax(0,1fr)]"
            >
              <div className="hidden lg:block">
                <NavAside />
              </div>
              <main
                id="main"
                className="h-dvh scroll-mt-1 z-[10] pt-[5.5rem] px-4 pb-8 overflow-y-scroll md:px-6 md:pt-[5.5rem] lg:px-10 lg:pt-[5.5rem]"
              >
                <div className="mt-4 mb-4 flex flex-col w-full min-w-0 md:my-8 lg:my-10">
                  {children}
                </div>
              </main>
            </div>
            <GradientMesh />
          </div>
          <AnalyticsWrapper />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
