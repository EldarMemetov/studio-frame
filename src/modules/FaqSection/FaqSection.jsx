import Container from '@/shared/container/Container';
import s from './FaqSection.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import ListFaqSection from './ListFaqSection/ListFaqSection';

export default async function FaqSection({ locale }) {
  const { t } = await initServerI18n(locale, ['faqSection']);
  const items = t('items', { returnObjects: true });

  return (
    <section className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <div className={s.stepsContainer}>
            <span className={s.spanInfo}>{t('sectionTitle')}</span>
          </div>

          <h2 className={s.title}>{t('mainTitle')}</h2>

          <ListFaqSection items={items} />
        </div>
      </Container>
    </section>
  );
}
