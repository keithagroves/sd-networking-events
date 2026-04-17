import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SD Networking Events | San Diego's Premier Business Network",
  description:
    "San Diego's premier networking organization. 24+ events annually — mixers, showcases, expos, and summits connecting 150,000+ professionals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to content
        </a>
        <Nav />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
