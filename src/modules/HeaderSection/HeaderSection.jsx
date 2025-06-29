'use client';

import Container from '@/shared/container/Container';
import s from './HeaderSection.module.scss';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants';
import Logo from '@/shared/Logo/Logo';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

export default function HeaderSection() {
  const { t, i18n } = useTranslation('header');
  const locale = i18n.language;
  const pathname = usePathname();

  const navLinks = [
    { hash: ROUTES.ABOUT, label: t('about') },
    { hash: ROUTES.SERVICES, label: t('services') },
    { hash: ROUTES.PORTFOLIO, label: t('portfolio') },
    { href: `/${ROUTES.Blog}`, label: t('blog') },
    { hash: ROUTES.CONTACT, label: t('contact') },
  ];

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Logo />
          <nav className={s.nav}>
            <ul className={s.listLink}>
              {navLinks.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <Link href={link.href} className={s.link}>
                      {link.label}
                    </Link>
                  ) : isHome ? (
                    <a href={`#${link.hash}`} className={s.link}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={`/${locale}/#${link.hash}`} className={s.link}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}
