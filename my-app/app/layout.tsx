import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/providers/toaster-provder";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Roadmap",
  description: "Dev Roadmap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastProvider />
      {children}
     
      </body>
      
    </html>
  );
}
