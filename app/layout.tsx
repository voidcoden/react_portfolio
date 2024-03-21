import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Syafiq's Portfolio",
  description: "Syafiq's personal portfolio using React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <body>
      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
