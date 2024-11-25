import { notFound } from 'next/navigation';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

interface PostProps {
  params: {
    slug: string;
  };
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
}`;

export default async function Post({ params }: PostProps) {
  const { slug } = params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  const {
    title = 'Missing title',
    body = [],
    name = 'Missing name',
    categories,
    authorImage
  } = post;

  return (
    <article className="prose lg:prose-xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <span className="block text-gray-600 mb-4">Escrito por {name}</span>
      {categories && (
        <ul className="flex space-x-2 mb-4">
          {categories.map((category: string) => (
            <li key={category} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {category}
            </li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div className="mb-4">
          <img
            className="w-12 h-12 rounded-full"
            src={urlFor(authorImage).width(50).url()}
            alt={name}
          />
        </div>
      )}
      <div className="prose">
        <PortableText value={body} />
      </div>
    </article>
  );
}