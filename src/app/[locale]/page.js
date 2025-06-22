import s from './page.module.scss';
import AboutSection from '@/modules/AboutSection/AboutSection';
import ContactSection from '@/modules/ContactSection/ContactSection';
import FaqSection from '@/modules/FaqSection/FaqSection';
import HeroSection from '@/modules/HeroSection/HeroSection';
import PortfolioSection from '@/modules/PortfolioSection/PortfolioSection';
import ServicesSection from '@/modules/ServicesSection/ServicesSection';
import TestimonialsSection from '@/modules/TestimonialsSection/TestimonialsSection';

export default async function Home({ params: rawParams }) {
  const params = await rawParams;
  const availableLocales = ['en', 'ua', 'de'];
  const locale = availableLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FaqSection />
      <PortfolioSection locale={locale} />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
