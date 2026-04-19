import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await db.post.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 px-6 sm:px-12 max-w-4xl mx-auto min-h-screen">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-16"
      >
        <ArrowLeft className="w-4 h-4" />
        RETURN_TO_INDEX
      </Link>
      
      <header className="mb-16 border-b border-[#262626] pb-12">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-3">
          <span className="w-2 h-2 bg-white" />
          TS: {new Date(post.createdAt).toISOString().split("T")[0]}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
          {post.title}
        </h1>
      </header>

      {/* Renders standard HTML since we are using React-Quill for CMS */}
      <div 
        className="max-w-none text-lg leading-relaxed text-zinc-400 font-mono tracking-wide
          [&_p]:mb-6
          [&_h1]:text-white [&_h1]:font-sans [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:mb-6 [&_h1]:mt-12
          [&_h2]:text-white [&_h2]:font-sans [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-6 [&_h2]:mt-12
          [&_h3]:text-white [&_h3]:font-sans [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:mb-4 [&_h3]:mt-8
          [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[#262626] [&_a:hover]:decoration-white [&_a]:transition-colors
          [&_ul]:list-square [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:marker:text-zinc-600
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:marker:text-zinc-600
          [&_blockquote]:border-l border-[#262626] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-zinc-500
          [&_img]:w-full [&_img]:border [&_img]:border-[#262626] [&_img]:mb-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
