import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  description: "Utilize AI to ask any questions or seek clarification about the PDF, ensuring you have a complete understanding of its contents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans grainy`)}
      >
        {children}
      </body>
    </html>
  );
}
