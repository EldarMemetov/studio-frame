'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;

    if (hash) {
      const scrollTo = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      setTimeout(scrollTo, 100);
    }
  }, [pathname]);

  return children;
}
