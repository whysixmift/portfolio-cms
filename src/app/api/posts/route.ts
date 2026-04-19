import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const body = await req.json();
    const { title, slug, content } = body;
    
    if (!title || !slug || !content) {
      return new NextResponse("Missing title, slug, or content", { status: 400 });
    }

    const post = await db.post.create({
      data: {
        title,
        slug,
        content,
      },
    });
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("[POSTS_POST]", error);
    // Usually a slug collision throws a unique constraint error
    return new NextResponse("Internal Error or Slug Collision", { status: 500 });
  }
}
