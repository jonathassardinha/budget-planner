import { useId } from 'react';

export type InputProps = { label: string; name: string; placeholder?: string };

export function Input({ name, label, placeholder }: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-left text-sm font-bold text-gray-900">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className="rounded-md border border-gray-300 p-2 text-sm outline-none outline-offset-0 transition-all focus:border-transparent focus:outline-2 focus:outline-orange-500 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-orange-500"
        placeholder={placeholder ?? label}
      />
    </div>
  );
}
