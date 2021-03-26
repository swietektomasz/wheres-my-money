import { Expense } from "../Expenses/expenses-data";

interface FeedProps {
  expenses: Expense[];
}

export function Feed({ expenses }: FeedProps) {
  return (
    <div>
      {expenses.map(({ id, amount, description }) => (
        <div key={id} className="flex flex-row justify-around border-2 border-gray-300 m-1 rounded-sm p-2">
          <div>{description}</div>
          <div>{amount}</div>
        </div>
      ))}
    </div>
  );
}
