import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await db.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const body = await req.json();
    const { title, description, imageUrl, link } = body;
    
    if (!title || !description) {
      return new NextResponse("Missing title or description", { status: 400 });
    }

    const project = await db.project.create({
      data: {
        title,
        description,
        imageUrl,
        link,
      },
    });
    
    return NextResponse.json(project);
  } catch (error) {
    console.error("[PROJECTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
