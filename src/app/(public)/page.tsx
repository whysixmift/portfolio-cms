import { db } from "@/lib/db";
import Hero from "@/components/public/Hero";

export default async function LandingPage() {
  const siteContent = await db.siteContent.findFirst();
  
  const heroTitle = siteContent?.heroTitle || "I build digital experiences.";
  const heroDesc = siteContent?.heroDescription || "System Architect. Minimalist Engineer.";
  
  return <Hero title={heroTitle} description={heroDesc} />;
}
