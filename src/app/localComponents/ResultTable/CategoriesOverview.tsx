import { Button } from '@/lib/components/Button';
import { currencyFormatter } from '@/lib/utils/currencyFormatter';
import { baseRowClasses, baseRowWrapperClasses } from './ResultTable.utils';

export type CategoryOverviewInfo = {
  name: string;
  planned: number;
  real: number;
};

export type CategoriesOverviewProps = {
  categoryList: CategoryOverviewInfo[];
};

export function CategoriesOverview({ categoryList }: CategoriesOverviewProps) {
  return (
    <div className="mt-2 flex flex-col gap-0.5 overflow-auto">
      {categoryList.map(({ name, planned, real }) => {
        const diff = planned - real;
        const criticalClass = diff < 0 ? 'text-red-700' : '';

        const realValue = currencyFormatter(real);
        const plannedValue = currencyFormatter(planned);
        const diffValue = currencyFormatter(diff);

        return (
          <div key={name} className={`${baseRowWrapperClasses} !py-0 text-xs`}>
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
          </div>
        );
      })}
      <div className="grid place-items-center py-2">
        <Button variant="contained" size="small" fullWidth>
          Adicionar categoria
        </Button>
      </div>
    </div>
  );
}
