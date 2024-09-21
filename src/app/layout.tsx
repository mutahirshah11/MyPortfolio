
import localFont from "next/font/local";
import {Inter , Calistoga} from "next/font/google"
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets : ['latin'] , variable: "--font-sans"})
const calistoga = Calistoga({subsets : ['latin'] , variable: "--font-serif", weight: ["400"]}) 

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
  children: React.ReactNode ;
}>) {
  return (
    <html lang="en">
      <body className={" bg-gray-900 text-white"} >
        
       
     
        {children}
        <Footer/>
      </body>
    </html>
  );
}
