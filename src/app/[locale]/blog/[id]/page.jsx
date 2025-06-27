import { notFound } from 'next/navigation';
import BlogId from '@/modules/BlogId/BlogId';
import { client } from '@/lib/sanityClient';
import { postBySlugQuery } from '@/lib/queries';

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ customId }`);
  const locales = ['en', 'ua', 'de'];
  return posts.flatMap((post) =>
    locales.map((locale) => ({ id: post.customId.current, locale }))
  );
}

export default async function BlogIdPageId({ params }) {
  const { locale, id } = params;

  console.log('Requested locale:', locale);
  console.log('Requested id:', id);

  const post = await client.fetch(postBySlugQuery, { id });

  console.log('Fetched post:', post);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <BlogId post={post} locale={locale} />
    </main>
  );
}
