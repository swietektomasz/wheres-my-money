import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { TExpense } from "../../types";
import { Expense } from "../../components/Expense/Expense";

const EXPENSES: TExpense[] = [
  {
    id: 1,
    amount: 50,
    date: new Date().toLocaleDateString("en-GB"),
    description: "burgers with wife",
    tags: [{ id: 1, label: "food" }],
  },
  {
    id: 2,
    amount: 24,
    date: new Date().toLocaleDateString("en-GB"),
    description: "burgers with friends",
    tags: [{ id: 1, label: "food" }],
  },
  {
    id: 3,
    amount: 88,
    date: new Date().toLocaleDateString("en-GB"),
    description: "burgers with someone else",
    tags: [{ id: 1, label: "food" }],
  },
  {
    id: 4,
    amount: 69,
    date: new Date().toLocaleDateString("en-GB"),
    description: "just burgers",
    tags: [{ id: 1, label: "food" }],
  },
];
export const Main = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  return (
    <Container>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </Container>
  );
};
