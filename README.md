# juhyung homepage

포트폴리오용 개인 홈페이지 프로젝트 (infrastructure & security engineer)

## 기술 스택

### frontend
- **framework**: next.js 15.x (app router)
- **language**: typescript
- **styling**: tailwind css
- **library**: shadcn/ui
- **package manager**: pnpm

# 패키지 다운로드
```bash
## 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:3000)
pnpm dev





## 프로젝트 실제 구조 (tree)
```text
juhyung-home/
├── src/
│   ├── app/                        # 라우팅
│   │   ├── about/page.tsx          # 소개 페이지
│   │   ├── blog/page.tsx           # 블로그 페이지
│   │   ├── contact/page.tsx        # 연락처 페이지
│   │   ├── portfroile/page.tsx     # 이력서 페이지
│   │   ├── projects/page.tsx       # 프로젝트 페이지
│   │   ├── layout.tsx              # 전체 레이아웃
│   │   └── page.tsx                # 메인 페이지 
│   ├── components/                 # 공통 UI
│   │   └── layout/                 # 헤더 및 푸터
│   ├── constants/                  # 전역 데이터
│   │   └── ui.ts                   # 메뉴 및 사이트 정보
│   └── domains/                    # 도메인 내용
│       ├── about/components/       # about-content.tsx
│       ├── blog/components/        # post-list.tsx
│       ├── contact/components/     # contact-form.tsx
│       ├── home/components/        # intro.tsx
│       ├── portfroile/components/  # resume-detail.tsx
│       └── projects/components/    # project-list.tsx
└── README.md

