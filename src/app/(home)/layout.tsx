import Footer from "@/components/footer/Footer";
import "../globals.css";
import Navbar from "@/components/header/Navbar";
import Scroll from "@/components/scroll/ScrollAnimation";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  // weight: ["400", "500", "700"], // Adjust weights as needed
  variable: "--font-roboto", // Custom CSS variable name
  display: "swap",
});
export const metadata = {
  title: "Thynk Tech",
  description: "Welcome to our homepage",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body
      // className={`${roboto.variable} antialiased mx-auto max-w-screen-7xl`}
      >
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
