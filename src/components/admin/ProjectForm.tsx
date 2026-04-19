"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectFormProps {
  initialData: {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    link: string | null;
  } | null;
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl"),
      link: formData.get("link"),
    };

    try {
      const isEditing = !!initialData;
      const url = isEditing ? `/api/projects/${initialData.id}` : "/api/projects";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Operation failed");
      
      router.refresh();
      router.push("/admin/projects");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full bg-[#000000] border border-[#262626] p-8 md:p-12">
      <div className="flex flex-col gap-3">
        <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Project Title</label>
        <input 
          name="title"
          defaultValue={initialData?.title || ""}
          required
          className="w-full bg-black border border-[#262626] p-4 text-white text-xl font-bold tracking-tight focus:outline-none focus:border-white transition-colors"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Description</label>
        <textarea 
          name="description"
          defaultValue={initialData?.description || ""}
          required
          rows={5}
          className="w-full bg-black border border-[#262626] p-4 text-zinc-400 font-mono text-sm focus:outline-none focus:border-white transition-colors resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Image URL</label>
          <input 
            name="imageUrl"
            defaultValue={initialData?.imageUrl || ""}
            className="w-full bg-black border border-[#262626] p-4 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">External Link</label>
          <input 
            name="link"
            defaultValue={initialData?.link || ""}
            className="w-full bg-black border border-[#262626] p-4 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full mt-8 bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#e5e5e5] active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : (initialData ? "UPDATE_DATA" : "DEPLOY_PROJECT")}
      </button>
    </form>
  );
}
