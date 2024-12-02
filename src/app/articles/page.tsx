import { Suspense } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export interface Article {
    title: string;
    slug: {
      current: string;
    };
    publishDate: string;
    categories?: string[];
    author?: {
      name: string;
      image?: any;
    };
}

const articlesQuery = groq`
  *[_type == "post"] | order(publishDate desc) {
    title,
    "slug": slug.current,
    publishDate,
    "categories": categories[]->title,
    "author": {
      "name": author->name,
      "image": author->image
    }
  }
`;

async function getArticles(): Promise<Article[]> {
  return await client.fetch(articlesQuery);
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {article.categories?.map((category) => (
              <span 
                key={category} 
                className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{article.author?.name}</span>
            <span>{new Date(article.publishDate).toLocaleDateString('es-ES')}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

async function ArticlesList() {
  const articles = await getArticles();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.slug.current} article={article} />
      ))}
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Artículos</h1>
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="h-48 animate-pulse bg-gray-200" />
          ))}
        </div>
      }>
        <ArticlesList />
      </Suspense>
    </div>
  );
}

export const metadata = {
  title: 'Artículos | CEVINI',
  description: 'Lea los últimos artículos y anuncios de CEVINI',
};
