import { getArticleBySlug } from '../../../lib/api';
import Image from 'next/image';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return <div>Article not found</div>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold">{article.title}</h1>
      <p className="text-sm text-gray-500">{new Date(article.publishedAt).toDateString()}</p>
      <div className="relative w-full h-64 mt-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <article
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}