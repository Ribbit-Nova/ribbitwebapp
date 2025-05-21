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


export const metadata = {
  title: "RibbitNova",
  description: "Next-generation multi-chain wallet and payments app that makes crypto simple, secure, and usable in daily life. ",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
