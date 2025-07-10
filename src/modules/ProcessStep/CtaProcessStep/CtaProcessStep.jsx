'use client';
import Link from 'next/link';
import Icon from '@/shared/Icon/Icon';
import s from './CtaProcessStep.module.scss';

export default function CTAProcessStep({ title, text }) {
  return (
    <li className={s.containerButton}>
      <h3 className={s.buttonTitle}>{title}</h3>
      <div className={s.containerItem}>
        <p className={s.buttonInfo}>{text}</p>
        <Link href="/#contact" passHref>
          <button className={s.button} type="button">
            <Icon iconName="icon-arrows-right" className={s.icon} />
          </button>
        </Link>
      </div>
    </li>
  );
}
