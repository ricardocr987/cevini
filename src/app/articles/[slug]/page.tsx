import { notFound } from 'next/navigation';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import Image from 'next/image';

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
  slug,
  body,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  _createdAt
}`;

export default async function Post({ params }: PostProps) {
  const { slug } = params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }
  console.log(post)

  const {
    title = 'Missing title',
    body = [],
    name = 'Missing name',
    categories,
    authorImage,
    _createdAt
  } = post;

  const publishDate = new Date(_createdAt).toLocaleDateString('es-ES');

  return (
    <Card className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <CardHeader>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 italic mr-4">Escrito por {name}</span>
          {authorImage && (
            <img
              className="w-20"
              src={urlFor(authorImage).width(64).url()}
              alt={name}
            />
          )}
        </div>
        {categories && (
          <ul className="flex flex-wrap space-x-2 mb-4">
            {categories.map((category: string) => (
              <li key={category} className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">
                {category}
              </li>
            ))}
          </ul>
        )}
        {publishDate}
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <PortableText value={body} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center mt-4">
        <Image
          src="/media/generalitat.png"
          alt="Generalitat Valenciana"
          width={200}
          height={200}
          className="mt-4"
        />
      </CardFooter>
    </Card>
  );
}