"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getSupabaseBrowser } from "@/utils/supabaseBrowser";
import type { BlogCategory, BlogPost } from "@/utils/blogTypes";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Engineering" as BlogCategory,
  tags: "",
  read_time: "3 min read",
  published_at: new Date().toISOString().slice(0, 10),
  is_published: true,
};

export default function AdminBlogPage() {
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const loadPosts = useCallback(async (token = sessionToken) => {
    if (!token) return;

    const response = await fetch("/api/admin/blog", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error || "Failed to load posts");
      return;
    }

    setPosts(data.posts);
  }, [sessionToken]);

  useEffect(() => {
    let supabase;
    try {
      supabase = getSupabaseBrowser();
    } catch (clientError) {
      setMessage(clientError instanceof Error ? clientError.message : "Missing Supabase browser configuration");
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      const token = data.session?.access_token ?? null;
      setSessionToken(token);
      if (token) loadPosts(token);
    });
  }, [loadPosts]);

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsBusy(true);

    let supabase;
    try {
      supabase = getSupabaseBrowser();
    } catch (clientError) {
      setIsBusy(false);
      setMessage(clientError instanceof Error ? clientError.message : "Missing Supabase browser configuration");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsBusy(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    const token = data.session?.access_token ?? null;
    setSessionToken(token);
    await loadPosts(token);
  };

  const signOut = async () => {
    await getSupabaseBrowser().auth.signOut();
    setSessionToken(null);
    setPosts([]);
    setForm(emptyForm);
    setEditingId(null);
  };

  const submitPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!sessionToken) return;

    setMessage("");
    setIsBusy(true);

    const payload = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    };

    const response = await fetch(
      editingId ? `/api/admin/blog/${editingId}` : "/api/admin/blog",
      {
        method: editingId ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    setIsBusy(false);

    if (!response.ok) {
      setMessage(data.error || "Failed to save post");
      return;
    }

    setForm(emptyForm);
    setEditingId(null);
    await loadPosts();
  };

  const editPost = (post: BlogPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content ?? "",
      category: post.category,
      tags: post.tags.join(", "),
      read_time: post.read_time,
      published_at: post.published_at,
      is_published: post.is_published,
    });
  };

  const deletePost = async (id: string) => {
    if (!sessionToken) return;

    setMessage("");
    const response = await fetch(`/api/admin/blog/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${sessionToken}` },
    });

    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error || "Failed to delete post");
      return;
    }

    await loadPosts();
  };

  if (!sessionToken) {
    return (
      <main className="section min-h-screen bg-[var(--background)]">
        <div className="container">
          <div className="content-wrapper">
            <Link href="/#blog" className="btn-secondary inline-flex" style={{ marginBottom: "24px" }}>
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
            <div className="card" style={{ padding: "32px" }}>
              <h1 className="section-title" style={{ marginBottom: "12px" }}>
                Blog Admin
              </h1>
              <p className="text-body text-[var(--text-tertiary)]" style={{ marginBottom: "24px" }}>
                Sign in with your Supabase admin user to create, edit, publish, and delete posts.
              </p>

              <form onSubmit={signIn} className="blog-form">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="blog-input"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="blog-input"
                  placeholder="Password"
                  type="password"
                  required
                />
                <button className="btn-primary justify-center" type="submit" disabled={isBusy}>
                  {isBusy ? "Signing in..." : "Sign In"}
                </button>
              </form>

              <div style={{ marginTop: "16px" }}>
                <Link
                  href="/admin/forgot-password"
                  className="text-body text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {message && (
                <p className="text-body text-[var(--error)]" style={{ marginTop: "16px" }}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section min-h-screen bg-[var(--background)]">
      <div className="container">
        <div className="content-wrapper">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between" style={{ marginBottom: "24px", gap: "16px" }}>
            <div>
              <Link href="/#blog" className="text-body text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                Back to site
              </Link>
              <h1 className="section-title" style={{ marginTop: "8px" }}>Blog Admin</h1>
            </div>
            <button onClick={signOut} className="btn-secondary" type="button">
              Sign Out
            </button>
          </div>

          <form onSubmit={submitPost} className="card blog-form" style={{ padding: "28px", marginBottom: "32px" }}>
            <input className="blog-input" placeholder="Title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required />
            <input className="blog-input" placeholder="Slug (optional for new posts)" value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} />
            <textarea className="blog-input min-h-24 resize-none" placeholder="Excerpt" value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value })} required />
            <textarea className="blog-input min-h-64 resize-none" placeholder="Full content" value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} required />

            <div className="grid sm:grid-cols-2" style={{ gap: "12px" }}>
              <select className="blog-input" value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value as BlogCategory })}>
                <option>Engineering</option>
                <option>AI</option>
                <option>Architecture</option>
                <option>Career</option>
              </select>
              <input className="blog-input" placeholder="Tags, comma separated" value={form.tags} onChange={(event) => setForm({ ...form, tags: event.target.value })} />
            </div>

            <div className="grid sm:grid-cols-2" style={{ gap: "12px" }}>
              <input className="blog-input" placeholder="Read time" value={form.read_time} onChange={(event) => setForm({ ...form, read_time: event.target.value })} />
              <input className="blog-input" type="date" value={form.published_at} onChange={(event) => setForm({ ...form, published_at: event.target.value })} />
            </div>

            <label className="flex items-center text-body text-[var(--text-secondary)]" style={{ gap: "10px" }}>
              <input type="checkbox" checked={form.is_published} onChange={(event) => setForm({ ...form, is_published: event.target.checked })} />
              Published
            </label>

            <button className="btn-primary justify-center" type="submit" disabled={isBusy}>
              {isBusy ? "Saving..." : editingId ? "Update Post" : "Create Post"}
            </button>

            {editingId && (
              <button className="btn-secondary justify-center" type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
                Cancel Edit
              </button>
            )}
          </form>

          {message && (
            <p className="text-body text-[var(--error)]" style={{ marginBottom: "20px" }}>
              {message}
            </p>
          )}

          <div className="grid" style={{ gap: "16px" }}>
            {posts.map((post) => (
              <article key={post.id} className="card" style={{ padding: "20px" }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between" style={{ gap: "16px" }}>
                  <div>
                    <h2 className="font-semibold text-[var(--text-primary)] text-xl">{post.title}</h2>
                    <p className="text-body text-[var(--text-tertiary)]">/{post.slug}</p>
                    <p className="text-small text-[var(--text-muted)]">
                      {post.is_published ? "Published" : "Draft"} | {post.published_at} | {post.read_time}
                    </p>
                  </div>
                  <div className="flex" style={{ gap: "12px" }}>
                    <button className="btn-secondary" type="button" onClick={() => editPost(post)}>
                      Edit
                    </button>
                    <button className="btn-secondary" type="button" onClick={() => deletePost(post.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
