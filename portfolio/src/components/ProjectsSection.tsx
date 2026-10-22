import { useState } from 'react'

const javaSnippet = `// Distributed Idempotent Lock Execution with Spring AOP Fallback
@Transactional
public OrderResponse executeConcurrentOrder(String itemSku, Long customerId, int quantity) {
    RLock lock = redissonClient.getFairLock("LOCK:ITEM:" + itemSku);
    boolean acquired = false;
    try {
        acquired = lock.tryLock(3000, 2000, TimeUnit.MILLISECONDS);
        if (!acquired) {
            throw new ConcurrencyLockException(ErrorCode.INVENTORY_BUSY);
        }
        // 1. Atomic decrement in memory & DB consistency sync
        Inventory item = inventoryRepository.findBySkuWithLock(itemSku);
        item.deduct(quantity);
        
        // 2. Produce non-blocking event to Kafka cluster
        kafkaTemplate.send(PAYMENT_TOPIC, new OrderEvent(itemSku, customerId, quantity));
        return new OrderResponse(OrderStatus.QUEUED, UUID.randomUUID());
    } finally {
        if (acquired && lock.isHeldByCurrentThread()) {
            lock.unlock();
        }
    }
}`

export default function ProjectsSection() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'architecture' | 'code'>('architecture')

  const copyCode = () => {
    navigator.clipboard.writeText(javaSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="projects" className="relative z-10 w-full py-16 sm:py-24 flex flex-col items-center">
      {/* Section Header */}
      <div className="w-full max-w-[880px] mb-8 flex flex-col items-start">
        <div className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-[#0051d5] font-semibold uppercase tracking-widest">
          <span>ENGINEERING CASE STUDIES</span>
          <span>/</span>
          <span>PRODUCTION INCIDENTS & ARCHITECTURE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#1a1c1b] font-bold tracking-tight mt-1">
          Technical Whitepapers & Systems
        </h2>
        <p className="text-sm sm:text-base text-[#444748] max-w-2xl mt-1.5">
        </p>
      </div>

      <div className="w-full max-w-[880px] flex flex-col gap-12 sm:gap-16">
        {/* CASE STUDY 001: FINFLOW */}
        <article className="bg-white rounded-[4px] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.03)] p-6 sm:p-10 border border-[#e2e3e1]">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#e2e3e1] gap-2 font-mono text-[0.6875rem]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0051d5]">PROJECT DOCUMENT / 001</span>
              <span className="text-[#c4c7c7]">•</span>
              <span className="text-[#444748]">DISTRIBUTED PAYMENT ENGINE</span>
            </div>
            <div className="text-[#747878] flex items-center gap-2">
              <span>PERIOD: 2025.04 — 2025.10</span>
              <span>•</span>
              <span className="text-[#1a1c1b] font-semibold">LEAD BACKEND ENGINEER</span>
            </div>
          </div>

          {/* Project Title */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0051d5] rounded-sm inline-block shrink-0" />
              <h3 className="font-display text-2xl sm:text-3xl text-[#1a1c1b] font-bold tracking-tight break-keep">
                FinFlow — 대용량 트래픽 결제 및 정산 트랜잭션 플랫폼
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#444748] mt-2 leading-relaxed break-keep">
              순간 초당 요청량(TPS) 폭증 시 발생하는 재고 마이너스 및 중복 결제 결함을 원천 차단하고 결제 승인과 정산 프로세스를 디커플링한 분산 백엔드 플랫폼입니다.
            </p>
          </div>

          {/* Problem / Solution Split */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {/* The Problem */}
            <div className="bg-[#f4f4f2] p-4 sm:p-5 rounded border border-[#e2e3e1]">
              <div className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-[#ba1a1a] font-semibold uppercase mb-2">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                <span>THE ARCHITECTURAL BOTTLE-NECK</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1a1c1b] leading-relaxed break-keep">
                선착순 할인 프로모션 시 <strong className="font-semibold text-[#ba1a1a]">1만 회 이상의 동시 결제 요청</strong>이 단일 RDBMS 인스턴스로 집중되며 Connection Pool 고갈 및 비관적 락(Pessimistic Lock)으로 인한 심각한 데드락(Deadlock)과 주문 결제 누락 발생.
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-[#f4f4f2] p-4 sm:p-5 rounded border border-[#e2e3e1]">
              <div className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-[#0051d5] font-semibold uppercase mb-2">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>ENGINEERED RESOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1a1c1b] leading-relaxed break-keep">
                <strong className="font-semibold text-[#0051d5]">Redisson 분산 락(Distributed Lock)</strong>을 채택하여 재고 차감 임계 구역의 락 점유 시간을 <strong className="font-semibold">140ms에서 8ms</strong>로 단축. 결제 이후의 장시간 I/O 정산 로직은 <strong className="font-semibold">Apache Kafka 이벤트</strong>로 분리하여 멱등성(Idempotency) 보장.
              </p>
            </div>
          </div>

          {/* Interactive Tab Switcher: Architecture vs Code */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 font-mono text-[0.6875rem]">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1 rounded transition-colors font-semibold ${
                    activeTab === 'architecture'
                      ? 'bg-[#1a1c1b] text-white'
                      : 'bg-[#f4f4f2] text-[#444748] hover:text-[#1a1c1b]'
                  }`}
                >
                  FIGURE 1.1 — SYSTEM SCHEMATIC
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 rounded transition-colors font-semibold flex items-center gap-1 ${
                    activeTab === 'code'
                      ? 'bg-[#1a1c1b] text-white'
                      : 'bg-[#f4f4f2] text-[#444748] hover:text-[#1a1c1b]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px]">code</span>
                  <span>OrderLockService.java</span>
                </button>
              </div>

              {activeTab === 'code' && (
                <button
                  onClick={copyCode}
                  className="font-mono text-[0.6875rem] text-[#0051d5] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY RAW'}</span>
                </button>
              )}
            </div>

            {/* Architecture Tab Content */}
            {activeTab === 'architecture' ? (
              <div className="bg-[#1c1b1b] text-white p-4 sm:p-6 rounded-lg font-mono text-[0.72rem] sm:text-xs overflow-x-auto leading-relaxed shadow-inner border border-[#313030]">
                <pre className="text-slate-200">
{`[ CLIENT HTTP REQ ] → [ NGINX L4/L7 LB ]
                              ↓
                  [ SPRING API GATEWAY ]
                              ↓
             +----------------+----------------+
             | ORDER & INVENTORY SERVICE        |
             |  • Redisson Distributed Lock     | ←→ [ REDIS CLUSTER ]
             |  • Atomic Inventory Validation  |      (TTL: 3000ms / Lease: 2000ms)
             +----------------+----------------+
                              ↓ (Emit Kafka Event: OrderCreatedEvent)
                   [ KAFKA BROKER (PAYMENT_TOPIC) ]
                              ↓ (Consumer Group: settlement-workers)
             +----------------+----------------+
             | SETTLEMENT & PG WORKER SERVICE  |
             |  • Idempotency Key Verification | ←→ [ MYSQL 8.0 CLUSTER ]
             |  • External PG Gateway Async    |      (InnoDB Multi-AZ Read Replica)
             +---------------------------------+`}
                </pre>
              </div>
            ) : (
              <div className="bg-[#1c1b1b] text-white p-4 sm:p-6 rounded-lg font-mono text-xs overflow-x-auto border border-[#313030] code-block">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{javaSnippet}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Technical Retrospective */}
          <div className="mt-6 p-4 sm:p-5 bg-[#f4f4f2] rounded border border-[#e2e3e1] text-xs sm:text-sm text-[#1a1c1b] break-keep">
            <div className="font-mono text-[0.6875rem] text-[#747878] uppercase font-semibold mb-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#0051d5]">insights</span>
              <span>CRITICAL RETROSPECTIVE • DB DEADLOCK MITIGATION</span>
            </div>
            트랜잭션 내부에서 외부 I/O(외부 PG 결제사 연동 통신)를 수행하던 기존 안티패턴을 감지하여 DB 트랜잭션 스코프에서 외부 API 호출을 완벽히 분리했습니다. 이를 통해 DB 커넥션 유지 시간을 평균 <strong className="font-semibold text-[#0051d5]">420ms에서 12ms</strong>로 97% 압축하였으며, 커넥션 풀 고갈 장애를 제로화했습니다.
          </div>
        </article>

        {/* CASE STUDY 002: LOGPULSE */}
        <article className="bg-white rounded-[4px] shadow-[0_2px_12px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.03)] p-6 sm:p-10 border border-[#e2e3e1]">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#e2e3e1] gap-2 font-mono text-[0.6875rem]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0051d5]">PROJECT DOCUMENT / 002</span>
              <span className="text-[#c4c7c7]">•</span>
              <span className="text-[#444748]">OBSERVABILITY ENGINE</span>
            </div>
            <div className="text-[#747878] flex items-center gap-2">
              <span>PERIOD: 2024.08 — 2024.12</span>
              <span>•</span>
              <span className="text-[#1a1c1b] font-semibold">BACKEND & PIPELINE ARCHITECT</span>
            </div>
          </div>

          {/* Project Title */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0051d5] rounded-sm inline-block shrink-0" />
              <h3 className="font-display text-2xl sm:text-3xl text-[#1a1c1b] font-bold tracking-tight break-keep">
                LogPulse — 분산 실시간 로깅 및 장애 모니터링 시스템
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#444748] mt-2 leading-relaxed break-keep">
              분산 마이크로서비스 환경에서 수집되는 하루 8,000만 건의 트랜잭션 로그를 유실 없이 집계하고, 임계치 초과 에러를 3초 이내에 운영팀에 전파하는 분석 파이프라인입니다.
            </p>
          </div>

          {/* Core Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'SPRING CLOUD GATEWAY',
              'KAFKA LOG CONSUMER',
              'ELASTICSEARCH 8.x',
              'GRAFANA DASHBOARD',
              'SLACK WEBHOOK ALERT',
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.6875rem] bg-[#f4f4f2] px-2 py-0.5 rounded text-[#1a1c1b] font-medium border border-[#e2e3e1]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 3 Metric Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-[#f4f4f2] rounded border border-[#e2e3e1]">
              <div className="font-mono text-[0.6875rem] text-[#0051d5] font-semibold uppercase mb-1">
                AGGREGATION CAPACITY
              </div>
              <div className="font-display text-2xl sm:text-3xl text-[#1a1c1b] font-bold">
                80M+ / DAY
              </div>
              <p className="text-xs text-[#444748] mt-1.5 leading-normal">
                트랜잭션 추적 번호(TraceId/SpanId)를 통한 전사 분산 추적 완비
              </p>
            </div>

            <div className="p-4 bg-[#f4f4f2] rounded border border-[#e2e3e1]">
              <div className="font-mono text-[0.6875rem] text-[#0051d5] font-semibold uppercase mb-1">
                INCIDENT DETECTION
              </div>
              <div className="font-display text-2xl sm:text-3xl text-[#1a1c1b] font-bold">
                &lt; 3 SECONDS
              </div>
              <p className="text-xs text-[#444748] mt-1.5 leading-normal">
                HTTP 5xx 및 예외 스택트레이스 발생 시 온콜 즉각 알림 체계 구축
              </p>
            </div>

            <div className="p-4 bg-[#f4f4f2] rounded border border-[#e2e3e1]">
              <div className="font-mono text-[0.6875rem] text-[#0051d5] font-semibold uppercase mb-1">
                STORAGE OPTIMIZATION
              </div>
              <div className="font-display text-2xl sm:text-3xl text-[#1a1c1b] font-bold">
                -45% DISK USAGE
              </div>
              <p className="text-xs text-[#444748] mt-1.5 leading-normal">
                인덱스 롤오버 및 ILM(Index Lifecycle Management) 압축 적용
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
