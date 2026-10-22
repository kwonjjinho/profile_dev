import { useState } from 'react'

export default function MetricsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="metrics" className="relative z-10 w-full py-16 sm:py-24 flex flex-col items-center">
      {/* Section Header */}
      <div className="w-full max-w-[880px] mb-8">
        <div className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-[#0051d5] font-semibold uppercase tracking-widest">
          <span>QUANTITATIVE METRICS</span>
          <span>/</span>
          <span>EMPIRICAL BENCHMARKS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#1a1c1b] font-bold tracking-tight mt-1">
          Engineering Impact & Optimization
        </h2>
        <p className="text-sm sm:text-base text-[#444748] max-w-2xl mt-1.5">
        </p>
      </div>

      {/* Bento Cards Grid */}
      <div className="w-full max-w-[880px] grid md:grid-cols-3 gap-5">
        {/* Metric 01: Latency */}
        <div
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          className={`bg-white p-6 rounded-[4px] border border-[#e2e3e1] transition-all duration-300 flex flex-col justify-between ${
            hoveredCard === 1
              ? 'shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-[#1a1c1b]'
              : 'shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
          }`}
        >
          <div>
            <div className="flex justify-between items-center text-[#747878] font-mono text-[0.6875rem] mb-3">
              <span>METRIC #01</span>
              <span className="text-[#0051d5] font-bold">-90.0% LATENCY</span>
            </div>
            <div className="font-display text-3xl font-bold text-[#1a1c1b] tracking-tight">
              150ms → <span className="text-[#0051d5]">15ms</span>
            </div>
            <p className="text-xs sm:text-sm text-[#444748] mt-3 leading-relaxed break-keep">
              복합 집계 쿼리를 <strong className="font-semibold text-[#1a1c1b]">QueryDSL 커버링 인덱스(Covering Index)</strong>로 리팩토링하고 Redis 2차 로컬 캐시를 접목하여 단일 엔드포인트 응답 속도 극대화.
            </p>
          </div>

          {/* Differential Comparison Bar */}
          <div className="mt-6 pt-4 border-t border-[#eeeeec] flex flex-col gap-2 font-mono text-[0.6875rem]">
            <div className="flex justify-between text-[#747878]">
              <span>BEFORE (NO CACHE)</span>
              <span>150ms</span>
            </div>
            <div className="w-full h-1.5 bg-[#eeeeec] rounded-full overflow-hidden">
              <div className="h-full bg-[#747878] w-full" />
            </div>

            <div className="flex justify-between text-[#0051d5] font-semibold mt-1">
              <span>OPTIMIZED (REDIS L2)</span>
              <span>15ms</span>
            </div>
            <div className="w-full h-1.5 bg-[#eeeeec] rounded-full overflow-hidden">
              <div className="h-full bg-[#0051d5] w-[10%] transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* Metric 02: Peak Concurrency TPS */}
        <div
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          className={`bg-white p-6 rounded-[4px] border border-[#e2e3e1] transition-all duration-300 flex flex-col justify-between ${
            hoveredCard === 2
              ? 'shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-[#1a1c1b]'
              : 'shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
          }`}
        >
          <div>
            <div className="flex justify-between items-center text-[#747878] font-mono text-[0.6875rem] mb-3">
              <span>METRIC #02</span>
              <span className="text-[#0051d5] font-bold">ZERO FAULTS</span>
            </div>
            <div className="font-display text-3xl font-bold text-[#1a1c1b] tracking-tight">
              12,000 <span className="text-xl text-[#747878] font-normal">TPS</span>
            </div>
            <p className="text-xs sm:text-sm text-[#444748] mt-3 leading-relaxed break-keep">
              Apache JMeter 30,000 가상 유저(VUser) 스트레스 테스트 수행 결과, Redisson 락 풀링 및 Kafka 버퍼링으로 <strong className="font-semibold text-[#1a1c1b]">에러율 0.00%</strong> 무중단 트랜잭션 달성.
            </p>
          </div>

          {/* SVG Sparkline Throughput Curve */}
          <div className="mt-6 pt-4 border-t border-[#eeeeec]">
            <div className="flex justify-between text-[#747878] font-mono text-[0.6875rem] mb-1">
              <span>THROUGHPUT STABILITY</span>
              <span className="text-[#0051d5] font-semibold">30K VUSERS</span>
            </div>
            <svg className="w-full h-11 text-[#0051d5]" fill="none" stroke="currentColor" viewBox="0 0 200 40">
              <path
                d="M 0 35 Q 30 35, 50 25 T 100 12 T 150 10 T 200 10"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M 0 35 Q 30 35, 50 25 T 100 12 T 150 10 T 200 10 L 200 40 L 0 40 Z"
                fill="currentColor"
                fillOpacity="0.08"
              />
            </svg>
          </div>
        </div>

        {/* Metric 03: DB CPU Load */}
        <div
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          className={`bg-white p-6 rounded-[4px] border border-[#e2e3e1] transition-all duration-300 flex flex-col justify-between ${
            hoveredCard === 3
              ? 'shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-[#1a1c1b]'
              : 'shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
          }`}
        >
          <div>
            <div className="flex justify-between items-center text-[#747878] font-mono text-[0.6875rem] mb-3">
              <span>METRIC #03</span>
              <span className="text-[#0051d5] font-bold">-56.0% CPU LOAD</span>
            </div>
            <div className="font-display text-3xl font-bold text-[#1a1c1b] tracking-tight">
              78% → <span className="text-[#0051d5]">22%</span>
            </div>
            <p className="text-xs sm:text-sm text-[#444748] mt-3 leading-relaxed break-keep">
              HikariCP 커넥션 풀 누수 분석 및 슬로우 쿼리(Execution Time &gt; 1000ms) 실행계획 전수 재설계를 통한 RDBMS 부하의 획기적 완화.
            </p>
          </div>

          {/* Minimal Donut Gauge */}
          <div className="mt-6 pt-4 border-t border-[#eeeeec] flex items-center justify-between">
            <div className="font-mono text-[0.6875rem] text-[#747878]">
              <span>CPU HEADROOM:</span>
              <br />
              <span className="text-[#1a1c1b] font-bold text-sm">78% SURPLUS</span>
            </div>
            <div className="relative w-12 h-12">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-[#eeeeec]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <path
                  className="text-[#0051d5]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="22, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-[#1a1c1b]">
                22%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
