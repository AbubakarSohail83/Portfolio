export type BlogCategory = "Engineering" | "AI" | "Career" | "Architecture";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  category: BlogCategory;
  tags: string[];
  read_time: string;
  published_at: string;
  is_published: boolean;
  created_at: string;
}
