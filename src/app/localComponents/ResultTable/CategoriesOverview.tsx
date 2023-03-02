'use client';

import { Button } from '@/lib/components/Button';
import { Input } from '@/lib/components/Input';
import { Modal } from '@/lib/components/Modal';
import { currencyFormatter } from '@/lib/utils/currencyFormatter';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { baseRowClasses, baseRowWrapperClasses } from './ResultTable.utils';

export type CategoryOverviewInfo = {
  id: string;
  name: string;
  planned: number;
  real: number;
};

export type CategoriesOverviewProps = {
  categoryList: CategoryOverviewInfo[];
};

export function CategoriesOverview({ categoryList }: CategoriesOverviewProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-col gap-0.5 overflow-auto">
        {categoryList.map(({ id, name, planned, real }) => {
          const diff = planned - real;
          const criticalClass = diff < 0 ? 'text-red-700' : '';

          const realValue = currencyFormatter(real);
          const plannedValue = currencyFormatter(planned);
          const diffValue = currencyFormatter(diff);

          return (
            <Link href={`/categories/${id}`} key={id} className={`${baseRowWrapperClasses} !py-0 text-xs`}>
              <span className="bg-red-50 p-1 py-2">{name}</span>
              <span title={plannedValue} className={`${baseRowClasses} bg-red-50 py-2 `}>
                {plannedValue}
              </span>
              <span title={realValue} className={`${baseRowClasses} bg-gray-100 py-2 `}>
                {realValue}
              </span>
              <span title={diffValue} className={`${baseRowClasses} bg-gray-100 py-2 ${criticalClass}`}>
                {diffValue}
              </span>
            </Link>
          );
        })}
        <div className="grid place-items-center py-2">
          <Button variant="contained" size="small" fullWidth onClick={() => setModalOpen(true)}>
            Adicionar categoria
          </Button>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Dialog.Title className="text-left text-lg font-bold leading-6 text-gray-900">Adicionar categoria</Dialog.Title>
        <Dialog.Description className="mt-1 text-left text-sm text-gray-500">
          Escolha um nome para sua nova categoria
        </Dialog.Description>

        <div className="mt-3 flex flex-col gap-3">
          <Input label="Categoria" name="name" placeholder="Nome da categoria" />
          <Button className="self-end">Criar</Button>
        </div>
      </Modal>
    </>
  );
}
