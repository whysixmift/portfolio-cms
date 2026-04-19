import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  link?: string | null;
  imageUrl?: string | null;
}

export default function ProjectCard({ id, title, description, link }: ProjectCardProps) {
  const cardContent = (
    <div className="group flex flex-col justify-between p-8 border border-[#262626] bg-[#000000] hover:bg-white hover:text-black transition-colors duration-200 h-full min-h-[300px]">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-black text-white">{title}</h3>
          <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-black" />
        </div>
        <p className="text-zinc-500 group-hover:text-zinc-600 font-mono text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="mt-8 pt-6 border-t border-[#262626] group-hover:border-zinc-300 flex items-center justify-between">
         <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 group-hover:text-black">
           ID: {id.slice(-6).toUpperCase()}
         </span>
         {(link) && (
           <span className="font-mono text-xs font-bold uppercase tracking-widest group-hover:text-black">
             ACCESS
           </span>
         )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
