import { client } from '@/lib/sanityClient';
import { postsQuery } from '@/lib/queries';

export async function GET() {
  const posts = await client.fetch(postsQuery);

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
