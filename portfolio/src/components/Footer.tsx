export default function Footer() {
  return (
    <footer className="w-full bg-white mt-20 py-8 border-t border-[#e2e3e1]">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-[0.6875rem] text-[#747878]">
          <span className="font-semibold text-[#1a1c1b]">SYSTEM CHASSIS</span>
          <span>•</span>
          <span>ARCHITECT KWON JINHO</span>
          <span>•</span>
          <span>SEOUL, KR</span>
        </div>
        <div className="font-mono text-[0.6875rem] text-[#747878] tracking-wider uppercase">
          © 2026 KWON JINHO. HIGH-THROUGHPUT DISTRIBUTED SYSTEMS.
        </div>
      </div>
    </footer>
  )
}
