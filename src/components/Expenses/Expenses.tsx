import { Budget } from "../Budget";
import { Feed } from "../Feed";
import { expensesData } from "./expenses-data";

export function Expenses() {
  return (
    <div className="expenses">
      <div className="expenses-budget">
        <Budget />
      </div>
      <div className="expenses-feed">
        <Feed expenses={expensesData} />
      </div>
    </div>
  );
}
