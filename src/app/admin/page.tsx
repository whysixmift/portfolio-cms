export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="border-b border-[#262626] pb-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white mb-2">SYSTEM_OVERVIEW</h1>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          {new Date().toISOString().split('T')[0]} / STATUS: OPTIMAL
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#262626] bg-[#000000]">
        
        {/* Metric Block 1 */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-[#262626] hover:bg-[#0A0A0A] transition-colors relative group">
          <div className="absolute top-4 right-4 w-2 h-2 bg-zinc-800 group-hover:bg-red-600 transition-colors" />
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Total Projects</h3>
          <p className="text-5xl font-bold text-white tracking-tighter">00</p>
        </div>

        {/* Metric Block 2 */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-[#262626] hover:bg-[#0A0A0A] transition-colors relative group">
           <div className="absolute top-4 right-4 w-2 h-2 bg-zinc-800 group-hover:bg-red-600 transition-colors" />
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Published Posts</h3>
          <p className="text-5xl font-bold text-white tracking-tighter">00</p>
        </div>

        {/* Metric Block 3 */}
        <div className="p-8 hover:bg-[#0A0A0A] transition-colors relative group bg-white text-black">
          <div className="absolute top-4 right-4 w-2 h-2 bg-black group-hover:bg-red-600 transition-colors" />
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-6 text-black">Network State</h3>
          <p className="text-5xl font-bold tracking-tighter uppercase text-black">Live</p>
        </div>
      </div>
      
      {/* Recent Activity Log Mockup */}
      <div>
        <h2 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">ACTIVITY_LOG [LATEST]</h2>
        <div className="border border-[#262626] divide-y divide-[#262626] font-mono text-xs">
          <div className="p-4 flex gap-4 text-zinc-400">
            <span className="text-white">10:45 AM</span>
            <span className="text-zinc-600">|</span>
            <span>SYSTEM_INIT</span>
            <span className="ml-auto text-zinc-600">[OK]</span>
          </div>
          <div className="p-4 flex gap-4 text-zinc-400">
            <span className="text-white">10:46 AM</span>
            <span className="text-zinc-600">|</span>
            <span>AUTH_ESTABLISHED</span>
            <span className="ml-auto text-zinc-600">[OK]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
