import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { JsonLd } from '@/components/json-ld';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, organizationSchema } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  twitter: {
    card: 'summary_large_image',
    images: [DEFAULT_OG_IMAGE.url],
  },
  formatDetection: { telephone: true, address: true },
  title: 'Mobile Phone Repair in Atlanta, Georgia, Laptop & Tablet Repair Service in Augusta Mall | Mobile Care USA',
  description: 'Get fast, reliable mobile phone repair in Atlanta, Georgia with Mobile Care USA. We also specialize in expert laptop and tablet repair services at Augusta Mall, offering screen replacements, battery upgrades, and full diagnostics for iPhone, Samsung, MacBook, and more. Trusted technicians, affordable pricing, and same-day service to keep you connected.',
  keywords: [
    'Mobile Phone Repair in Atlanta, Georgia',
    'iPhone repair service in Atlanta, Georgia',
    'Android phone repair in Atlanta, Georgia',
    'phone repair shop in Augusta Mall',
    'phone repair shop in Perimeter Mall',
    'phone repair shop in Cumberland Mall',
    'phone repair shop in Southlake Mall',
    'phone repair shop in Lynnhaven Mall',
    'phone repair shop in Carolina Place Mall',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Mobile Phone Repair in Atlanta, Georgia, Laptop & Tablet Repair Service in Augusta Mall | Mobile Care USA',
    description: 'Get fast, reliable mobile phone repair in Atlanta, Georgia with Mobile Care USA. We also specialize in expert laptop and tablet repair services at Augusta Mall, offering screen replacements, battery upgrades, and full diagnostics for iPhone, Samsung, MacBook, and more. Trusted technicians, affordable pricing, and same-day service to keep you connected.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P17FFSKJVN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P17FFSKJVN');
            `,
          }}
        />

        {/* Structured Data (Schema.org) */}
        <JsonLd data={organizationSchema()} />

      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
