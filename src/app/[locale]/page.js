import AboutSection from '@/modules/AboutSection/AboutSection';
import Feedback from '@/modules/Feedback/Feedback';
import FaqSection from '@/modules/FaqSection/FaqSection';
import HeroSection from '@/modules/HeroSection/HeroSection';
import PortfolioSection from '@/modules/PortfolioSection/PortfolioSection';
import ServicesSection from '@/modules/ServicesSection/ServicesSection';

import OrDevelopment from '@/modules/OrDevelopment/OrDevelopment';
import ScrollToHash from '@/shared/ScrollToHash/ScrollToHash';
import DisplayCompanyFacts from '@/modules/DisplayCompanyFacts/DisplayCompanyFacts';

export default async function Home({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <div>
      <ScrollToHash>
        <HeroSection locale={locale} />
        <DisplayCompanyFacts locale={locale} />
        <AboutSection />
        <FaqSection />
        <PortfolioSection locale={locale} />
        <ServicesSection />
        <OrDevelopment locale={locale} />
        <Feedback />
      </ScrollToHash>
    </div>
  );
}
