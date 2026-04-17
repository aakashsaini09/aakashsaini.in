import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip";
import { JetBrains_Mono } from "next/font/google";
const jetBrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainMono'
});

export const metadata: Metadata = {
  title: "Aakash Saini || Portfolio Website",
  description: "Portfolio Website Using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <TooltipProvider>
                {children}
                  <Toaster />
              </TooltipProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
