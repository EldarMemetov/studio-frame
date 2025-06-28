import { notFound } from 'next/navigation';
import BlogId from '@/modules/BlogId/BlogId';
import { client } from '@/lib/sanityClient';
import { postBySlugQuery } from '@/lib/queries';

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ customId }`);
  const locales = ['en', 'ua', 'de'];

  return posts
    .flatMap((post) =>
      locales.map((locale) => ({
        id: post?.customId?.current,
        locale,
      }))
    )
    .filter((param) => !!param.id);
}

export default async function BlogIdPageId({ params: rawParams }) {
  const params = await rawParams;
  const { locale, id } = params;

  const post = await client.fetch(postBySlugQuery, { id });

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <BlogId post={post} locale={locale} />
    </main>
  );
}
