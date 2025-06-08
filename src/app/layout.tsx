/* eslint-disable @next/next/google-font-preconnect */
import './ui/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Build w/ Next.js',
    template: '%s | Build w/ Next.js',
  },
  description: 'Read, Quiz and Build with Next.js',
};

export default function RootLayout({ children }: PropsWithChildren) {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {analyticsId && (
          <script
            defer
            data-domain={analyticsId}
            src="https://plausible.io/js/plausible.js"
          />
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
