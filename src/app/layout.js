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
  title: "Ribbit - Multichain wallet built on Supra",
  description: "Ribbit combines the best of a crypto wallet, DeFi hub, and real-world payments solution into one powerful app.",
  openGraph: {
    images: [
      {
        url: "/multi-chain-wallet-image.png",
        alt: "Multi-chain wallet banner image",
      },
    ],
  },
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
