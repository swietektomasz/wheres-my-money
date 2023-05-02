export type TExpense = {
  id: number;
  amount: number;
  date: string;
  description: string;
  tags: Array<TTag>;
};

export type TTag = {
  id: number;
  label: string;
};
