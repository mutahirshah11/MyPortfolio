import localFont from "next/font/local";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";

// Applying font definitions
const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ["400"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font classes to the body */}
      <body className={`${inter.variable} ${calistoga.variable} ${geistSans.variable} ${geistMono.variable}  relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_90%_70%_at_70%_10%,#000_70%,transparent_110%)]" />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
