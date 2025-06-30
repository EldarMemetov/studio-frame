import Button from '@/shared/components/button/Button';

import Container from '@/shared/container/Container';
import s from './HeroBlog.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';
export default async function HeroBlog({ locale }) {
  const { t } = await initServerI18n(locale, ['heroBlog']);
  return (
    <section className={s.section}>
      <Container>
        <div className={s.containerContent}>
          <h1 className={s.title}>{t('title')}</h1>
          <p className={s.description}>{t('description')}</p>
          <div className={s.containerButton}>
            <Button variant="variant3">{t('contactButton')}</Button>

            <Button variant="variant4">{t('readArticlesButton')}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
