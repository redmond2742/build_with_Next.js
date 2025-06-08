import Image from 'next/image';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

export const metadata: Metadata = {
  title: 'Welcome to My Site',
  description: 'This is a demo.',
  alternates: {
    canonical: siteUrl ? `${siteUrl}/` : undefined,
  },
  openGraph: {
    title: 'Welcome to My Site',
    description: 'This is a demo.',
    url: siteUrl || '/',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'My Site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome to My Site',
    description: 'This is a demo.',
    images: [`${siteUrl}/images/og-image.jpg`],
  },
};

export default function Home() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl || '/',
      },
    ],
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl || '/',
    name: 'Welcome to My Site',
  };

  return (
    <main>
      <h1>Welcome to My Site</h1>
      <p>This is a demo.</p>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
        sizes="(max-width: 768px) 100vw, 700px"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteLd, breadcrumbLd]),
        }}
      />
    </main>
  );
}
