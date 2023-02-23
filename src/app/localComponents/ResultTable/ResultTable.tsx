import { CategoriesOverview, CategoryOverviewInfo } from './CategoriesOverview';
import { ResultTableHeader } from './ResultTableHeader';

export type ResultTableProps = {};
export function ResultTable(props: ResultTableProps) {
  const categoryList: CategoryOverviewInfo[] = new Array(15).fill(0).map((_, i) => ({
    name: `Category ${i}`,
    planned: Math.random() * Math.pow(10, Math.floor(Math.random() * 10)),
    real: Math.random() * Math.pow(10, Math.floor(Math.random() * 10)),
  }));

  const { totalPlanned, totalReal } = categoryList.reduce(
    (acc, curr) => {
      return {
        totalPlanned: acc.totalPlanned + curr.planned,
        totalReal: acc.totalReal + curr.real,
      };
    },
    { totalPlanned: 0, totalReal: 0 }
  );

  return (
    <div className="flex flex-col overflow-hidden">
      <ResultTableHeader planned={totalPlanned} real={totalReal} />
      <CategoriesOverview categoryList={categoryList} />
    </div>
  );
}
