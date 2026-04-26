"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "../constants/ui"; // 설정 파일 연결

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const sections = [
    {
      id: "hero",
      title: "SYSTEM ONLINE",
      subtitle: `  보안 꿈나무, ${SITE_CONFIG.name}입니다`,
      description: "인프라 구축부터 취약점 분석, 실시간 관제까지 전 과정을 아우르는 엔지니어를 지향합니다.",
    },
    {
      id: "about",
      title: "Philosophy",
      subtitle: "최고의 방어보다 최고의 대책을",
      description: "완성보다 완벽을 추구하며, 모든 시스템의 가용성과 무결성을 보장하는 것을 목표로 합니다.",
      link: "/about",
    },
    {
      id: "projects",
      title: "Infrastructure",
      subtitle: "서버 자동화 및 관리",
      description: "Ansible,Wazuh를 활용한 서버 관리 및 자동화 .",
      link: "/projects",
    },
    {
      id: "security-blog",
      title: "Security Archive",
      subtitle: "보안 분석 및 기록",
      description: "CVE 분석과 시스템 침해 사고 분석 기록 등 , 보안 엔지니어로서의 탐구 기록물들을 기록합니다.",
      link: "/blog",
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "Contact to me",
      description: "보안 인프라에 대한 차세대 세상에서 함께하고 싶습니다.",
      link: "/contact",
    },
  ];

  // 스크롤 제어 로직 (주형님 코드 최적화)
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (e.deltaY > 0 && currentSection < sections.length - 1) move(currentSection + 1);
      else if (e.deltaY < 0 && currentSection > 0) move(currentSection - 1);
    };

    const move = (index: number) => {
      isScrolling.current = true;
      setCurrentSection(index);
      setTimeout(() => { isScrolling.current = false; }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection, sections.length]);

  return (
      <div className="relative w-full h-screen overflow-hidden bg-[#050505]">
        {/* 슬라이딩 컨테이너 */}
        <motion.div
            animate={{ y: `-${currentSection * 100}vh` }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
            className="w-full h-full"
        >
          {sections.map((section, index) => (
              <section key={section.id} className="w-full h-screen flex flex-col justify-center items-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-4xl"
                >
                  <h2 className="text-emerald-500 font-mono text-lg mb-4 tracking-[0.2em] uppercase italic">
                    {section.title}
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 break-keep leading-tight">
                    {section.subtitle}
                  </h1>
                  <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    {section.description}
                  </p>

                  <div className="flex gap-4 justify-center">
                    {section.link ? (
                        <Link href={section.link} className="px-8 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-all font-semibold">
                          Access Logs
                        </Link>
                    ) : (
                        <div className="flex gap-3">
                          <Link href="/projects" className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-all font-semibold">
                            Projects
                          </Link>
                          <Link href="/about" className="px-8 py-3 border border-gray-700 rounded-md hover:bg-white/5 transition-all font-semibold">
                            About Me
                          </Link>
                        </div>
                    )}
                  </div>
                </motion.div>
              </section>
          ))}
        </motion.div>

        {/* 우측 인디케이터 (보안 전문가 느낌의 바 형태) */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {sections.map((_, i) => (
              <button
                  key={i}
                  onClick={() => setCurrentSection(i)}
                  className={`transition-all duration-500 ${
                      currentSection === i ? "w-1 h-12 bg-emerald-500" : "w-1 h-4 bg-gray-800 hover:bg-gray-600"
                  }`}
              />
          ))}
        </div>
      </div>
  );
}