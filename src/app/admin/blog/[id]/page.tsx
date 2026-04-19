import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import PostForm from "@/components/admin/PostForm";
import { ArrowLeft } from "lucide-react";

export default async function BlogEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const isNew = resolvedParams.id === "new";

  let post = null;
  if (!isNew) {
    post = await db.post.findUnique({ where: { id: resolvedParams.id } });
    if (!post) notFound();
  }

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <Link href="/admin/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors w-fit">
        <ArrowLeft className="w-4 h-4" /> CANCEL_OPERATION
      </Link>
      
      <div className="border-b border-[#262626] pb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-2 uppercase">
          {isNew ? "Write Log" : "Modify Post"}
        </h1>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          // {isNew ? "Drafting new markdown entry" : `TARGET: ${post?.slug}`}
        </p>
      </div>

      <PostForm initialData={post} />
    </div>
  );
}
