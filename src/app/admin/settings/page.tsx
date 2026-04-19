import { db } from "@/lib/db";
import SiteSettingsForm from "@/components/admin/SiteSettingsForm";

export default async function SettingsPage() {
  const siteContent = await db.siteContent.findFirst();

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="border-b border-[#262626] pb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-2 uppercase">Global Configuration</h1>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          // Edit main landing page content
        </p>
      </div>
      <SiteSettingsForm initialData={siteContent} />
    </div>
  );
}
