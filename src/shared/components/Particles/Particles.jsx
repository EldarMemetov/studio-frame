'use client';
import React, { useRef, useEffect } from 'react';
import s from './Particles.module.scss';

export default function Particles() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const imageRect = useRef(null);
  const canvasRect = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const imgWrapper = document.querySelector('.magic-planet');

    function updateSizes() {
      const bounds = canvas.parentElement.getBoundingClientRect();

      canvas.width = bounds.width * dpr;
      canvas.height = bounds.height * dpr;
      canvas.style.width = `${bounds.width}px`;
      canvas.style.height = `${bounds.height}px`;
      ctx.scale(dpr, dpr);

      canvasRect.current = canvas.getBoundingClientRect();
      if (imgWrapper) imageRect.current = imgWrapper.getBoundingClientRect();
    }

    updateSizes();
    window.addEventListener('resize', updateSizes);
    window.addEventListener('scroll', updateSizes);
    window.addEventListener('orientationchange', updateSizes);

    let animationId;
    const animate = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // spawn new particles if below limit
      if (particles.current.length < 150) {
        const x0 = width * 0.2;
        const xRange = width * 0.6;
        particles.current.push({
          x: x0 + Math.random() * xRange,
          y: -5,
          vx: (Math.random() - 0.5) * 0.003,
          vy: 0.008 + Math.random() * 0.004,
          size: 0.7 + Math.random() * 1.0,
          alpha: 0.1 + Math.random() * 0.2,
        });
      }

      particles.current.forEach((p, i) => {
        p.vy += 0.00001;
        if (imageRect.current && canvasRect.current) {
          const cx =
            imageRect.current.left -
            canvasRect.current.left +
            imageRect.current.width / 2;
          const cy =
            imageRect.current.top -
            canvasRect.current.top +
            imageRect.current.height / 2;
          const dx = cx - p.x;
          const dy = cy - p.y;
          const dist = Math.hypot(dx, dy);
          const force = Math.min(0.0025, 15 / (dist * dist));
          p.vx += force * dx;
          p.vy += force * dy;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.y > height + 20) {
          particles.current.splice(i, 1);
          return;
        }

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateSizes);
      window.removeEventListener('scroll', updateSizes);
      window.removeEventListener('orientationchange', updateSizes);
    };
  }, []);

  return <canvas ref={canvasRef} className={s.particleCanvas} />;
}
