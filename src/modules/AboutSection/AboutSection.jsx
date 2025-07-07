import Container from '@/shared/container/Container';
import s from './AboutSection.module.scss';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import Icon from '@/shared/Icon/Icon';
export default function AboutSection() {
  return (
    <section id="about" className={s.section}>
      <Container>
        <div className={s.BigContainer}>
          <div className={s.aboutContainer}>
            <span className={s.spanAbout}>Про мене</span>
          </div>
          <div>
            <h2 className={s.logoName}>DevMyst</h2>{' '}
            <h3 className={s.titleInfo}>
              — мій персональний веб-проєкт для вашого бізнесу
            </h3>
            <div className={s.containerContent}>
              <Image
                src="/image/eldar.jpg"
                alt="eldar"
                width={400}
                height={550}
                className={s.image}
              />
              <div className={s.containerText}>
                <h3 className={s.titleInfoNext}>
                  “Ваш сайт — моя особиста справа”
                </h3>
                <p className={s.meinInfo}>
                  Я Ельдар — веброзробник і засновник DevMyst. Я створюю сайти
                  під ключ — від ідеї до запуску.
                </p>
                <p className={s.meinInfoNext}>
                  Моє завдання — зробити не просто гарний сайт, а інструмент, що
                  реально працює: залучає клієнтів, допомагає бізнесу зростати і
                  приносить результат.
                </p>
                <div className={s.buttonTablet}>
                  <Button variant="variant6">
                    Зв’язатись зі мною
                    <Icon iconName="icon-arrows-corner" className={s.icon} />
                  </Button>

                  <Button variant="variant7">
                    Переглянути мої проєкти
                    <Icon iconName="icon-arrows-corner" className={s.icon} />
                  </Button>
                </div>
              </div>
            </div>
            <div className={s.buttonDesktop}>
              <Button variant="variant6">
                Зв’язатись зі мною
                <Icon iconName="icon-arrows-corner" className={s.icon} />
              </Button>

              <Button variant="variant7">
                Переглянути мої проєкти
                <Icon iconName="icon-arrows-corner" className={s.icon} />
              </Button>
            </div>{' '}
          </div>
        </div>
      </Container>
    </section>
  );
}
