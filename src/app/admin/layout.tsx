import { auth } from "@/auth";
import Link from "next/link";
import { LayoutDashboard, FileText, Settings, ExternalLink, LogOut, TerminalSquare } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex h-screen w-full bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Sidebar: Sharp lines, terminal aesthetic */}
      <aside className="w-64 flex flex-col border-r border-[#262626] bg-[#0A0A0A]">
        <div className="flex items-center gap-3 px-6 py-6 font-mono text-sm tracking-wider uppercase border-b border-[#262626]">
          <TerminalSquare className="w-4 h-4 text-white" />
          ADMIN_SYS
        </div>

        <nav className="flex-1 flex flex-col pt-6 px-4 gap-1">
          <Link href="/admin" className="flex items-center gap-4 px-3 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors rounded-sm group">
            <LayoutDashboard className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-4 px-3 py-3 text-sm font-medium text-zinc-400 hover:bg-white hover:text-black transition-colors rounded-sm group">
            <FileText className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            Projects
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-4 px-3 py-3 text-sm font-medium text-zinc-400 hover:bg-white hover:text-black transition-colors rounded-sm group">
            <FileText className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            Blog Posts
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-4 px-3 py-3 text-sm font-medium text-zinc-400 hover:bg-white hover:text-black transition-colors rounded-sm group">
            <Settings className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-[#262626] flex flex-col gap-1">
          <a href="/" target="_blank" className="flex items-center gap-4 px-3 py-3 text-sm font-medium text-zinc-400 hover:bg-white hover:text-black transition-colors rounded-sm group">
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            Live View
          </a>
          <form action="/api/auth/signout" method="POST">
            <button type="submit" className="flex w-full items-center gap-4 px-3 py-3 text-sm font-medium text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-colors rounded-sm group">
              <LogOut className="w-4 h-4" />
              Terminate
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto w-full bg-black">
        {/* Top Header */}
        <header className="sticky top-0 z-10 w-full flex items-center justify-between px-8 py-5 border-b border-[#262626] bg-[#000000] backdrop-blur-none">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            {`> USER: ADMIN [AUTHORIZED]`}
          </div>
          <div className="w-6 h-6 border border-white bg-black flex items-center justify-center">
             <div className="w-2 h-2 bg-white" />
          </div>
        </header>

        <div className="p-8 w-full max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
