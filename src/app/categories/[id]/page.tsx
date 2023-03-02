import { PageProps } from '.next/types/app/page';

export default function CategoryDetail({ params }: PageProps) {
  const { id } = params as { id: string };
  return <div>{id}</div>;
}

/*

+----------------------------------------------------+
| Category: [Groceries]                               |
|                                                    |
| Goal budget: [$500]                                 |
|                                                    |
| Monthly Expenses:                                  |
| - January:                                           |
|   - Week 1: [$120]                                    |
|   - Week 2: [$150]                                    |
|   - Week 3: [$110]                                    |
|   - Week 4: [$120]                                    |
|   Total expenses: [$500]                               |
|   Remaining budget: [$0]                               |
|                                                    |
| - February:                                          |
|   - Week 1: [$110]                                    |
|   - Week 2: [$140]                                    |
|   - Week 3: [$100]                                    |
|   - Week 4: [$130]                                    |
|   Total expenses: [$480]                               |
|   Remaining budget: [$20]                              |
|                                                    |
| [Add Expense] [Edit Category] [Delete]              |
+----------------------------------------------------+


*/
