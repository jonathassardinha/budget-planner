import { currencyFormatter } from "@/utils/currencyFormatter";
import { baseRowClasses, baseRowWrapperClasses } from "./ResultTable.utils";

export type CategoryInfo = {
  name: string;
  planned: number;
  real: number;
};

export type CategoriesProps = {
  categoryList: CategoryInfo[];
};

export function Categories({ categoryList }: CategoriesProps) {
  return (
    <div className="overflow-auto mt-2 flex flex-col gap-0.5">
      {categoryList.map(({ name, planned, real }) => {
        const diff = planned - real;
        const criticalClass = diff < 0 ? "text-red-700" : "";

        const realValue = currencyFormatter.format(real);
        const plannedValue = currencyFormatter.format(planned);
        const diffValue = currencyFormatter.format(diff);

        return (
          <div key="name" className={`${baseRowWrapperClasses} py-0 text-xs`}>
            <span className="py-2 bg-red-50 p-1">{name}</span>
            <span
              title={plannedValue}
              className={`${baseRowClasses} py-2 bg-red-50 `}
            >
              {plannedValue}
            </span>
            <span
              title={realValue}
              className={`${baseRowClasses} py-2 bg-gray-100 `}
            >
              {realValue}
            </span>
            <span
              title={diffValue}
              className={`${baseRowClasses} py-2 bg-gray-100 ${criticalClass}`}
            >
              {diffValue}
            </span>
          </div>
        );
      })}
    </div>
  );
}
