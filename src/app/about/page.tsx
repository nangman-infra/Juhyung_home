
    "use client";

    import { motion } from "framer-motion";

    export default function AboutPage() {
        const experiences = [
    {
        title: "2026 ABC 프로젝트 멘토링",
        period: "2026.04 - 현재",
        description: "소프트웨어 커널 하드닝 및 RBAC 기반 접근 제어 시스템 설계 및 구현 담당",
        tags: ["Kernel Hardening", "RBAC", "Security","Authentik"]
    },
    {
        title: "보안 취약점 분석 및 모의해킹 리포팅 ",
        period: "2026.04",
        description: "Heartbleed 및 ARP Spoofing 취약점 재현 및 방어 전략 수립 및 기술 문서화",
        tags: ["Vulnerability", "Security Lab", "Network","CVE"]
    },
    {
        title: "OIDC 인증 통합",
        period: "2026.03",
        description: "Authentik OIDC/SAML 을 활용하여 가용 서버에 통합 SSO 환경 구축",
        tags: ["OIDC", "SAML", "Authentik", "OAuth2/OIDC"]
    },
    {
        title: "서비스 모니터링",
        period: "2025.12 - 현재",
        description: "Wazuh를 활용한 가용 서버의 취약점 실태 분석",
        tags: ["Wazuh", "Teleport", "CVE-Report"]
    },
            {
                title: "서비스 자동화 구축",
                period: "2025.12 - 현재",
                description: "Ansible을 활용한 백신 및 업데이트 자동화 서비스 구축",
                tags: ["Ansible AWX", "ClamAV", "crontab"]
            }
        ];

        const skills = [
    { category: "Infrastructure", items: ["Authentik", "Wazuh", "Teleport", "Nginx Proxy Manager", "Ansible"] },
    { category: "Security", items: ["Kernel Hardening", "RBAC", "Vulnerability Analysis", "ARP Spoofing Defense"] },
    { category: "Programming", items: ["C++", "python", "Next.js", "TypeScript"] }
        ];

        return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
        <motion.div
        initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-6xl mx-auto"
>
    {/* 상단 소개 섹션 */}
    <section className="mb-24 text-center">
        <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
        >
            About Me
        </motion.h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            국립한밭대학교 모바일융합공학과 3학년, <br />
            클라우드 인프라 보안의 설계와 ZTA 및 RBAC 기반 역할제어와 보안 환경 구축을 하고 있습니다.
        </p>
    </section>

    {/* 진행 작업 카드 섹션 */}
    <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-primary pl-4">Key Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="p-8 bg-secondary/20 rounded-3xl border border-secondary/50 hover:border-primary/50 transition-all shadow-sm"
                >
                    <span className="text-sm text-primary font-mono mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold mb-4">{exp.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-3 py-1 bg-background rounded-full border border-secondary">
                      #{tag}
                    </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>

    {/* 기술 스택 섹션 */}
    <section>
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-primary pl-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
                <div key={idx} className="p-8 bg-background rounded-3xl border border-secondary shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-primary">{skill.category}</h3>
                    <div className="flex flex-wrap gap-3">
                        {skill.items.map((item, i) => (
                            <span key={i} className="px-4 py-2 bg-secondary/50 rounded-xl text-sm font-medium">
                      {item}
                    </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
</motion.div>
</div>
);
}
