import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Sharma | Full Stack Developer",
  description:
    "Portfolio of Deepak Sharma, a passionate Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies. Explore my projects, experience, and contact details.",
  keywords: [
    "Deepak Sharma",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
  ],
  authors: [{ name: "Deepak Sharma" }],
  openGraph: {
    title: "Deepak Sharma | Full Stack Developer",
    description:
      "Explore the portfolio of Deepak Sharma, a Full Stack Developer experienced in React, Next.js, Node.js, and modern web technologies.",
    url: "https://deepak-portfolio-five.vercel.app/", // replace with your actual domain
    siteName: "Deepak Sharma Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Sharma | Full Stack Developer",
    description:
      "Full Stack Developer skilled in React, Next.js, and Node.js. Check out my portfolio and projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
