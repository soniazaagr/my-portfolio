import matter from "gray-matter";

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  slug: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = import.meta.glob("@/blog/*.md", {
    eager: true,
    import: "default",
    query: "?raw",
  });

  const posts: BlogPost[] = [];

  for (const path in files) {
    const raw = files[path] as string;
    const { data, content } = matter(raw);

    if (data.title && data.date && data.summary && data.slug) {
      posts.push({
        title: data.title,
        date: data.date,
        summary: data.summary,
        slug: data.slug,
        content,
      });
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
