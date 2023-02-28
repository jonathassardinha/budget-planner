import { currencyFormatter } from '@/lib/utils/currencyFormatter';
import { baseRowClasses, baseRowWrapperClasses } from './ResultTable.utils';

export type ResultTableHeaderProps = {
  planned: number;
  real: number;
};

export function ResultTableHeader({ planned, real }: ResultTableHeaderProps) {
  const diff = planned - real;
  const criticalClass = diff < 0 ? 'text-red-700' : '';

  return (
    <div className="flex flex-col">
      <div className={baseRowWrapperClasses}>
        <div className="pl-1" />
        <span className={baseRowClasses}>Planejado</span>
        <span className={baseRowClasses}>Real</span>
        <span className={baseRowClasses}>Diferença</span>
      </div>
      <div className={`${baseRowWrapperClasses} !py-0 text-xs italic text-gray-500`}>
        <span className="px-1">Total</span>
        <span className={baseRowClasses}>{currencyFormatter(planned)}</span>
        <span className={baseRowClasses}>{currencyFormatter(real)}</span>
        <span className={`${baseRowClasses} ${criticalClass}`}>{currencyFormatter(diff)}</span>
      </div>
    </div>
  );
}
