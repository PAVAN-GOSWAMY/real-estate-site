import * as React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Clock, Calendar } from "lucide-react";

import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { BlogContent } from "@/components/blog/BlogContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name]
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    }
  };
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  // Extract headings for TOC
  const blocks = post.content.split("\n\n");
  const tocItems = blocks
    .filter(block => block.trim().startsWith("## "))
    .map(block => {
      const text = block.replace("## ", "").trim();
      return {
        id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: text
      };
    });

  return (
    <main className="min-h-screen pt-20">
      <BlogBreadcrumb post={post} />
      
      <article className="container px-4 md:px-6 mx-auto py-12">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formattedDate}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readingTime}
            </div>
          </div>
        </header>

        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden mb-16 shadow-xl border border-border/40">
          <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="w-full lg:w-1/4 order-2 lg:order-1">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <BlogContent content={post.content} />
            <ShareButtons />
            <AuthorCard author={post.author} />
          </div>
        </div>
      </article>

      <RelatedArticles post={post} />
      <NewsletterCTA />
    </main>
  );
}
