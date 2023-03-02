'use client';

import { Route } from 'next';
import { usePathname } from 'next/navigation';

const routeToHeaderTitleMap: Record<Route, string> = {
  '/': 'Budget Planner',
};

export default function Header() {
  const pathname = usePathname() as Route;

  return (
    <>
      <header className="flex justify-center border-b border-gray-500 py-3 text-lg font-bold uppercase">
        {routeToHeaderTitleMap[pathname]}
      </header>
    </>
  );
}
