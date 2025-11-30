import type { Metadata } from "next";
import "./globals.css";
import {Inter, Calistoga} from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets:["latin"], variable:"--font-sans"});
const calistoga = Calistoga({
  subsets:["latin"],
  variable:"--font-serif",
  weight:["400"]
});

export const metadata: Metadata = {
  title: "Wilbert Winardi | Computer Science Student at BINUS University",
  description:
    "Portfolio of Wilbert Winardi, a Computer Science student at BINUS University specializing in Artificial Intelligence, and Web Development.",
  keywords: [
    "Wilbert Winardi",
    "Binus University",
    "Web Developer",
    "Artificial Intelligence",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Wilbert Winardi - Portfolio",
    description: "Explore the projects and skills of Wilbert Winardi.",
    url: "https://wilbertwinardi.site",
    siteName: "Wilbert Winardi",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable,
        calistoga.variable,
        "bg-gray-900 text-white antialiased font-sans scroll-smooth")}
      >
        {children}
      </body>
    </html>
  );
}
