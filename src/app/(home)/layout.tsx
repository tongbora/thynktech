import Footer from "@/components/footer/Footer";
import "../globals.css";
import Navbar from "@/components/header/Navbar";
import Scroll from "@/components/scroll/ScrollAnimation";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  // weight: ["400", "500", "700"], // Adjust weights as needed
  variable: "--font-roboto", // Custom CSS variable name
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thynk Tech | Smart eCommerce Solutions",
  description:
    "Thynk Tech is a modern eCommerce platform built with Next.js and TypeScript. Discover smart shopping, fast performance, and beautiful design.",
  keywords: [
    "Thynk Tech",
    "eCommerce",
    "Next.js",
    "TypeScript",
    "online shopping",
    "modern web app",
  ],
  metadataBase: new URL("https://thyntech.vercel.app"),
  openGraph: {
    title: "Thynk Tech | Smart eCommerce Solutions",
    description:
      "A modern eCommerce experience powered by Next.js, designed for speed, usability, and innovation.",
    url: "https://thyntech.vercel.app",
    siteName: "Thynk Tech",
    images: [
      {
        url: "/logo/3.png", // make sure you have this image in /public
        width: 1200,
        height: 630,
        alt: "Thynk Tech Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thynk Tech | Smart eCommerce Solutions",
    description:
      "Thynk Tech is your gateway to a sleek, smart, and scalable online store.",
    images: ["/logo/3.png"],
    site: "@yourTwitterHandle", // optional
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="bg-white dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Scroll />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
