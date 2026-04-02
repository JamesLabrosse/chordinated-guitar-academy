import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chordinated Guitar Academy | Online Guitar Lessons for Adults",
  description: "Private online guitar coaching for adults. Book a free strategy session with James Labrosse, Berklee graduate and professional guitarist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}