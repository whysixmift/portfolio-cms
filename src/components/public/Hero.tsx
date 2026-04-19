import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <main className="flex-1 flex flex-col items-start justify-center py-32 px-6 sm:px-12">
      <div className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 border border-[#262626] px-3 py-1.5 block w-fit">
        Status: Online
      </div>
      
      <h1 className="max-w-5xl text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.05] text-white">
        {title}
      </h1>
      
      <p className="max-w-2xl mt-10 text-lg font-mono text-zinc-400">
        {`// ${description}`}
      </p>

      <div className="mt-16 flex flex-col sm:flex-row shadow-sm gap-6 sm:items-center">
        <Link href="/projects" className="group flex items-center justify-center gap-4 h-14 px-8 bg-white text-black font-medium text-sm border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all uppercase tracking-widest">
          VIEW_PROJECTS
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/about" className="flex items-center justify-center h-14 px-8 border border-[#262626] text-white font-mono text-sm hover:border-white transition-colors uppercase tracking-widest">
          READ_LOGS
        </Link>
      </div>
    </main>
  );
}
