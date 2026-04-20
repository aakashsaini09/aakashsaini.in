import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
 <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TVZVQY6R7F"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TVZVQY6R7F');
          `}
        </Script>
                  <Toaster />
              </TooltipProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
