## Juhyung-home
- "완성보다 완벽을, 최고의 방어보다 실효성 있는 대책을 고민합니다." > 인프라 구축, 취약점 분석, 그리고 보안 관제 프로세스를 기록하는 보안 엔지니어 김주형의 포트폴리오 사이트입니다.

## 기술 스택
- Framework: Next.js 15.x (App Router)
- Language: TypeScript
- Styling: Tailwind CSS & shadcn/ui
- Infrastructure Focus: Automation, Security Monitoring, Threat Tracking

##  시작하기
- 프로젝트를 로컬 환경에서 실행하는 방법입니다.

```
1. 의존성 설치
Bash
pnpm install
2. 개발 서버 실행
Bash
pnpm dev
```
## 전체 구조 
유지보수와 확장성을 고려하여 DDD(Domain-Driven Design) 패턴을 적용하고, 라우팅 로직과 세부 컴포넌트를 분리했습니다.

```
juhyung-home/
├── src/
│   ├── app/                    # [Routing] 페이지 배치 및 레이아웃
│   │   ├── about/              # 주형 소개 (Philosophy & Skills)
│   │   ├── blog/               # 기술 아카이브 (Security Analysis)
│   │   ├── contact/            # 연락처 및 소셜 링크
│   │   ├── portfroile/         # 상세 이력서 섹션
│   │   ├── projects/           # 인프라/보안 프로젝트 쇼케이스
│   │   ├── layout.tsx          # 전역 레이아웃 (Navigation/Footer)
│   │   └── page.tsx            # 메인 대시보드 (Hero Section)
│   ├── components/             # [Global] 공용 UI 컴포넌트
│   │   └── layout/             # Header, Footer, Navigation
│   ├── constants/              # [Config] 사이트 메타데이터 및 상수
│   │   └── ui.ts               
│   └── domains/                # [Business Logic] 페이지별 상세 내용
│       ├── about/components/   
│       ├── blog/components/    
│       ├── contact/components/ 
│       ├── home/components/    
│       ├── portfroile/components/
│       └── projects/components/
└── README.md
```
### Security Identity
본 포트폴리오는 단순한 웹사이트를 넘어, 아래의 인프라 관리 역량을 시각화하는 데 중점을 둡니다.

Infra Automation: Ansible을 활용한 멀티 서버(16대+) 보안 패치 자동화

Monitoring: Wazuh & Grafana 기반의 실시간 위협 탐지 시각화

Access Control: Teleport 및 Authentik을 활용한 인프라 접근 제어 구현

Analysis: 최신 CVE 취약점 분석 및 대응 리포트 아카이빙

###  Contact
Name: 김주형 (Ju-hyung Kim)
- Email: kimjuhyung0320@gmail.com
- GitHub: @nangman-infra

