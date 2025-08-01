// src/components/Blog.tsx
import { useEffect, useState } from "react";
import { getBlogPosts } from "../lib/getBlogPosts";
import type { BlogPost } from "../lib/getBlogPosts";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getBlogPosts();
      console.log("Fetched posts:", allPosts); // ✅ Debugging
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-6 text-white bg-[#1f1f29] rounded-xl">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-pink-500 w-fit">Blog</h2>
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-400">No blog posts found.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.slug}
              className="bg-[#2d2d3a] p-4 rounded-lg hover:scale-105 transition"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="text-xl text-pink-400 font-semibold hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-300 text-sm">{post.summary}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
