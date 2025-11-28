import { getArticles } from '../lib/api';
import { ArticleCard } from '../components/ArticleCard';

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Top News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}