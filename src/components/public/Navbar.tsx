import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between py-8 px-6 sm:px-12 border-b border-[#262626] bg-[#000000] sticky top-0 z-50">
      <div className="font-mono text-sm uppercase tracking-widest flex items-center gap-3">
        <Link href="/" className="hover:text-white transition-colors text-white">HQ_SYSTEM</Link>
        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
      </div>
      <nav className="flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
        <Link href="/projects" className="text-zinc-500 hover:text-white transition-colors">Projects</Link>
        <Link href="/blog" className="text-zinc-500 hover:text-white transition-colors">Blog</Link>
        <Link href="/about" className="text-zinc-500 hover:text-white transition-colors">About</Link>
        {/* Optional quick link to admin if you wanted */}
        <Link href="/login" className="text-zinc-800 hover:text-zinc-400 transition-colors ml-4 hidden sm:block">SYS_LOGIN</Link>
      </nav>
    </header>
  );
}
