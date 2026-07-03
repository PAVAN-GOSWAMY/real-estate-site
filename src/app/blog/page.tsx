import * as React from "react";
import { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";

export const metadata: Metadata = {
  title: "Real Estate Blog & Insights | Propteq Noida",
  description: "Read expert articles, investment guides, and real estate market news focused on Noida, Greater Noida, and Yamuna Expressway.",
};

export default function BlogListingPage() {
  const featuredPost = blogs.find(post => post.featured) || blogs[0];
  const regularPosts = blogs.filter(post => post.id !== featuredPost.id);

  return (
    <main className="min-h-screen bg-surface pb-20">
      <BlogHero />
      
      <div className="container px-4 md:px-6 mx-auto">
        <BlogCategories />
        
        <FeaturedArticle post={featuredPost} />
        
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-foreground">Latest Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      
      <NewsletterCTA />
    </main>
  );
}
