"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface PostFormProps {
  initialData: {
    id: string;
    title: string;
    slug: string;
    content: string;
  } | null;
}

export default function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!initialData) {
      const slugInput = document.getElementById("slug-input") as HTMLInputElement;
      if (slugInput) {
        slugInput.value = e.target.value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      content: formData.get("content"),
    };

    try {
      const isEditing = !!initialData;
      // Mutations use ID, not slug
      const url = isEditing ? `/api/posts/${initialData.id}` : "/api/posts";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Operation failed");
      
      router.refresh();
      router.push("/admin/blog");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full bg-[#000000] border border-[#262626] p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        <div className="flex flex-col gap-3">
          <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Post Title</label>
          <input 
            name="title"
            onChange={handleTitleChange}
            defaultValue={initialData?.title || ""}
            required
            className="w-full bg-black border border-[#262626] p-4 text-white text-xl font-bold tracking-tight focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">URI Slug</label>
          <input 
            id="slug-input"
            name="slug"
            defaultValue={initialData?.slug || ""}
            required
            className="w-full bg-black border border-[#262626] p-4 text-zinc-400 font-mono text-sm focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest flex items-center justify-between">
          <span>Markdown Content</span>
          <span className="text-zinc-700">Raw Format</span>
        </label>
        <textarea 
          name="content"
          defaultValue={initialData?.content || ""}
          required
          rows={16}
          className="w-full bg-black border border-[#262626] p-6 text-zinc-300 font-mono text-sm focus:outline-none focus:border-white transition-colors leading-relaxed tracking-wide resize-y"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full mt-4 bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#e5e5e5] active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? "UPLOADING..." : (initialData ? "COMMIT_CHANGES" : "PUBLISH_LOG")}
      </button>
    </form>
  );
}
