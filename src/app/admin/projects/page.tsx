import { db } from "@/lib/db";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function ProjectsPage() {
  const projects = await db.project.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="border-b border-[#262626] pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white mb-2 uppercase">Project Assets</h1>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            // Manage portfolio deployments
          </p>
        </div>
        <Link 
          href="/admin/projects/new" 
          className="bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
        >
          ALLOCATE_NEW
        </Link>
      </div>

      <div className="border border-[#262626] bg-[#000000] flex flex-col">
        {projects.length === 0 ? (
          <div className="p-8 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">
            [ DATA_EMPTY ]
          </div>
        ) : (
          projects.map((proj, idx) => (
            <div key={proj.id} className={`p-6 flex items-center justify-between ${idx !== projects.length -1 ? "border-b border-[#262626]" : ""} hover:bg-[#0A0A0A] transition-colors`}>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                <div className="font-mono text-xs text-zinc-500 tracking-widest">{proj.id}</div>
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  href={`/admin/projects/${proj.id}`}
                  className="text-white hover:bg-white hover:text-black px-3 py-1.5 border border-transparent hover:border-white transition-colors font-mono text-xs uppercase tracking-widest"
                >
                  Edit
                </Link>
                <DeleteButton endpoint={`/api/projects/${proj.id}`} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
