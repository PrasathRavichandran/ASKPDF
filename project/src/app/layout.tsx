import Navbar from "@/components/Navbar";
import TRPCProvider from "@/components/TRPCProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AskPDF - Use AI to ask questions or clarify anything in the PDF",
  description:
    "Utilize AI to ask any questions or seek clarification about the PDF, ensuring you have a complete understanding of its contents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <TRPCProvider>
        <body
          className={cn(
            `${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans grainy`
          )}
        >
          <Navbar />
          {children}
        </body>
      </TRPCProvider>
    </html>
  );
}
