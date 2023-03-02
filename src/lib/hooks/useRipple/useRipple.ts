import { MouseEventHandler, useRef } from 'react';
import styles from './useRipple.module.scss';

export function useRipple() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const animationId = useRef<NodeJS.Timeout>();

  const activateRipple: MouseEventHandler<HTMLButtonElement> = (event) => {
    const currentButton = buttonRef.current;
    const currentRipple = rippleRef.current;

    if (currentButton && currentRipple) {
      if (animationId.current) {
        clearTimeout(animationId.current);
        currentRipple.classList.remove(styles.rippleAnimation);
      }

      const diameter = Math.max(currentButton.clientWidth, currentButton.clientHeight);
      const radius = diameter / 2;

      const { x: buttonX, y: buttonY } = currentButton.getBoundingClientRect();

      currentRipple.style.width = currentRipple.style.height = `${diameter}px`;
      currentRipple.style.left = `${event.clientX - (buttonX + radius)}px`;
      currentRipple.style.top = `${event.clientY - (buttonY + radius)}px`;
      currentRipple.classList.add(styles.rippleAnimation);

      animationId.current = setTimeout(() => {
        currentRipple.classList.remove(styles.rippleAnimation);
        animationId.current = undefined;
      }, 400);
    }
  };

  return { rippleStyle: styles.ripple, buttonRef, rippleRef, activateRipple };
}
