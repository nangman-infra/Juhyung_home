import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site_info } from "@/constants/ui";

export const metadata: Metadata = {
  title: site_info.title,
  description: site_info.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Script
          src="https://analytics.nangman.cloud/api/script.js"
          data-site-id="8614eb94b435"
          strategy="afterInteractive"
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
