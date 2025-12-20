# juhyung homepage

포트폴리오용 개인 홈페이지 프로젝트 (infrastructure & security engineer)

## 기술 스택

### frontend
- **framework**: next.js 15.x (app router)
- **language**: typescript
- **styling**: tailwind css
- **ui library**: shadcn/ui
- **package manager**: pnpm

## 시작하기

```bash
#의존성 설치
pnpm install

#서버 실행 (http://localhost:3000)
pnpm dev
```


## 프로젝트 구조

```text
juhyung-home/
├── src/
│   ├── app/                        # 라우팅 및 페이지 배치
│   │   ├── about/page.tsx          # 소개 페이지
│   │   ├── blog/page.tsx           # 블로그 페이지
│   │   ├── contact/page.tsx        # 연락처 페이지
│   │   ├── portfroile/page.tsx     # 이력서 페이지
│   │   ├── projects/page.tsx       # 프로젝트 페이지
│   │   ├── layout.tsx              # 전체 레이아웃 
│   │   └── page.tsx                # 메인 페이지
│   ├── components/       
│   │   └── layout/                 # header.tsx, footer.tsx
│   ├── constants/               
│   │   └── ui.ts                   # 사이트 정보
│   └── domains/                    # 페이지별 상세 내용 
│       ├── about/components/      
│       ├── blog/components/       
│       ├── contact/components/    
│       ├── home/components/       
│       ├── portfroile/components/  
│       └── projects/components/    
└── README.md
