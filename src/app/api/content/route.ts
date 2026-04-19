import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const content = await db.siteContent.findFirst();
  return NextResponse.json(content || {});
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const body = await req.json();
    const { heroTitle, heroDescription } = body;
    
    const existing = await db.siteContent.findFirst();
    let content;
    
    if (existing) {
      content = await db.siteContent.update({
        where: { id: existing.id },
        data: { heroTitle, heroDescription },
      });
    } else {
      content = await db.siteContent.create({
        data: { heroTitle: heroTitle || "", heroDescription: heroDescription || "" },
      });
    }
    
    return NextResponse.json(content);
  } catch (error) {
    console.error("[CONTENT_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
