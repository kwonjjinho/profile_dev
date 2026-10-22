export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 w-full py-16 sm:py-24 flex flex-col items-center">
      <div className="w-full max-w-[880px] bg-white rounded-[4px] p-6 sm:p-10 md:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#e2e3e1]">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e2e3e1] mb-8 font-mono text-[0.6875rem]">
          <div className="flex items-center gap-1.5 text-[#0051d5] font-semibold uppercase tracking-widest">
            <span>ACADEMIC BACKGROUND & OFFICIAL CREDENTIALS</span>
          </div>
          <div className="text-[#747878] uppercase">OFFICIAL DOSSIER #ACAD-2026</div>
        </div>

        {/* Timeline Entries */}
        <div className="flex flex-col gap-8">
          {/* Education */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b border-[#eeeeec] hover:bg-[#f9f9f7] -mx-4 px-4 py-2 rounded transition-colors">
            <div className="w-44 font-mono text-xs text-[#0051d5] font-semibold">
              2020.03 — 2026.02
            </div>
            <div className="flex-1">
              <h4 className="font-display text-lg sm:text-xl font-bold text-[#1a1c1b]">
                동아대학교 (Dong-A University)
              </h4>
              <div className="text-[#1a1c1b] text-sm mt-0.5 font-medium">
                컴퓨터공학과 (Computer Science & Engineering)
              </div>
              <p className="text-xs sm:text-sm text-[#444748] mt-1 leading-relaxed">
                학점(GPA): <strong className="font-semibold text-[#1a1c1b]">3.9 / 4.5</strong> • 자료구조, 운영체제(OS), 컴퓨터 네트워크, 데이터베이스 시스템 심화 이수
              </p>
            </div>
            <div className="font-mono text-[0.6875rem] text-[#444748] px-2.5 py-1 bg-[#f4f4f2] border border-[#e2e3e1] rounded font-medium">
              BACHELOR'S DEGREE
            </div>
          </div>

          {/* Awards */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b border-[#eeeeec] hover:bg-[#f9f9f7] -mx-4 px-4 py-2 rounded transition-colors">
            <div className="w-44 font-mono text-xs text-[#0051d5] font-semibold">
              2026.01
            </div>
            <div className="flex-1">
              <h4 className="font-display text-lg sm:text-xl font-bold text-[#1a1c1b] break-keep">
                2026 전국 대학생 SW 융합 공모전 — 대상 (Grand Prize)
              </h4>
              <div className="text-[#1a1c1b] text-sm mt-0.5 font-medium break-keep">국회 교육위원장상 수상</div>
              <p className="text-xs sm:text-sm text-[#444748] mt-1 leading-relaxed break-keep">
                실시간 대용량 트랜잭션 격리 분산 결제 아키텍처 FinFlow를 출품하여 심사위원단 만장일치 최고 기술상 수상
              </p>
            </div>
            <div className="font-mono text-[0.6875rem] text-[#0051d5] px-2.5 py-1 bg-[#dbe1ff] rounded font-bold">
              GRAND PRIZE
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 hover:bg-[#f9f9f7] -mx-4 px-4 py-2 rounded transition-colors">
            <div className="w-44 font-mono text-xs text-[#0051d5] font-semibold">
              CREDENTIALS
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#f4f4f2] rounded border border-[#e2e3e1]">
                <div className="font-display text-base font-bold text-[#1a1c1b]">정보처리기사</div>
                <div className="font-mono text-[0.6875rem] text-[#444748] mt-1">
                  한국산업인력공단 (HRD Korea) • 2025
                </div>
                <p className="text-xs text-[#747878] mt-1 leading-normal break-keep">
                  소프트웨어 설계, 데이터베이스 구축, 프로그래밍 언어 활용 국가공인 자격
                </p>
              </div>

              <div className="p-3.5 bg-[#f4f4f2] rounded border border-[#e2e3e1]">
                <div className="font-display text-base font-bold text-[#1a1c1b]">SQLD (SQL 개발자)</div>
                <div className="font-mono text-[0.6875rem] text-[#444748] mt-1">
                  한국데이터산업진흥원 (K-DATA) • 2024
                </div>
                <p className="text-xs text-[#747878] mt-1 leading-normal break-keep">
                  관계형 모델링, 옵티마이저 원리 및 쿼리 플랜 최적화 자격
                </p>
              </div>
            </div>
            <div className="font-mono text-[0.6875rem] text-[#444748] px-2.5 py-1 bg-[#f4f4f2] border border-[#e2e3e1] rounded font-medium">
              GOV CERTIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
