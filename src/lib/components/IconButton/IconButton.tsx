'use client';

import { useRipple } from '@/lib/hooks/useRipple';
import { ClassList } from '@/lib/utils/ClassList';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { IconButtonProps, IconButtonSizeClasses, IconSizes } from './IconButton.utils';

export function IconButton({ icon, onClick, className, size = 'medium' }: IconButtonProps) {
  const { activateRipple, buttonRef, rippleRef, rippleStyle } = useRipple();
  const classList = new ClassList([
    className || '',
    IconButtonSizeClasses[size],
    'relative overflow-hidden rounded-full hover:bg-gray-100',
  ]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    activateRipple(event);

    onClick?.();
  };

  return (
    <button onClick={handleClick} ref={buttonRef} className={`${classList}`}>
      <Image alt="svg" src={`/icons/${icon}.svg`} {...IconSizes[size]} />
      <span className={rippleStyle} ref={rippleRef} />
    </button>
  );
}
