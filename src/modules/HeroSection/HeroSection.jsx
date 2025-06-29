import Container from '@/shared/container/Container';
import s from './HeroSection.module.scss';
import Icon from '@/shared/Icon/Icon';
import Link from 'next/link';
import Button from '@/shared/components/button/Button';
import { initServerI18n } from '@/i18n/utils/serverI18n';

export default async function HeroSection({ locale }) {
  const { t } = await initServerI18n(locale, ['heroSection']);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.containerContent}>
          <div className={s.containerIcon}>
            <span className={s.span}>{t('subtitle')}</span>
            <Link href="/#services" passHref>
              <button className={s.button} type="button">
                <Icon iconName="icon-arrows-right" className={s.icon} />
              </button>
            </Link>
          </div>
          <h1 className={s.title}>{t('title')}</h1>
          <p className={s.description}>{t('description')}</p>

          <div className={s.buttonContainer}>
            <Link href="/#contact" passHref>
              <Button variant={'variant1'}>{t('button')}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
