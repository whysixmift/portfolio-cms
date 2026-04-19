import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans text-white selection:bg-white selection:text-black">
      <div className="w-full max-w-sm border border-[#262626] bg-[#0A0A0A] p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="flex justify-between items-start mb-10">
           <div className="w-4 h-4 bg-white" />
           <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase">Secured Interface</div>
        </div>
        
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase">AUTH_REQ</h1>
          <p className="text-sm font-mono text-zinc-500 mt-2">// Enter credentials</p>
        </div>

        <form
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">ID / Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="admin@sys.local"
              className="w-full px-4 py-3 bg-black border border-[#262626] text-white focus:outline-none focus:border-white transition-colors text-sm font-mono placeholder:text-zinc-700 rounded-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">Passkey</label>
            <input 
              name="password" 
              type="password" 
              required 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black border border-[#262626] text-white focus:outline-none focus:border-white transition-colors text-sm font-mono placeholder:text-zinc-700 rounded-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full mt-4 bg-white hover:bg-[#e5e5e5] active:scale-[0.98] text-black font-semibold text-sm uppercase tracking-wider py-4 transition-all"
          >
            EXECUTE
          </button>
        </form>
      </div>
    </div>
  );
}
