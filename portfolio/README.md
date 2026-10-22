# ⚡ Editorial Monolith — 개발자 취업 포트폴리오 웹앱

스위스 타이포그래피 시스템 및 테크니컬 아키텍처 다큐먼트에서 영감을 받은 백엔드/풀스택 엔지니어용 인터랙티브 포트폴리오 웹애플리케이션입니다.

---

## 🛠 기술 스택
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Inter, Geist, JetBrains Mono, Pretendard
- **Icons**: Google Material Symbols Outlined
- **Linter**: [oxlint](https://oxc.rs/)

---

## ✨ 핵심 디자인 및 인터랙션 기능

1. **인터랙티브 명함 & 가죽 지갑 시퀀스 (`HeroWalletSection`)**
   - **1단계 (명함 & 지갑 대기)**: 첫 화면부터 상단에 3D 인터랙티브 명함이 자리잡고, 바로 아래에서 가죽 카드지갑이 슬라이드 슬롯을 열어둔 채 대기, 페이지 스크롤 고정
   - **2단계 (지갑 수납)**: 휠 스크롤 시 명함이 지갑 안으로 쏙 들어감 (상단 이름/직함만 곡선 썸노치로 단정하게 노출, 하단 65% 완벽 수납)
   - **3단계 (지갑 퇴장 & 서류 전면 등장)**: 휠 스크롤 시 지갑이 페이드아웃됨과 동시에 공식 서류(이력서 다큐먼트)가 전면으로 상승하며 페이지 스크롤 자동 잠금 해제
2. **Swiss Archival Dossier (`ResumeSection`)**
   - 스위스 아카이벌 스타일의 단정한 그리드와 페이퍼 텍스처
   - 도메인별 역량 필터 버튼 (`BACKEND CORE`, `DATA PERSISTENCE`, `MESSAGING & CLOUD`, `OBSERVABILITY`)
   - `PRINT / SAVE RESUME PDF` 원클릭 인쇄/PDF 저장 기능 내장
3. **Engineering Whitepapers (`ProjectsSection`)**
   - 시스템 병목(The Architectural Bottle-neck) vs 공학적 해결책(Engineered Resolution) 대비 레이아웃
   - ASCII 분산 아키텍처 다이어그램 및 Java 21 / Redisson 분산 락 소스코드 탭 전환
   - 원클릭 코드 복사(`COPY RAW`) 기능
4. **Empirical Benchmarks (`MetricsSection`)**
   - 벤토 그리드(Bento Grid) 형식의 정량적 성능 개선 지표
   - 150ms → 15ms 레이턴시 인터랙티브 바 비교
   - 12,000 TPS 처리량 안정성을 시각화한 인라인 SVG 스파크라인
   - 22% CPU 로드 및 78% 여유분을 나타내는 도넛 게이지
5. **Academic & Credentials (`ExperienceSection`)**
   - 학력, 전국 공모전 대상 수상, 정보처리기사 & SQLD 국가공인 자격증 타임라인
6. **Closing Convergence (`ContactSection`)**
   - 명함 메타포의 클로징 컨테이너, 이메일 발송/복사, 깃허브 링크, PDF 출력

---

## 🚀 로컬 실행 방법

```bash
cd portfolio

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 미리보기
npm run preview

# 코드 린트 검사
npm run lint
```

---

## 🌐 프로덕션 배포 가이드

### 1. Vercel 배포 (가장 추천)
1. GitHub 저장소에 `portfolio` 폴더(또는 전체 코드)를 푸시합니다.
2. [Vercel](https://vercel.com/) 대시보드에서 `Import Project` 클릭
3. **Root Directory**를 `portfolio`로 설정
4. Build Command: `npm run build`, Output Directory: `dist`
5. `Deploy` 클릭 시 즉시 전세계 CDN으로 무료 배포 완료

### 2. Netlify 배포
1. [Netlify](https://www.netlify.com/) 대시보드에서 `Add new site` > `Import an existing project`
2. Base directory: `portfolio`
3. Build command: `npm run build`
4. Publish directory: `portfolio/dist`

### 3. GitHub Pages 배포
- `vite.config.ts`의 `base` 경로를 저장소 이름(예: `base: '/repo-name/'`)으로 설정 후 `gh-pages` 패키지 또는 GitHub Actions로 배포 가능합니다.

---

## 📁 컴포넌트 구조

```
portfolio/src/
├── components/
│   ├── Header.tsx            # 상단 고정 헤더 (섹션 스크롤 추적 및 채용 가능 펄스 뱃지, 모바일 햄버거)
│   ├── SideNav.tsx           # 우측 인덱스 네비게이션
│   ├── HeroWalletSection.tsx # 4단계 명함-지갑-서류 인터랙션 시퀀스 & 스크롤 제어
│   ├── ResumeSection.tsx     # 이력서 및 기술 역량 매트릭스 (카테고리 필터링)
│   ├── ProjectsSection.tsx   # FinFlow & LogPulse 기술 백서 (다이어그램 / 코드 탭)
│   ├── MetricsSection.tsx    # 벤토 그리드 정량적 성능 지표
│   ├── ExperienceSection.tsx # 학력, 수상 및 자격증 타임라인
│   ├── ContactSection.tsx    # 클로징 연락처 카드 & 이메일 복사
│   └── Footer.tsx            # 시스템 섀시 푸터
├── index.css                 # Tailwind v4 테마 토큰, 타이포그래피, 스크롤바 제어
├── App.tsx                   # 메인 뷰 레이아웃
└── main.tsx                  # React 엔트리포인트
```

---

## ✏️ 내 포트폴리오로 커스텀하는 법
- 본인 정보로 변경할 때는 각 컴포넌트(`HeroWalletSection.tsx`, `ResumeSection.tsx`, `ProjectsSection.tsx`, `ExperienceSection.tsx`, `ContactSection.tsx`)에서 이름, 이메일, 기술 스택 및 프로젝트 세부 내용을 원하는 값으로 수정하시면 됩니다.
