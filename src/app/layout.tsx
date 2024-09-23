import localFont from "next/font/local";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react"

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
      <body className={`${inter.variable} ${calistoga.variable} ${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white`}>
        {children}
        <Analytics/>
        <Footer />
      </body>
    </html>
  );
}
