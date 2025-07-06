'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import s from './Logo.module.scss';
import { useParams } from 'next/navigation';

const localeLabels = {
  en: 'Home page Framevix ',
  ua: 'Головна сторінка Framevix ',
  de: 'Startseite Framevix ',
};

const Logo = ({ variant = 'header' }) => {
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <Link
      href={`/${locale}`}
      className={clsx(s.logoContainer, s[variant])}
      aria-label={localeLabels[locale] || localeLabels.en}
    >
      <Image
        src="/image/logo.png"
        alt="Framevix  logo"
        width={40}
        height={40}
        className={s.logo}
        priority
      />
      <h2 className={s.logoText}>DevMyst</h2>
    </Link>
  );
};

export default Logo;
