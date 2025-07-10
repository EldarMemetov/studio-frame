import Container from '@/shared/container/Container';
import s from './ProcessStep.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import ListProcessStep from './ListProcessStep/ListProcessStep';

export default async function ProcessStep({ locale }) {
  const { t } = await initServerI18n(locale, ['processStep']);
  const items = t('steps', { returnObjects: true }) || [];

  return (
    <section className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <div className={s.stepsContainer}>
            <span className={s.spanInfo}>{t('process')}</span>
          </div>

          <h2 className={s.title}>{t('title')}</h2>
          <h3 className={s.description}>{t('description')}</h3>

          <ListProcessStep
            items={items}
            ctaTitle={t('cta_title')}
            ctaText={t('cta_text')}
          />
        </div>
      </Container>
    </section>
  );
}
