import Container from '@/shared/container/Container';
import s from './ReviewsCarousel.module.scss';
import Image from 'next/image';
import { initServerI18n } from '@/i18n/utils/serverI18n';

export default async function ReviewsCarousel({ locale }) {
  const { t } = await initServerI18n(locale, ['reviews']);

  const sectionTitle = t('sectionTitle');
  const mainTitle = t('mainTitle');
  const reviews = t('reviews', { returnObjects: true });

  return (
    <section className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <Image
            src="/image/reviews.png"
            alt="reviews"
            width={593}
            height={384}
            className={s.reviewsImg}
            priority
          />
          <div className={s.stepsContainer}>
            <span className={s.spanInfo}>{sectionTitle}</span>
          </div>

          <h2 className={s.title}>{mainTitle}</h2>

          <ul className={s.reviewsList}>
            {reviews.map((review, index) => (
              <li key={index} className={s.reviewItem}>
                <p className={s.reviewText}>{review.text}</p>
                <div className={s.reviewer}>
                  <div className={s.avatar}>
                    <Image
                      src={review.photo}
                      alt={`${review.firstName} ${review.lastName}`}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className={s.reviewerName}>
                    <span className={s.firstName}>{review.firstName}</span>
                    <span className={s.lastName}>{review.lastName}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
