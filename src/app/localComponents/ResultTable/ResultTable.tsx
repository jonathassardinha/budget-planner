import { Categories, CategoryInfo } from "./Categories";
import { baseRowClasses, baseRowWrapperClasses } from "./ResultTable.utils";
import { ResultTableHeader } from "./ResultTableHeader";

export type ResultTableProps = {};
export function ResultTable(props: ResultTableProps) {
  const categoryList: CategoryInfo[] = [
    {
      name: "Category 1",
      planned: 1500000,
      real: 200,
    },
    {
      name: "Category 2",
      planned: 1500000,
      real: 200,
    },
    {
      name: "Category 3",
      planned: 1500000,
      real: 200,
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <ResultTableHeader planned={0} real={3620} />
      <Categories categoryList={categoryList} />
    </div>
  );
}
