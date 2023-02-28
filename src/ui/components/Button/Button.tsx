import { ClassList } from '@/utils/ClassList';
import { ButtonHTMLAttributes } from 'react';

const ButtonVariantsClasses = {
  contained: 'bg-orange-500 text-white font-bold rounded-md',
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

export function Button({ variant = 'contained', size = 'medium', fullWidth, ...props }: ButtonProps) {
  const classList = new ClassList([ButtonVariantsClasses[variant], ButtonSizeClasses[size]]);

  classList.add('!w-full', !!fullWidth);

  console.debug(classList, fullWidth);

  return <button className={`w-fit ${classList}`} {...props}></button>;
}
