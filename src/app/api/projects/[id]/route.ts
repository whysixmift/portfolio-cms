import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const resolvedParams = await params;
    const body = await req.json();
    const { title, description, imageUrl, link } = body;

    const project = await db.project.update({
      where: { id: resolvedParams.id },
      data: { title, description, imageUrl, link },
    });
    
    return NextResponse.json(project);
  } catch (error) {
    console.error("[PROJECT_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const resolvedParams = await params;
    const project = await db.project.delete({
      where: { id: resolvedParams.id },
    });
    
    return NextResponse.json(project);
  } catch (error) {
    console.error("[PROJECT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
