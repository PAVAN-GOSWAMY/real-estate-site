import * as React from "react";
import { BlogPost } from "@/types";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";

interface RelatedArticlesProps {
  post: BlogPost;
}

export function RelatedArticles({ post }: RelatedArticlesProps) {
  if (!post.relatedPosts || post.relatedPosts.length === 0) return null;
  
  const related = blogs.filter((b) => post.relatedPosts.includes(b.slug));

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-accent/5 mt-12 border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((article) => (
            <BlogCard key={article.id} post={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
