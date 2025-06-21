import BlogSection from '@/modules/Blog/BlogSection';

export default async function Blog({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <div>
      <BlogSection />
    </div>
  );
}
