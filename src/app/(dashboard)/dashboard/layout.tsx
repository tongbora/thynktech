import { AppSidebar } from "@/components/sidebar/Sidebar";
import "../../globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NavbarPro from "@/components/header/NavbarPro";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
  variable: "--font-roboto", // Custom CSS variable name
  display: "swap",
});

export const metadata = {
  title: "Tech World - Products",
  description: "Explore our product collection",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col items-start justify-start w-full h-screen">
              <SidebarTrigger />
              <NavbarPro />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
