import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/themetoggle";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DevFarhad – Full-Stack Developer & Automation Specialist",
  description:
    "Portfolio of DevFarhad, a Full-Stack Web Developer & Automation Specialist focused on scalable web apps and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sf antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider
            defaultOpen={true}
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="floating" collapsible="icon" />
            <SidebarInset className="m-2 shadow-lg border-lg rounded-xl">
              {/* Header */}
              <header className="absolute top-0 left-0 right-0 z-20 h-16 bg-black/60 flex items-center px-4 lg:px-6 rounded-t-xl">
                <SidebarTrigger />
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-4"
                />
                <div className="flex gap-2">
                  <Image
                    src="logo.svg"
                    alt="DevFarhad Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-base font-semibold text-white">
                    DevFarhad - Farhad Elahi Mazumdar
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <ModeToggle />
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
