import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "SEO GROUP BUY TOOLS",
  description:
    "SEO GROUP BUY TOOLS provides fast, free SEO tools: keyword research, backlink analysis, on-page audits, meta tag generator, and more to help you rank higher.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapInit />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
