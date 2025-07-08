// CreateCustomPage.tsx
import Container from '@/shared/container/Container';
import { initServerI18n } from '@/i18n/utils/serverI18n';
import CreateCustomList from './CreateCustomList/CreateCustomList';
import s from './CreateCustomPage.module.scss';

export default async function CreateCustomPage({ locale }) {
  const { t } = await initServerI18n(locale, ['createCustomPage']);
  const items = t('items', { returnObjects: true }) || [];

  return (
    <section className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <div className={s.aboutContainer}>
            <span className={s.spanInfo}>{t('sectionTitle')}</span>
          </div>
          <h2 className={s.title}>{t('mainTitle')}</h2>
          <CreateCustomList items={items} />
        </div>
      </Container>
    </section>
  );
}
