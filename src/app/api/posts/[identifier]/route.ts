import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Using [identifier] allows us to fetch by SLUG but mutate by ID to fulfill the exact API contract.

export async function GET(req: Request, { params }: { params: Promise<{ identifier: string }> }) {
  try {
    const resolvedParams = await params;
    const post = await db.post.findUnique({
      where: { slug: resolvedParams.identifier },
    });
    
    if (!post) {
      return new NextResponse("Not Found", { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("[POST_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ identifier: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const resolvedParams = await params;
    const body = await req.json();
    const { title, slug, content } = body;

    const post = await db.post.update({
      // We assume identifier is ID for mutations
      where: { id: resolvedParams.identifier },
      data: { title, slug, content },
    });
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("[POST_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ identifier: string }> }) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const resolvedParams = await params;
    const post = await db.post.delete({
      // We assume identifier is ID for mutations
      where: { id: resolvedParams.identifier },
    });
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("[POST_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
