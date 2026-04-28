import { NextResponse } from "next/server";
import { requireAdmin } from "@/utils/requireAdmin";
import { supabaseAdmin } from "@/utils/supabaseAdmin";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin(request);

  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .update({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      tags: body.tags,
      read_time: body.read_time,
      published_at: body.published_at,
      is_published: body.is_published,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ post: data });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin(request);

  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: 401 });
  }

  const { id } = await params;

  const { error } = await supabaseAdmin
    .from("blog_posts")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
