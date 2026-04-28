import { supabaseAdmin } from "@/utils/supabaseAdmin";
import { NextResponse } from "next/server";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const { data, error } = await supabaseAdmin
                                    .from("blog_posts") 
                                    .select("*")
                                    .eq("slug", slug)
                                    .eq("is_published", true)
                                    .single();
    if (error) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post: data });
}