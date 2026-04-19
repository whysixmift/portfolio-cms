import { db } from "@/lib/db";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default async function BlogIndexPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-20 px-6 sm:px-12 min-h-screen">
      <div className="mb-16 border-b border-[#262626] pb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
          DATA_LOG
        </h1>
        <p className="mt-4 font-mono text-zinc-500 tracking-widest text-sm uppercase">
          // Technical musings, system notes, and architecture breakdowns
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="p-10 border border-[#262626] border-dashed text-zinc-500 font-mono text-sm uppercase tracking-widest text-center">
          [ NO_LOGS_FOUND ]
        </div>
      ) : (
        <div className="flex flex-col border border-[#262626] divide-y divide-[#262626] bg-[#000000]">
          {posts.map((post: any) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group p-8 md:p-12 hover:bg-white transition-colors duration-200 block"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 group-hover:text-zinc-800 mb-4 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-red-600 rounded-full" />
                    {new Date(post.createdAt).toISOString().split("T")[0]}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-black mb-4">
                    {post.title}
                  </h2>
                </div>
                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-black hidden sm:block" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
