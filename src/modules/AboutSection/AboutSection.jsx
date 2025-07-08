import Container from '@/shared/container/Container';
import s from './AboutSection.module.scss';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import Icon from '@/shared/Icon/Icon';
import { initServerI18n } from '@/i18n/utils/serverI18n';

export default async function AboutSection({ locale }) {
  const { t } = await initServerI18n(locale, ['aboutSection']);

  return (
    <section id="about" className={s.section}>
      <Container>
        <div className={s.BigContainer}>
          <div className={s.aboutContainer}>
            <span className={s.spanAbout}>{t('aboutTitle')}</span>
          </div>
          <div className={s.contentContainerBig}>
            <h2 className={s.logoName}>{t('projectName')}</h2>
            <h3 className={s.titleInfo}>{t('projectSubtitle')}</h3>
            <div className={s.containerContent}>
              <div className={s.containerImage}>
                <Image
                  src="/image/eldar.jpg"
                  alt="eldar"
                  width={400}
                  height={550}
                  className={s.image}
                />
              </div>
              <div className={s.containerText}>
                <h3 className={s.titleInfoNext}>{t('quote')}</h3>
                <p className={s.meinInfo}>{t('paragraph1')}</p>
                <p className={s.meinInfoNext}>{t('paragraph2')}</p>
                <div className={s.buttonTablet}>
                  <Button variant={'variant6'}>
                    {t('contactButton')}
                    <Icon iconName="icon-arrows-corner" className={s.icon} />
                  </Button>

                  <Button variant={'variant7'}>
                    {t('projectsButton')}
                    <Icon iconName="icon-arrows-corner" className={s.icon} />
                  </Button>
                </div>
              </div>
            </div>
            <div className={s.buttonDesktop}>
              <Button variant={'variant6'}>
                {t('contactButton')}
                <Icon iconName="icon-arrows-corner" className={s.icon} />
              </Button>

              <Button variant={'variant7'}>
                {t('projectsButton')}
                <Icon iconName="icon-arrows-corner" className={s.icon} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
