import Container from '@/shared/container/Container';
import s from './HeaderSection.module.scss';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants';

export default function HeaderSection() {
  const navLinks = [
    { href: `#${ROUTES.ABOUT}`, label: 'Про нас' },
    { href: `#${ROUTES.SERVICES}`, label: 'Послуги' },
    { href: `#${ROUTES.PORTFOLIO}`, label: 'Портфоліо' },
    { href: '/blog', label: 'Блог' },
    { href: `#${ROUTES.CONTACT}`, label: 'Контакти' },
  ];

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <div className={s.logo}>
            <Link href="/">MySite</Link>
          </div>
          <nav className={s.nav}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
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
