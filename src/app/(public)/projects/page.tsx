import { db } from "@/lib/db";
import ProjectCard from "@/components/public/ProjectCard";

export default async function ProjectsPage() {
  // Ordered by descending createdAt for the latest projects first
  const projects = await db.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="py-20 px-6 sm:px-12 min-h-screen">
      <div className="mb-16 border-b border-[#262626] pb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
          PROJECTS_LOG
        </h1>
        <p className="mt-4 font-mono text-zinc-500 tracking-widest text-sm uppercase">
          // Index of deployed applications and architectures
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="p-10 border border-[#262626] border-dashed text-zinc-500 font-mono text-sm uppercase tracking-widest text-center">
          [ NO_DATA_FOUND ]
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#262626] bg-[#262626]">
          {/* We use bg-[#262626] and gap-[1px] on the wrapper to create pure 1px grid lines between cards */}
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      )}
    </main>
  );
}
