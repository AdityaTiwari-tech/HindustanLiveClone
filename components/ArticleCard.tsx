import { Article } from '../types/article';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  return (
    <Link href={`/article/${article.slug}`} className="block group">
      <div className="relative w-full h-40">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover rounded"
        />
      </div>
      <h3 className="mt-2 text-lg font-medium group-hover:underline">
        {article.title}
      </h3>
      <p className="text-sm text-gray-600">{article.excerpt}</p>
    </Link>
  );
}