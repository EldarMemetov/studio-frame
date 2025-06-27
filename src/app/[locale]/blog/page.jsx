import BlogSection from '@/modules/Blog/BlogSection';
import { client } from '@/lib/sanityClient';
import { postsQuery } from '@/lib/queries';

export default async function Blog({ params: rawParams }) {
  const params = await rawParams;
  const locale = ['en', 'ua', 'de'].includes(params?.locale)
    ? params.locale
    : 'en';

  const posts = await client.fetch(postsQuery);

  return (
    <div>
      <BlogSection posts={posts} locale={locale} />
    </div>
  );
}
