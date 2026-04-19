export default function AboutPage() {
  return (
    <main className="py-20 px-6 sm:px-12 min-h-screen">
      <div className="mb-16 border-b border-[#262626] pb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
          SYS_LOGS
        </h1>
        <p className="mt-4 font-mono text-zinc-500 tracking-widest text-sm uppercase">
          // About the operator
        </p>
      </div>

      <div className="max-w-3xl border border-[#262626] bg-[#000000] p-8 md:p-12">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-white">PROFILE_DATA</h2>
        
        <div className="space-y-6 font-mono text-sm leading-relaxed text-zinc-400">
          <p>
            <span className="text-white">Initialize:</span> Senior Full-Stack Engineer prioritizing massive contrast, high performance, and minimal visual noise. 
          </p>
          <p>
            I architect digital infrastructure relying on modern primitives. My stack usually enforces strict typing, aggressive caching strategies, and brutalist geometric patterns that respect user intent without overwhelming their cognition.
          </p>
          
          <div className="pt-8 mt-8 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white uppercase tracking-widest text-xs mb-4">Core Competencies</h3>
              <ul className="space-y-2">
                <li>[+] TS / React / Next.js</li>
                <li>[+] Prisma / Postgres / SQLite</li>
                <li>[+] System Architecture</li>
                <li>[+] UI / UX Engineering</li>
              </ul>
            </div>
            <div>
               <h3 className="text-white uppercase tracking-widest text-xs mb-4">Contact Protocol</h3>
               <ul className="space-y-2">
                 <li><a href="mailto:hello@sys.local" className="hover:text-white transition-colors underline decoration-[#262626] underline-offset-4">Email</a></li>
                 <li><a href="#" className="hover:text-white transition-colors underline decoration-[#262626] underline-offset-4">GitHub</a></li>
                 <li><a href="#" className="hover:text-white transition-colors underline decoration-[#262626] underline-offset-4">X / Twitter</a></li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
