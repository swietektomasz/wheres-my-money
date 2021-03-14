import { Budget } from "../Budget";

import "./Expenses.css";

export function Expenses() {
  return (
    <div className="expenses">
      <div className="expenses-budget">
        <Budget />
      </div>
      <div className="expenses-feed">Actual expenses table</div>
    </div>
  );
}
