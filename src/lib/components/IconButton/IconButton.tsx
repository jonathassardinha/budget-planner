'use client';

import { useRipple } from '@/lib/hooks/useRipple';
import Image from 'next/image';
import { MouseEventHandler, useRef } from 'react';
import styles from './IconButton.module.scss';

export type IconName = 'ArrowRight';

export type IconButtonProps = {
  icon: IconName;
  onClick?: () => void;
};

export function IconButton({ icon, onClick }: IconButtonProps) {
  const { activateRipple, buttonRef, rippleRef, rippleStyle } = useRipple();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    activateRipple(event);

    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className="relative overflow-hidden rounded-full p-2 hover:bg-gray-100">
      <Image alt="svg" src={`/icons/${icon}.svg`} width={24} height={24} />
      <span className={rippleStyle} ref={rippleRef} />
    </button>
  );
}
