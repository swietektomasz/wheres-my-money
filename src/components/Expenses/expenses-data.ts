export const expensesData = [
  { id: 1, description: "food", amount: 300 },
  { id: 2, description: "clothes", amount: 500 },
  { id: 3, description: "computer parts", amount: 1300 },
  { id: 4, description: "netflix", amount: 10 },
  { id: 5, description: "games", amount: 50 },
];

export type Expense = {
  id: number;
  description: string;
  amount: number;
};
