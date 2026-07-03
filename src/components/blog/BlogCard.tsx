import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: BlogPost;
}

export function BlogCard({ post, className, ...props }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article 
      className={cn(
        "group flex flex-col bg-surface rounded-2xl overflow-hidden border border-border/40 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300",
        className
      )}
      {...props}
    >
      <Link href={`/blog/${post.slug}`} prefetch={false} className="relative h-56 overflow-hidden block">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {post.readingTime}
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} prefetch={false} className="block group-hover:text-primary transition-colors">
          <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-sm font-semibold text-foreground">{post.author.name}</span>
          </div>
          
          <Link href={`/blog/${post.slug}`} prefetch={false} className="text-primary font-bold text-sm flex items-center group-hover:underline">
            Read More <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
