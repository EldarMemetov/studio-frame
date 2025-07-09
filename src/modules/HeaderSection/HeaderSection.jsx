'use client';

import Container from '@/shared/container/Container';
import s from './HeaderSection.module.scss';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants';
import Logo from '@/shared/Logo/Logo';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Icon from '@/shared/Icon/Icon';
import { useEffect, useState } from 'react';
import Button from '@/shared/components/button/Button';

export default function HeaderSection() {
  const { t, i18n } = useTranslation('header');
  const locale = i18n.language;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

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
      <div className={s.inner}>
        <div className={s.logoDesktop}>
          <Logo />
        </div>

        <div className={s.containerNav}>
          <div className={s.menuNavMobile}>
            <div className={s.logoMobile}>
              <Logo />
            </div>
            <div className={s.containerLogoString}>
              <div className={s.SwitcherMobile}>
                <LanguageSwitcher />
              </div>
              <button
                onClick={toggleMenu}
                className={s.menuToggle}
                aria-label="Menu toggle"
              >
                <Icon
                  iconName={isMenuOpen ? 'icon-close' : 'icon-open'}
                  className={s.icon}
                />
              </button>
            </div>
          </div>
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
        </div>
        <div className={s.SwitcherDesktop}>
          <LanguageSwitcher />
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${s.mobileModal} ${isMenuOpen ? s.open : ''}`}>
          <div className={s.containerModalButton}>
            <h2 className={s.titleModal}>{t('title')}</h2>
            <Link href="/#contact" passHref>
              <Button variant={'variant1'}>{t('button')}</Button>
            </Link>
          </div>
          <ul className={s.mobileMenu}>
            {navLinks.map((link, i) => (
              <li key={i}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className={s.linkMobile}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ) : isHome ? (
                  <a
                    href={`#${link.hash}`}
                    className={s.linkMobile}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={`/${locale}/#${link.hash}`}
                    className={s.linkMobile}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
