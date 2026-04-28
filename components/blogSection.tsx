"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";
import type { BlogCategory, BlogPost } from "@/utils/blogTypes";

const categoryIcons: Record<BlogCategory, LucideIcon> = {
  Engineering: BookOpen,
  AI: Sparkles,
  Career: Send,
  Architecture: Clock3,
};

const categories: BlogCategory[] = ["Engineering", "AI", "Architecture", "Career"];

export const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to load blog posts");
        }
        setPosts(data.posts ?? []);
      })
      .catch((requestError) => {
        setError(requestError instanceof Error ? requestError.message : "Failed to load blog posts");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const scrollCarousel = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollDistance = Math.min(carousel.clientWidth * 0.9, 720);
    carousel.scrollBy({
      left: direction === "next" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section id="blog" className="section relative overflow-hidden">
      <Section3DBackground variant="skills" className="z-0 opacity-40 dark:opacity-[0.16]" />
      <div className="container relative z-10">
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <BookOpen className="w-4 h-4" />
              Blog
            </div>
            <h2 className="section-title">
              Engineering <span className="gradient-text">Notes</span>
            </h2>
            <p className="section-description">
              Practical notes on backend systems, AI workflows, architecture, and career lessons from production work
            </p>
          </div>
        </AnimatedSection>

        <div className="content-wrapper">
          <AnimatedSection mode="single">
            <nav className="flex flex-wrap justify-center" style={{ gap: "10px", marginBottom: "28px" }} aria-label="Blog categories">
              {(["All", ...categories] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl border text-body font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                      : "bg-[var(--surface-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]"
                  }`}
                  style={{ padding: "10px 14px" }}
                >
                  {category}
                </button>
              ))}
            </nav>
          </AnimatedSection>

          {isLoading && (
            <div className="card text-center" style={{ padding: "28px" }}>
              <p className="text-body text-[var(--text-tertiary)]">Loading posts...</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="card text-center" style={{ padding: "28px" }}>
              <p className="text-body text-[var(--error)]">{error}</p>
            </div>
          )}

          {!isLoading && !error && filteredPosts.length === 0 && (
            <div className="card text-center" style={{ padding: "28px" }}>
              <p className="text-body text-[var(--text-tertiary)]">No posts published yet.</p>
            </div>
          )}

          {!isLoading && !error && filteredPosts.length > 0 && (
            <AnimatedSection mode="single">
              <div className="flex items-center justify-between" style={{ gap: "16px", marginBottom: "18px" }}>
                <p className="text-small text-[var(--text-muted)]">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
                </p>
                <div className="flex" style={{ gap: "10px" }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => scrollCarousel("prev")}
                    aria-label="Previous blog posts"
                    style={{ padding: "12px" }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => scrollCarousel("next")}
                    aria-label="Next blog posts"
                    style={{ padding: "12px" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div ref={carouselRef} className="blog-carousel">
                {filteredPosts.map((post) => {
                  const CategoryIcon = categoryIcons[post.category];

                  return (
                    <motion.article
                      key={post.id}
                      layout
                      className="blog-card group"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                      <div className="flex items-center justify-between" style={{ marginBottom: "20px", gap: "12px" }}>
                        <span className="section-badge" style={{ margin: 0 }}>
                          <CategoryIcon className="w-4 h-4" />
                          {post.category}
                        </span>
                      </div>

                      <h3 className="font-semibold text-[var(--text-primary)] text-xl leading-tight" style={{ marginBottom: "14px" }}>
                        {post.title}
                      </h3>
                      <p className="text-body text-[var(--text-secondary)] leading-relaxed" style={{ marginBottom: "22px" }}>
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-small text-[var(--text-muted)]" style={{ gap: "14px", marginBottom: "18px" }}>
                        <span className="flex items-center" style={{ gap: "6px" }}>
                          <CalendarDays className="w-4 h-4" />
                          {post.published_at}
                        </span>
                        <span className="flex items-center" style={{ gap: "6px" }}>
                          <Clock3 className="w-4 h-4" />
                          {post.read_time}
                        </span>
                      </div>

                      <div className="flex flex-wrap" style={{ gap: "8px", marginBottom: "24px" }}>
                        {post.tags.map((tag) => (
                          <span key={tag} className="chip">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link href={`/blog/${post.slug}`} className="btn-secondary justify-center mt-auto">
                        Read Post
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};
