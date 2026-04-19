import Navbar from "@/components/public/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full border-x border-[#262626]">
        {children}
      </div>
      <footer className="w-full border-t border-[#262626] font-mono text-xs text-zinc-600 flex justify-between py-6 px-6 sm:px-12 bg-black">
        <span>© {new Date().getFullYear()}</span>
        <span>SYS_RDY</span>
      </footer>
    </div>
  );
}
