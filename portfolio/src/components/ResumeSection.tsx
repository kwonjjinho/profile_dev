import { useState } from 'react'

interface SkillCategory {
  domain: string
  skills: string
  subtext: string
  level: string
  badgeColor?: string
}

const competencies: SkillCategory[] = [
  {
    domain: 'BACKEND CORE',
    skills: 'Java 17 / 21, Spring Boot 3.x, Spring Data JPA, Spring Security, QueryDSL',
    subtext: '멀티스레드 동시성 제어, JPA N+1 방지 지연 로딩 설계, 도메인 주도 설계(DDD)',
    level: 'CORE PROFICIENT',
  },
  {
    domain: 'DATA PERSISTENCE',
    skills: 'MySQL 8.0, Redis (Distributed Lock & Multi-tier Cache)',
    subtext: 'B-Tree 복합 인덱스 튜닝, 격리 수준(Isolation Level) 제어, Redisson 기반 스핀락 부하 감소',
    level: 'HIGH VOLUME',
  },
  {
    domain: 'MESSAGING & CLOUD',
    skills: 'Apache Kafka, AWS (EC2, S3, RDS Aurora), Docker, GitHub Actions, Nginx',
    subtext: '무중단 블루/그린 배포 파이프라인, 비동기 이벤트 스트리밍, VPC 서브넷 분리 구성',
    level: 'PRODUCTION',
  },
  {
    domain: 'OBSERVABILITY',
    skills: 'Prometheus, Grafana, Apache JMeter, Elastic Stack, Pinpoint',
    subtext: '부하 테스트 시나리오 스트레스 측정, JVM 힙 덤프 및 스레드 덤프 병목 추적',
    level: 'ANALYTICAL',
  },
  {
    domain: 'FRONTEND SUBSIDIARY',
    skills: 'TypeScript, React, Tailwind CSS, Next.js',
    subtext: 'RESTful 명세 기반 프론트엔드-백엔드 인터페이스 규격 합의 및 통합 QA',
    level: 'COLLABORATIVE',
  },
]

