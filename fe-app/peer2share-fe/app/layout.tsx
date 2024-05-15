import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable:"--font-sans" 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased",inter.variable)}>
        <main className="h-screen flex flex-col overflow-y-auto">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
