import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/utils/supabaseAdmin";

export async function GET() {
    const { data, error } = await supabaseAdmin.
                                    from("blog_posts").
                                    select('id,title,slug,excerpt,category,tags,read_time,published_at').
                                    eq("is_published", true).
                                    order("published_at", { ascending: false })
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ posts: data });
}