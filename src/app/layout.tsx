"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/nav-bar/app-sidebar";
import Footer from "@/components/footer";
import "@/fonts/geist"
import "@/fonts/geist_mono"
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
          <div className="flex h-screen">
              <AppSidebar />
              <main className="flex-grow p-4">
                <SidebarTrigger />
                {children}
                <Footer />
              </main>
            </div>
            <Toaster />
          </SidebarProvider>

        </ThemeProvider>

      </body>


    </html>
  );
}