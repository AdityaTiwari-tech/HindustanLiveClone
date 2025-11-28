export type Category = 'national' | 'business' | 'cricket' | 'lifestyle';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  category: Category;
}