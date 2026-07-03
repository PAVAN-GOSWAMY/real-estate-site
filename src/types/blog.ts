export interface Author {
  id: string;
  name: string;
  avatar: string;
  designation: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  relatedPosts: string[];
  seo: {
    title: string;
    description: string;
  };
}
