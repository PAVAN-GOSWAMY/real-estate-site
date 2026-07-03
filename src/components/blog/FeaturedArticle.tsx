import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";
import { Clock, Calendar, ArrowRight } from "lucide-react";

interface FeaturedArticleProps {
  post: BlogPost;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row mb-16">
      <Link href={`/blog/${post.slug}`} className="relative w-full lg:w-3/5 aspect-video lg:aspect-auto min-h-[300px] overflow-hidden block">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </Link>
      
      <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full self-start mb-6">
          {post.category}
        </span>
        
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-lg text-muted-foreground mb-8 line-clamp-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {post.readingTime}
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.designation}</p>
            </div>
          </div>
          
          <Link href={`/blog/${post.slug}`} className="hidden sm:flex bg-primary text-primary-foreground w-12 h-12 rounded-full items-center justify-center hover:scale-110 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
