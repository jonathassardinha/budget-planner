import { useRipple } from '@/lib/hooks/useRipple';
import { ClassList } from '@/lib/utils/ClassList';
import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

const ButtonVariantsClasses = {
  contained: 'bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600',
  outlined: 'bg-white text-gray-900 font-bold border-orange-500 border rounded-md',
  text: 'text-gray-900 rounded-md hover:bg-orange-100 font-bold bg-transparent',
} as const;

const ButtonSizeClasses = {
  small: 'text-sm py-1 px-3',
  medium: 'text-base py-2 px-6',
  large: 'text-lg py-4 px-6',
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof ButtonVariantsClasses;
  size?: keyof typeof ButtonSizeClasses;
  fullWidth?: boolean;
};

export function Button({
  variant = 'contained',
  size = 'medium',
  fullWidth,
  onClick,
  children,
  className,
  ...props
}: ButtonProps) {
  const { activateRipple, buttonRef, rippleRef, rippleStyle } = useRipple();

  const classList = new ClassList([
    ButtonVariantsClasses[variant],
    ButtonSizeClasses[size],
    'relative overflow-hidden transition-all',
    className || '',
  ]);
  classList.add('!w-full', !!fullWidth);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    activateRipple(event);

    onClick?.(event);
  };

  return (
    <button className={`w-fit ${classList}`} {...props} ref={buttonRef} onClick={handleClick}>
      {children}
      <span className={rippleStyle} ref={rippleRef} />
    </button>
  );
}
