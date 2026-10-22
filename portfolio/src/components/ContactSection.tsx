import { useState } from 'react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('jinho.kwon.dev@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative z-10 w-full py-16 sm:py-24 flex flex-col items-center">
      {/* Intro Heading */}
      <div className="w-full max-w-[680px] flex flex-col items-center text-center mb-8">
        <div className="font-mono text-[0.6875rem] text-[#0051d5] uppercase tracking-widest font-semibold mb-2">
          CLOSING CONVERGENCE • GET IN TOUCH
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] text-[#1a1c1b] font-bold tracking-tight break-keep">
          Let’s Build Something Resilient.
        </h2>
        <p className="text-sm sm:text-base text-[#444748] mt-3 max-w-md leading-relaxed break-keep">
        </p>
      </div>

      {/* Closing Minimal Business Card Chassis */}
      <div className="w-full max-w-[680px] bg-white rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] p-5 sm:p-10 border border-[#e2e3e1] flex flex-col justify-between gap-8 relative overflow-hidden">
        {/* Card Top */}
        <div className="flex justify-between items-start">
          <div className="text-left">
            <div className="font-mono text-[0.6875rem] text-[#0051d5] tracking-widest uppercase font-semibold">
              BACKEND ENGINEER • SEOUL, KR
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#1a1c1b] mt-1">
              권진호 (KWON JINHO)
            </div>
            <div className="text-xs sm:text-sm text-[#444748] mt-0.5 break-keep">
              Distributed Systems / High-Throughput Architecture
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#0051d5] shrink-0">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </div>
        </div>

        {/* Contact Interaction Cluster */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-[#e2e3e1]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="mailto:jinho.kwon.dev@gmail.com"
              className="px-4 py-2 bg-[#1a1c1b] text-white rounded font-mono text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>SEND EMAIL</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-3 py-2 bg-[#f4f4f2] text-[#1a1c1b] border border-[#e2e3e1] rounded font-mono text-xs font-medium hover:bg-[#e8e8e6] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 bg-[#f4f4f2] text-[#1a1c1b] border border-[#e2e3e1] rounded font-mono text-xs font-medium hover:bg-[#e8e8e6] transition-colors flex items-center justify-center gap-1"
            >
              <span>GITHUB</span>
              <span className="material-symbols-outlined text-[13px]">north_east</span>
            </a>
          </div>

          <button
            onClick={() => window.print()}
            className="group flex items-center justify-center sm:justify-start gap-1 text-[#444748] hover:text-[#0051d5] font-mono text-xs transition-colors cursor-pointer py-1"
          >
            <span>EXPORT RESUME PDF</span>
            <span className="material-symbols-outlined text-[14px] group-hover:translate-y-0.5 transition-transform">
              download
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
