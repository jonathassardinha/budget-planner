'use client';

import { Tab } from '@headlessui/react';
import { ReactNode } from 'react';
import { Results } from './Results';
import { ResultTable } from './ResultTable';

function StyledTab(props: { children: ReactNode }) {
  return (
    <Tab
      {...props}
      className="flex-1 rounded-lg py-2 px-4 font-bold outline-none transition-all duration-300 ui-selected:bg-white ui-selected:text-orange-500 ui-selected:shadow-lg"
    />
  );
}

export function Tabs() {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="mb-4 flex gap-4 rounded-xl bg-gray-100 p-2">
        <StyledTab>Geral</StyledTab>
        <StyledTab>Categorias</StyledTab>
      </Tab.List>
      <Tab.Panels className="flex flex-1 flex-col overflow-hidden">
        <Tab.Panel className="flex flex-col overflow-hidden">
          <div className="flex h-full flex-col justify-between gap-4 overflow-auto">
            <Results title="Guardado esse mês" expected={0} real={-100} />
            <Results title="Entradas" expected={0} real={100} />
            <Results title="Saídas" expected={0} real={100} />
          </div>
        </Tab.Panel>
        <Tab.Panel className="flex flex-col overflow-hidden">
          <ResultTable />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
