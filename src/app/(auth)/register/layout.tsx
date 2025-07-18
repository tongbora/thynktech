import "../../globals.css"; // Ensure global styles are imported
import { ThemeProvider } from "@/components/theme/theme-provider";
export const metadata = {
  title: "Register",
  description: "Register",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased mx-auto max-w-screen-7xl">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
