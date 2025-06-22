import ProjectPortfolio from '@/modules/ProjectPortfolio/ProjectPortfolio';

export default async function WorkPage({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  const slug = params.slug;

  return (
    <div>
      <ProjectPortfolio locale={locale} slug={slug} />
    </div>
  );
}
