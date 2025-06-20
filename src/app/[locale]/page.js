import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import s from './page.module.scss';

export default async function Home({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <div>
      <LanguageSwitcher />
      <h2>Hello</h2>
    </div>
  );
}
