import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress";
import GutterDecor from "@/components/GutterDecor";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "deutschmike.dev",
  description: "Profilseite mit Werdegang und Projekten.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <MotionConfig reducedMotion="user">
          <GutterDecor side="left" />
          <GutterDecor side="right" />
          <div className="grain" aria-hidden="true" />
          <ScrollProgress />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            {children}
          </div>
          <BackToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