export default function ResumeSection() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL')

  const domains = ['ALL', 'BACKEND CORE', 'DATA PERSISTENCE', 'MESSAGING & CLOUD', 'OBSERVABILITY']

  const filteredCompetencies = activeFilter === 'ALL'
    ? competencies
    : competencies.filter(c => c.domain === activeFilter)

  return (
    <section id="resume" className="relative z-10 w-full py-8 sm:py-14 flex flex-col items-center">
      {/* Outer Archival Document Container */}
      <article className="w-full max-w-[880px] bg-white border border-[#e2e3e1] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.03)] rounded-[4px] p-5 sm:p-10 md:p-12 relative">
        {/* Document Archival Header Stamp */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e2e3e1] gap-2 font-mono text-[0.6875rem] text-[#444748]">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-[#eeeeec] text-[#1a1c1b] font-semibold rounded">
              DOC_01
            </span>
            <span className="font-semibold text-[#1a1c1b]">
              RESUME // ARCHITECTURAL DOSSIER
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#747878]">
            <span>LAST_REVISED: 2026.03</span>
            <span>•</span>
            <span className="text-[#0051d5] font-semibold tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]" />
              STATUS: ACTIVE VERIFIED
            </span>
          </div>
        </div>

        {/* Profile & Header Identification */}
        <header className="py-8 border-b border-[#e2e3e1] flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[#0051d5] font-semibold">
              ENGINEERING ARCHITECT PROFILE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] text-[#1a1c1b] font-bold tracking-tight mt-1">
              권진호 <span className="font-normal text-[#747878] text-2xl sm:text-3xl">/ Kwon Jinho</span>
            </h2>
            <p className="text-base sm:text-lg text-[#1a1c1b] mt-1.5 font-medium leading-snug">
              Backend Systems & Distributed Infrastructure Specialist
            </p>
          </div>

          {/* Contact Dossier Box */}
          <div className="flex flex-col gap-1.5 font-mono text-[0.6875rem] bg-[#f4f4f2] p-3.5 sm:p-4 rounded border border-[#e2e3e1] w-full md:w-auto">
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#747878]">LOCATION</span>
              <span className="text-[#1a1c1b] font-medium text-right">Seoul / Busan, KR</span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#747878]">EMAIL</span>
              <a href="mailto:jinho.kwon.dev@gmail.com" className="text-[#1a1c1b] font-medium text-right hover:text-[#0051d5] underline decoration-[#e2e3e1] truncate max-w-[210px] sm:max-w-none">
                jinho.kwon.dev@gmail.com
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#747878]">GITHUB</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#1a1c1b] font-medium text-right hover:text-[#0051d5] underline decoration-[#e2e3e1]">
                github.com/kwonjinho
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#747878]">DISCIPLINE</span>
              <span className="text-[#0051d5] font-semibold text-right">High-Throughput / Concurrency</span>
            </div>
          </div>
        </header>

        {/* 01 — Executive Summary & Philosophy */}
        <div className="py-8 border-b border-[#e2e3e1]">
          <h3 className="font-mono text-[0.6875rem] uppercase tracking-widest text-[#747878] mb-3 flex items-center gap-1.5 font-semibold">
            <span>01</span>
            <span>—</span>
            <span>EXECUTIVE SUMMARY & PHILOSOPHY</span>
          </h3>
          <p className="font-display text-lg sm:text-xl text-[#1a1c1b] font-semibold mb-4 leading-relaxed tracking-tight break-keep">
            “사용자의 체감 병목을 수학적으로 분석하여 해결하고, 장애 격리와 회복 탄력성을 지닌 백엔드 시스템을 설계합니다.”
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-[#444748] leading-relaxed break-keep">
            <p>
              대규모 트래픽 인입 상황에서의 동시성 이슈, 데이터 무결성 보장, 그리고 분산 트랜잭션 오케스트레이션에 깊은 관심을 둡니다. 데이터베이스 인덱싱 체계와 캐싱 전략을 다각도로 최적화하여 불필요한 시스템 리소스 낭비를 줄이고, 측정 가능한 지표(Latency, Throughput, TPS)로 성능 개선을 증명합니다.
            </p>
            <p>
              단순히 프레임워크 기능 구현에 머무르지 않고, JVM 메모리 모델, OS 레벨의 I/O 블로킹 메커니즘, 분산 환경에서의 네트워크 레이턴시와 파티션 내성을 항상 계산하며 프로덕션 레벨의 견고한 소프트웨어를 구축합니다.
            </p>
          </div>
        </div>

        {/* 02 — Technical Competencies & Artifact Matrix */}
        <div className="py-8 border-b border-[#e2e3e1]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h3 className="font-mono text-[0.6875rem] uppercase tracking-widest text-[#747878] flex items-center gap-1.5 font-semibold">
              <span>02</span>
              <span>—</span>
              <span>TECHNICAL COMPETENCIES // ARTIFACT MATRIX</span>
            </h3>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 font-mono text-[0.6875rem]">
              {domains.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveFilter(d)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    activeFilter === d
                      ? 'bg-[#1a1c1b] text-white font-medium'
                      : 'bg-[#f4f4f2] text-[#444748] hover:bg-[#e8e8e6]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#e2e3e1] font-mono text-[0.6875rem] text-[#747878]">
                  <th className="py-2.5 px-3 w-40 uppercase tracking-wider font-semibold">DOMAIN</th>
                  <th className="py-2.5 px-3 uppercase tracking-wider font-semibold">PRIMARY STACK & METHODOLOGY</th>
                  <th className="py-2.5 px-3 w-36 uppercase tracking-wider text-right font-semibold">SYSTEM LEVEL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeec]">
                {filteredCompetencies.map((row) => (
                  <tr key={row.domain} className="hover:bg-[#f4f4f2]/70 transition-colors">
                    <td className="py-3 px-3 font-mono text-xs text-[#0051d5] font-semibold align-top whitespace-nowrap">
                      {row.domain}
                    </td>
                    <td className="py-3 px-3 text-[#1a1c1b] align-top">
                      <div className="font-medium text-[#1a1c1b]">{row.skills}</div>
                      <div className="text-[#444748] text-xs mt-1 leading-normal">{row.subtext}</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[0.6875rem] text-right text-[#747878] align-top whitespace-nowrap font-medium">
                      <span className="px-2 py-0.5 bg-[#eeeeec] rounded text-[#1a1c1b]">
                        {row.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Document Download / Print Action */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-[#444748]">
            <span className="material-symbols-outlined text-[#0051d5] text-[16px]">verified</span>
            <span>OFFICIAL WHITE PAPER VERIFIED BY KWON JINHO</span>
          </div>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-[#1a1c1b] text-white rounded font-mono text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>PRINT / SAVE RESUME PDF</span>
            <span className="material-symbols-outlined text-[14px]">download</span>
          </button>
        </div>
      </article>
    </section>
  )
}
