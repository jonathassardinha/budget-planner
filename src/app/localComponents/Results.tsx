import { currencyFormatter } from '@/lib/utils/currencyFormatter';

export type ResultsProps = {
  title: string;
  expected: number;
  real: number;
};

export function Results({ title, expected, real }: ResultsProps) {
  return (
    <div className="flex flex-col text-lg">
      <p className="mb-2 self-center text-xl font-medium uppercase">{title}</p>
      <div className="mb-2 grid grid-cols-2 place-items-center">
        <span className="font-medium text-gray-500">Planejado</span>
        <span className="text-gray-500">{currencyFormatter(expected)}</span>
      </div>
      <div className=" grid grid-cols-2 place-items-center">
        <span className="font-medium">Real</span>
        <span>{currencyFormatter(real)}</span>
      </div>
    </div>
  );
}
