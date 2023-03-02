export const IconButtonSizeClasses = {
  small: 'p-1',
  medium: 'p-2',
  large: 'p-4',
};

export type IconButtonSizes = keyof typeof IconButtonSizeClasses;

export const IconSizes: Record<IconButtonSizes, { width: number; height: number }> = {
  small: { height: 18, width: 18 },
  medium: { height: 24, width: 24 },
  large: { height: 28, width: 28 },
};

export type IconName = 'ArrowRight' | 'Cancel';

export type IconButtonProps = {
  icon: IconName;
  onClick?: () => void;
  className?: string;
  size?: keyof typeof IconButtonSizeClasses;
};
