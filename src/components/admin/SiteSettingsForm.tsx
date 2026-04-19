"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SiteSettingsFormProps {
  initialData: {
    heroTitle?: string;
    heroDescription?: string;
  } | null;
}

export default function SiteSettingsForm({ initialData }: SiteSettingsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      heroTitle: formData.get("heroTitle"),
      heroDescription: formData.get("heroDescription"),
    };

    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      
      router.refresh();
      // Show success logic or just reset loading
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-2xl bg-[#000000] border border-[#262626] p-8 md:p-12">
      <div className="flex flex-col gap-3">
        <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Hero Title</label>
        <textarea 
          name="heroTitle"
          defaultValue={initialData?.heroTitle || ""}
          required
          rows={3}
          className="w-full bg-black border border-[#262626] p-4 text-white text-lg focus:outline-none focus:border-white transition-colors uppercase font-bold tracking-tighter resize-none"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Hero Description</label>
        <textarea 
          name="heroDescription"
          defaultValue={initialData?.heroDescription || ""}
          required
          rows={4}
          className="w-full bg-black border border-[#262626] p-4 text-zinc-400 font-mono text-sm focus:outline-none focus:border-white transition-colors resize-none"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-fit self-end mt-4 bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#e5e5e5] active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? "EXECUTING..." : "SAVE_CONFIG"}
      </button>
    </form>
  );
}
