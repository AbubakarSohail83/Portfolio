import { requireAdmin } from "@/utils/requireAdmin";
import { supabaseAdmin } from "@/utils/supabaseAdmin";
import { NextResponse } from "next/server";

const createSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export async function GET(request: Request){
    const auth = await requireAdmin(request);
    if (auth.error) {
        return NextResponse.json({ error: auth.error }, { status: 401 });
    }

    const {data, error} = await supabaseAdmin
                                    .from("blog_posts")
                                    .select("*")
                                    .order("created_at", { ascending: false });
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        }
    
    return NextResponse.json({ posts: data });
}

export async function POST(request: Request) {
    const auth = await requireAdmin(request);

    if (auth.error) {
      return NextResponse.json({ error: auth.error }, { status: 401 });
    }
  
    const body = await request.json();

    const { data, error } = await supabaseAdmin
                                    .from("blog_posts")
                                    .insert({
                                    title: body.title,
                                    slug: body.slug || createSlug(body.title),
                                    excerpt: body.excerpt,
                                    content: body.content,
                                    category: body.category,
                                    tags: body.tags ?? [],
                                    read_time: body.read_time ?? "3 min read",
                                    published_at: body.published_at ?? new Date().toISOString().slice(0, 10),
                                    is_published: body.is_published ?? true,
                                    })
                                    .select()
                                    .single();
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        }
    
    return NextResponse.json({ post: data }, { status: 201 });
}