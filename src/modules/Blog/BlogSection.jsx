import { urlFor } from '@/lib/sanityClient';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/shared/Icon/Icon';
import s from './BlogSection.module.scss';
import Button from '@/shared/components/button/Button';
import { initServerI18n } from '@/i18n/utils/serverI18n';
export default async function BlogSection({ posts = [], locale }) {
  const { t } = await initServerI18n(locale, ['heroBlog']);
  if (!posts.length) return <p>Нет постов</p>;

  return (
    <section className={s.section} id="blog">
      <div className={s.blogContainer}>
        {posts.map((post) => (
          <div className={s.cardWrapper} key={post._id}>
            <article className={s.BlogIdContainer}>
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(400).url()}
                  alt={post.title[locale]}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                  className={s.image}
                />
              )}
              <h2 className={s.title}>{post.title[locale]}</h2>
              <p className={s.author}>{post.author}</p>
              <p className={s.data}>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-GB')
                  : '—'}
              </p>

              <Link href={`/${locale}/blog/${post.customId.current}`} passHref>
                <Button variant="variant5">
                  {t('readButton')}{' '}
                  <Icon iconName="icon-arrows-corner" className={s.icon} />
                </Button>
              </Link>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
