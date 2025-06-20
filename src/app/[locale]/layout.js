import { TranslationsProvider } from '@/i18n/utils';
import '../globals.scss';
import { NAMESPACES } from '@/shared/constants';
import initTranslations from '@/i18n/utils/i18n';
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';
import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';
const metadataDict = {
  ua: {
    title:
      'Сайти під ключ для бізнесу — Framevix | Веброзробка, UX/UI, SEO, Digital-маркетинг',
    description:
      'Framevix — студія веброзробки. Створюємо сайти під ключ, які залучають клієнтів: UX/UI дизайн, SEO, просування. 8+ років досвіду, 50+ проєктів. Отримайте безкоштовний аудит!',
  },
  en: {
    title:
      'Turnkey Websites for Business — Framevix | Web Development, UX/UI, SEO, Digital Marketing',
    description:
      'Framevix is a web development studio. We create turnkey websites that attract customers: UX/UI design, SEO, promotion. 8+ years of experience, 50+ projects. Get a free audit!',
  },

  de: {
    title:
      'Schlüsselfertige Websites für Unternehmen — Framevix | Webentwicklung, UX/UI, SEO, Digitales Marketing',
    description:
      'Framevix ist ein Webentwicklungsstudio. Wir erstellen schlüsselfertige Websites, die Kunden anziehen: UX/UI Design, SEO, Promotion. Über 8 Jahre Erfahrung, mehr als 50 Projekte. Erhalten Sie ein kostenloses Audit!',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const meta = metadataDict[locale] || metadataDict.en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://framevix.com/${locale}`,
      siteName: 'QVRIX',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const awaitedParams = await Promise.resolve(params);
  const { locale } = awaitedParams;
  const langMap = { ua: 'uk', en: 'en', de: 'de' };
  const htmlLang = langMap[locale] || 'en';
  const { resources } = await initTranslations(locale, NAMESPACES);
  return (
    <html lang={htmlLang} dir={dir(locale)}>
      <body suppressHydrationWarning={true}>
        <TranslationsProvider
          namespaces={NAMESPACES}
          locale={locale}
          resources={resources}
        >
          <ErrorBoundaryWithTranslation>
            <main>{children}</main>
          </ErrorBoundaryWithTranslation>
        </TranslationsProvider>
      </body>
    </html>
  );
}
