import React, { useRef, useState, useEffect } from 'react'
import ResumeSection from './ResumeSection'

type FlowStep = 1 | 2 | 3

export default function HeroWalletSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sheenStyle, setSheenStyle] = useState<React.CSSProperties>({ opacity: 0 })
  const [cardTilt, setCardTilt] = useState<string>('perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  const [isCopied, setIsCopied] = useState(false)
  const [currentStep, setCurrentStep] = useState<FlowStep>(1)

  const isTransitioningRef = useRef(false)
  const currentStepRef = useRef(currentStep)
  useEffect(() => {
    currentStepRef.current = currentStep
  }, [currentStep])
  const touchStartYRef = useRef<number | null>(null)

  // ── PAGE SCROLL LOCKING: 1~2단계(지갑 대기 & 수납) 동안은 페이지 스크롤 고정 ──
  // 3단계(서류 등장) 완료 시에만 정상적인 페이지 하단 스크롤이 자동으로 잠금 해제됩니다.
  useEffect(() => {
    if (currentStep < 3) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [currentStep])

  // ── WHEEL & TOUCH CHOREOGRAPHY LISTENER ──
  // 스크롤 시 페이지가 아래로 내려가지 않고 제자리에서 순차 전개:
  // 1. 명함 & 지갑 대기 → 2. 지갑에 넣음 (수납) → 3. 지갑 사라지며 서류 올라옴
  useEffect(() => {
    let lastWheelTime = 0

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      const step = currentStepRef.current

      // 3단계(서류 전면)이고 아래로 스크롤 시: 정상적인 이력서/프로젝트 문서 스크롤 허용
      if (step === 3 && e.deltaY > 0) {
        return
      }

      // 3단계에서 위로 스크롤 시: 문서 최상단(scrollY <= 10)일 때만 이전 지갑 단계로 복귀
      if (step === 3 && e.deltaY < 0 && window.scrollY > 10) {
        return
      }

      // 미세한 마우스 트랙패드 지터 무시
      if (Math.abs(e.deltaY) < 15) return

      // 1~2단계에서는 기본 페이지 스크롤을 무조건 차단하여 화면 고정!
      e.preventDefault()

      // 애니메이션 중복 발화 방지 쿨다운 (600ms)
      if (now - lastWheelTime < 600 || isTransitioningRef.current) return

      if (e.deltaY > 0) {
        // 휠 아래로 -> 다음 단계 진행
        if (step < 3) {
          lastWheelTime = now
          isTransitioningRef.current = true
          setCurrentStep((prev) => Math.min(3, prev + 1) as FlowStep)
          setTimeout(() => {
            isTransitioningRef.current = false
          }, 650)
        }
      } else if (e.deltaY < 0) {
        // 휠 위로 -> 이전 단계 복귀
        if (step > 1) {
          lastWheelTime = now
          isTransitioningRef.current = true
          setCurrentStep((prev) => Math.max(1, prev - 1) as FlowStep)
          setTimeout(() => {
            isTransitioningRef.current = false
          }, 650)
        }
      }
    }

    // 모바일 터치 스와이프 제어
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null) return
      const step = currentStepRef.current
      const currentY = e.touches[0].clientY
      const deltaY = touchStartYRef.current - currentY

      if (step === 3 && deltaY > 0) return
      if (step === 3 && deltaY < 0 && window.scrollY > 10) return

      if (step < 3 || (step === 3 && window.scrollY <= 10 && deltaY < 0)) {
        if (e.cancelable) e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartYRef.current === null) return
      const currentY = e.changedTouches[0].clientY
      const deltaY = touchStartYRef.current - currentY
      touchStartYRef.current = null
      const step = currentStepRef.current

      if (Math.abs(deltaY) < 35) return
      if (isTransitioningRef.current) return

      if (deltaY > 0 && step < 3) {
        isTransitioningRef.current = true
        setCurrentStep((prev) => Math.min(3, prev + 1) as FlowStep)
        setTimeout(() => {
          isTransitioningRef.current = false
        }, 650)
      } else if (deltaY < 0 && step > 1 && window.scrollY <= 10) {
        isTransitioningRef.current = true
        setCurrentStep((prev) => Math.max(1, prev - 1) as FlowStep)
        setTimeout(() => {
          isTransitioningRef.current = false
        }, 650)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  // 3D Card Mouse Tilt (active in Step 1 before insertion)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentStep !== 1 || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / rect.width - 0.5
    const yPct = mouseY / rect.height - 0.5

    const rotateY = xPct * 10
    const rotateX = -yPct * 10

    setCardTilt(`perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`)
    setSheenStyle({
      opacity: 0.35,
      background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.85) 0%, transparent 65%)`,
    })
  }

  const handleMouseLeave = () => {
    if (currentStep === 1) {
      setCardTilt('perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
      setSheenStyle({ opacity: 0 })
    }
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('jinho.kwon.dev@gmail.com')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  // Smooth step selection
  const goToStep = (step: FlowStep) => {
    setCurrentStep(step)
    if (step < 3) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const resumeEl = document.getElementById('resume-document-stage')
      if (resumeEl) {
        const top = resumeEl.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* ── HERO STAGE: STEPS 1, 2 (CARD & WALLET ASSEMBLY) ── */}
      {/* 3단계 도달 시 지갑이 부드럽게 사라지며 아래 서류와 교차 전환 */}
      <section
        id="card-hero"
        className={`relative z-20 w-full flex flex-col justify-start items-center pt-2 sm:pt-4 pb-4 px-3 sm:px-6 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          currentStep === 3
            ? 'opacity-0 -translate-y-8 pointer-events-none max-h-0 overflow-hidden py-0 my-0'
            : 'opacity-100 translate-y-0 min-h-[calc(100vh-6rem)]'
        }`}
      >

        {/* ── INTEGRATED CARD & WALLET PHYSICAL CHASSIS ── */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[620px] h-[550px] sm:h-[590px] flex flex-col items-center select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 translate-y-0 scale-100"
        >
          {/* ── LAYER 1: WALLET BACKPLATE (가죽 지갑 본체 및 안감 뒷판) ── */}
          {/* 1단계부터 명함 아래에서 항시 대기 */}
          <div
            className="absolute left-0 right-0 bottom-0 h-[320px] sm:h-[340px] rounded-2xl overflow-hidden z-0 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-[#33363b] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 translate-y-0 scale-100"
            style={{
              background: 'linear-gradient(155deg, #1c1d20 0%, #101113 100%)',
            }}
          >
            {/* Wallet Perimeter Stitching (지갑 테두리 점선 스티치) */}
            <div className="absolute inset-2 pointer-events-none rounded-xl border border-dashed border-[#44474f]/70" />

            {/* Wallet Header Bar (Visible above the card when inserted in Step 2) */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 text-[#858890] font-mono text-[0.625rem] sm:text-[0.6875rem] tracking-widest uppercase relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px] text-[#0051d5]">wallet</span>
                <span className="font-semibold text-white/90">KJ ARCHIVAL LEATHER // CASE 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full inline-block ${
                    currentStep === 1 ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                  }`}
                />
                <span className="text-white/80 font-medium">
                  {currentStep === 1 ? '지갑 대기 중 (WAITING)' : '명함 수납 완료 (SECURED)'}
                </span>
              </div>
            </div>

            {/* Slot Guide (Visible in Step 1 when wallet waits for card) */}
            {currentStep === 1 && (
              <div className="absolute top-11 inset-x-0 flex flex-col items-center text-center pointer-events-none px-4">
                <div className="flex items-center gap-1 font-mono text-[0.6875rem] text-[#0051d5] font-semibold tracking-wider animate-bounce">
                  <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
                  <span>스크롤하면 위 명함이 이 포켓 안으로 쏙 들어갑니다</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
                </div>
                <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-[#0051d5]/50 to-transparent mt-1" />
              </div>
            )}
          </div>

          {/* ── LAYER 2: THE BUSINESS CARD (명함) ── */}
          {/*
            - Step 1: Ready at top position above wallet (mt-2 translate-y-0 scale-100), mouse 3D tilt active
            - Step 2: Smoothly slides down into wallet pocket (translate-y-[260px] sm:translate-y-[280px] scale-[0.98])
          */}
          <div
            style={{
              transform: currentStep === 1 ? cardTilt : undefined,
              transformStyle: currentStep === 1 ? 'preserve-3d' : 'flat',
              zIndex: 10,
            }}
            className={`relative w-[90%] sm:w-[92%] max-w-[530px] sm:max-w-[550px] h-[225px] sm:h-[245px] bg-white rounded-[6px] border border-[#e2e3e1] p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              currentStep === 1
                ? 'mt-2 translate-y-0 scale-100 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] cursor-grab active:cursor-grabbing'
                : 'mt-2 translate-y-[260px] sm:translate-y-[280px] scale-[0.98] shadow-md brightness-95'
            }`}
          >
            {/* Specular Sheen (빛 반사) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={sheenStyle}
            />

            {/* Architectural Watermark */}
            <div className="absolute -right-4 -bottom-6 pointer-events-none opacity-[0.035] select-none text-[120px] sm:text-[150px] font-display font-bold leading-none tracking-tighter">
              KJ
            </div>

            {/* Card Top: Title & Artifact Matrix */}
            <div className="flex justify-between items-start gap-2 sm:gap-3 z-10">
              <div>
                <div className="flex items-center gap-1 font-mono text-[0.6rem] sm:text-[0.65rem] text-[#0051d5] tracking-widest uppercase font-semibold">
                  <span>LEAD BACKEND SPECIALIST</span>
                  <span>/</span>
                  <span>KR</span>
                </div>
                <h1 className="font-display text-xl sm:text-2xl lg:text-[1.85rem] text-[#1a1c1b] font-bold tracking-tight mt-0.5">
                  KWON JINHO
                </h1>
                <p className="font-sans text-[0.75rem] sm:text-[0.8125rem] text-[#444748] mt-0.5 font-normal tracking-tight break-keep">
                  안정적인 대용량 트래픽 서비스를 구축하는 백엔드 엔지니어
                </p>
                {/* Mobile Quick Tags */}
                <div className="flex sm:hidden flex-wrap gap-1 mt-1">
                  {['JAVA 21', 'SPRING BOOT', 'MYSQL', 'REDIS'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.5625rem] bg-[#f4f4f2] px-1.5 py-0.5 rounded text-[#1a1c1b] font-medium border border-[#e2e3e1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Tag Matrix (Desktop) */}
              <div className="hidden sm:flex flex-col items-end gap-1 text-right">
                <span className="font-mono text-[0.6rem] text-[#747878] uppercase tracking-wider font-semibold">
                  PRIMARY ARTIFACTS
                </span>
                <div className="flex flex-wrap justify-end gap-1 max-w-[200px] mt-0.5">
                  {['JAVA 17/21', 'SPRING BOOT', 'MYSQL 8', 'REDIS', 'KAFKA'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.58rem] bg-[#f4f4f2] px-1.5 py-0.5 rounded text-[#1a1c1b] font-medium border border-[#e2e3e1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Center: Structural Spec */}
            <div className="z-10 py-1 sm:py-1.5 my-0.5 border-y border-[#ecece8] flex items-center justify-between font-mono text-[0.6rem] sm:text-[0.65rem] text-[#444748]">
              <div className="flex items-center gap-2">
                <span className="text-[#1a1c1b] font-semibold">SYSTEMS</span>
                <span className="text-[#c4c7c7]">|</span>
                <span className="tracking-wide text-xs">HIGH CONCURRENCY • FAULT TOLERANCE</span>
              </div>
              <div className="font-mono text-[#0051d5] font-medium hidden sm:block">
                37.5665° N, 126.9780° E
              </div>
            </div>

            {/* Card Footer: Fast Links & Spec Code */}
            <div className="flex justify-between items-end z-10">
              <div className="flex items-center gap-2.5 sm:gap-4 font-mono text-xs">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center gap-0.5 text-[#1a1c1b] hover:text-[#0051d5] transition-colors font-medium text-[0.6875rem] sm:text-xs"
                >
                  <span>GITHUB</span>
                  <span className="material-symbols-outlined text-[11px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    north_east
                  </span>
                </a>
                <span className="text-[#c4c7c7] font-light">•</span>
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-0.5 text-[#1a1c1b] hover:text-[#0051d5] transition-colors font-medium cursor-pointer text-[0.6875rem] sm:text-xs"
                >
                  <span>{isCopied ? 'COPIED!' : 'EMAIL'}</span>
                  <span className="material-symbols-outlined text-[11px]">
                    {isCopied ? 'check' : 'content_copy'}
                  </span>
                </button>
                <span className="text-[#c4c7c7] font-light">•</span>
                <button
                  onClick={() => goToStep(2)}
                  className="group flex items-center gap-0.5 text-[#0051d5] font-semibold hover:underline cursor-pointer text-[0.6875rem] sm:text-xs"
                >
                  <span>지갑에 넣기 ↓</span>
                </button>
              </div>
              <div className="font-mono text-[0.58rem] sm:text-[0.625rem] text-[#747878] tracking-widest uppercase">
                SPEC 2026-KJ
              </div>
            </div>
          </div>

          {/* ── LAYER 3: WALLET FRONT POCKET (지갑 앞주머니 플랩) ── */}
          {/* 1단계부터 명함 아래에서 항시 대기, 2단계에서 명함 하단 65% 수납 */}
          <div
            className="absolute left-0 right-0 bottom-0 h-[210px] sm:h-[220px] rounded-b-2xl border-t border-[#3d4047] z-30 pointer-events-none shadow-[0_-10px_30px_rgba(0,0,0,0.55)] flex flex-col justify-between overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 translate-y-0 scale-100"
            style={{
              background: 'linear-gradient(180deg, #24252a 0%, #121316 100%)',
            }}
          >
            {/* Centered Ergonomic Thumb Notch Cutout with Leather Stitching */}
            <div className="relative w-full">
              <svg
                viewBox="0 0 600 24"
                className="w-full h-6 block text-[#1a1b1e] fill-current"
                preserveAspectRatio="none"
              >
                {/* Curved Notch Leather Flap Profile */}
                <path d="M 0,0 L 220,0 C 255,0 260,20 300,20 C 340,20 345,0 380,0 L 600,0 L 600,24 L 0,24 Z" />
                {/* Perimeter Stitch Line along the Notch */}
                <path
                  d="M 10,2 L 220,2 C 255,2 260,21 300,21 C 340,21 345,2 380,2 L 590,2"
                  fill="none"
                  stroke="#44474f"
                  strokeDasharray="4,4"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Front Pocket Lower Perimeter Stitching */}
            <div className="absolute inset-x-2 bottom-2 top-6 pointer-events-none border-b border-x border-dashed border-[#44474f]/60 rounded-b-xl" />

            {/* Stamped Leather Label on Front Pocket */}
            <div className="pb-4 pt-2 flex flex-col items-center px-4 relative z-10">
              <div className="font-mono text-[0.625rem] sm:text-[0.6875rem] text-[#b0b4c0] uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]" />
                <span>KWON JINHO • PORTFOLIO WALLET POCKET</span>
              </div>
              <div className="text-[0.625rem] text-[#717480] font-mono mt-1 text-center">
                {currentStep === 1 && '명함 아래쪽 카드지갑 대기 중 • 스크롤하면 명함이 지갑에 들어갑니다 ↓'}
                {currentStep === 2 && '명함이 지갑 안으로 안전하게 수납되었습니다! • 스크롤하면 서류가 올라옵니다 ↓'}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Action Cue */}
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <button
            onClick={() => goToStep(currentStep === 1 ? 2 : 3)}
            className="group flex flex-col items-center gap-1 text-[#444748] hover:text-[#0051d5] transition-colors cursor-pointer"
          >
            <span className="font-mono text-[0.6875rem] tracking-widest uppercase font-semibold">
              {currentStep === 1 && 'SCROLL DOWN: 2단계 지갑에 명함 넣기 ↓'}
              {currentStep === 2 && 'SCROLL DOWN: 3단계 서류 올라옴 ↓'}
            </span>
            <div className="w-px h-7 bg-[#dadad8] group-hover:bg-[#0051d5] group-hover:h-10 transition-all duration-300 relative overflow-hidden">
              <div className="w-full h-1/2 bg-[#0051d5] animate-bounce" />
            </div>
          </button>
        </div>
      </section>

      {/* ── 3. THE RISING DOSSIER DOCUMENT (3단계: 서류 올라옴) ── */}
      {/* 3단계 도달 시 지갑 퇴장과 동시에 매끄럽게 위로 상승하여 전면 배치 */}
      <div
        id="resume-document-stage"
        className={`w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
          currentStep === 3
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto mt-2'
            : 'opacity-0 translate-y-20 scale-[0.96] pointer-events-none max-h-0 overflow-hidden'
        }`}
      >
        {/* Document Header Tab emerging from desk */}
        <div className="w-full max-w-[880px] mx-auto px-4 flex justify-between items-center mb-[-8px] z-20 relative">
          <div className="bg-[#1a1c1b] text-white px-3.5 py-1.5 rounded-t font-mono text-[0.6875rem] tracking-widest uppercase flex items-center gap-1.5 shadow-sm font-semibold">
            <span className="material-symbols-outlined text-[14px] text-[#0051d5]">description</span>
            <span>STEP 03: OFFICIAL DOSSIER REVEALED // SHEET 01</span>
          </div>
          <div className="font-mono text-[0.625rem] text-[#747878] bg-white px-3 py-1 rounded-t border-t border-x border-[#e2e3e1]">
            서류가 위로 올라왔습니다
          </div>
        </div>

        {/* Full Interactive Resume Section */}
        <ResumeSection />
      </div>
    </div>
  )
}
