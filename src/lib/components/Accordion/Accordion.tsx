'use client';

import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';

export type AccordionProps = {
  summary?: ReactNode;
  detail?: ReactNode;
};

export function Accordion({ summary, detail }: AccordionProps) {
  return (
    <div>
      <Disclosure>
        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
          {summary}
        </Disclosure.Button>
        <Disclosure.Panel>{detail}</Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
