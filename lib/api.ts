import mock from '../public/mock-data/articles.json';
import { Article, Category } from '../types/article';

export async function getArticles(): Promise<Article[]> {
  return mock.map((article) => ({
    ...article,
    category: article.category as Category,
  }));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  return articles.find(a => a.slug === slug) || null;
}