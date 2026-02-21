// app/layout.js (or app/layout.js if using JavaScript)
import React from "react";
import "./ui/globals.css";  // Import any global styles (if necessary)
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "../../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Build w/ Next.js",
  description: "Read, Quiz and Build with Next.js",
};

export default function RootLayout({ children }) {
  return (
<Providers>
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-800 text-white">
          <header className="p-4 bg-gray-900 text-center">
 
          </header>
          <main className="p-6">{children}</main>
          <footer className="bg-gray-900 text-center p-4 mt-8">
     
          </footer>
        </div>
      </body>
    </html>
    </Providers>
  );
}
