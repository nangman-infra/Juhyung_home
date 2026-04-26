import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // 이게 그 mono 폰트예요!
import "./globals.css";
import { Header } from "../components/layout/Header";
import { SITE_CONFIG } from "../constants/ui";

// 폰트 설정: 보안 전문가 느낌을 위해 sans와 mono를 둘 다 가져옵니다.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Security Engineer`,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko" className="dark"> {/* 다크모드 강제 적용 */}
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-gray-100`}
      >
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 실제 페이지 내용 */}
      <main>{children}</main>

      {/* 푸터 (선택 사항) */}
      <footer className="fixed bottom-4 left-6 z-50 text-[10px] text-gray-600 font-mono tracking-widest uppercase">
        System Status: <span className="text-emerald-500 animate-pulse">Operational</span>
      </footer>
      </body>
      </html>
  );
}