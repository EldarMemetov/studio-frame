import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import ListServicesSection from './ListServicesSection/ListServicesSection';
import s from './ServicesSection.module.scss';

export default async function ServicesSection({ locale }) {
  const { t } = await initServerI18n(locale, ['servicesSection']);
  const items = t('items', { returnObjects: true }) || [];

  return (
    <section className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <div className={s.aboutContainer}>
            <span className={s.spanInfo}>{t('sectionTitle')}</span>
          </div>
          <h2 className={s.title}>{t('mainTitle')}</h2>
          <ListServicesSection items={items} />
        </div>
      </Container>
    </section>
  );
}
