import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "SEO GROUP BUY TOOLS",
  description:
    "SEO GROUP BUY TOOLS provides fast, free SEO tools: keyword research, backlink analysis, on-page audits, meta tag generator, and more to help you rank higher.",
  metadataBase: new URL('https://30seotools.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@30seotools',
  },
  openGraph: {
    type: 'website',
    url: 'https://30seotools.com/',
    title: 'SEO GROUP BUY TOOLS',
    description:
      'SEO GROUP BUY TOOLS provides fast, free SEO tools to help you rank higher.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapInit />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
