import Button from '@/shared/components/button/Button';
import Container from '@/shared/container/Container';
import Link from 'next/link';
import s from './CtaSection.module.scss';
import { initServerI18n } from '@/i18n/utils/serverI18n';

export default async function CtaSection({ locale, namespace = 'ctaSection' }) {
  const { t } = await initServerI18n(locale, [namespace]);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.containerContent}>
          <div className={s.contentText}>
            <h2 className={s.title}>{t('title')}</h2>
          </div>
          <Link href={t('link')} passHref>
            <Button variant="variant1">{t('button')}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
