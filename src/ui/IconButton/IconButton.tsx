'use client';

import Image from 'next/image';
import { MouseEventHandler, useRef } from 'react';
import styles from './IconButton.module.scss';

export type IconName = 'ArrowRight';

export type IconButtonProps = {
  icon: IconName;
  onClick?: () => void;
};

export function IconButton({ icon, onClick }: IconButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const animationId = useRef<NodeJS.Timeout>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const currentButton = buttonRef.current;
    const currentRipple = rippleRef.current;

    if (currentButton && currentRipple) {
      if (animationId.current) {
        clearTimeout(animationId.current);
        currentRipple.classList.remove(styles.rippleAnimation);
      }

      const diameter = Math.max(currentButton.clientWidth, currentButton.clientHeight);
      const radius = diameter / 2;

      currentRipple.style.width = currentRipple.style.height = `${diameter}px`;
      currentRipple.style.left = `${event.clientX - (currentButton.offsetLeft + radius)}px`;
      currentRipple.style.top = `${event.clientY - (currentButton.offsetTop + radius)}px`;
      currentRipple.classList.add(styles.rippleAnimation);

      animationId.current = setTimeout(() => {
        currentRipple.classList.remove(styles.rippleAnimation);
        animationId.current = undefined;
      }, 600);
    }

    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className="relative overflow-hidden rounded-full p-2 hover:bg-gray-100">
      <Image alt="svg" src={`/icons/${icon}.svg`} width={24} height={24} />
      <span className={styles.ripple} ref={rippleRef} />
    </button>
  );
}
