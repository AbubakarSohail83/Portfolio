import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { supabaseAdmin } from "@/utils/supabaseAdmin";
import type { BlogPost } from "@/utils/blogTypes";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) {
    notFound();
  }

  const post = data as BlogPost;

  return (
    <main className="section min-h-screen bg-[var(--background)]">
      <div className="container">
        <article className="content-wrapper">
          <Link href="/#blog" className="btn-secondary inline-flex" style={{ marginBottom: "32px" }}>
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="card" style={{ padding: "32px" }}>
            <div className="section-badge" style={{ marginBottom: "20px" }}>
              {post.category}
            </div>

            <h1 className="section-title" style={{ marginBottom: "18px" }}>
              {post.title}
            </h1>

            <div className="flex flex-wrap text-small text-[var(--text-muted)]" style={{ gap: "14px", marginBottom: "24px" }}>
              <span className="flex items-center" style={{ gap: "6px" }}>
                <CalendarDays className="w-4 h-4" />
                {post.published_at}
              </span>
              <span className="flex items-center" style={{ gap: "6px" }}>
                <Clock3 className="w-4 h-4" />
                {post.read_time}
              </span>
            </div>

            <div className="flex flex-wrap" style={{ gap: "8px", marginBottom: "32px" }}>
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="blog-content">
              {(post.content ?? "").split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
