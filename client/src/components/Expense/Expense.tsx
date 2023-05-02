import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import { TExpense } from "../../types";

interface ExpenseProps {
  expense: TExpense;
}

export const Expense = ({ expense }: ExpenseProps) => {
  const { amount, date, description, tags } = expense;

  return (
    <Card>
      <CardHeader>
        <Flex>
          <Heading size="md">{description}</Heading>
          <Spacer />
          <Text>{date}</Text>
        </Flex>
      </CardHeader>
      <CardBody>
        {tags.map(({ id, label }) => (
          <Tag key={id}>{label}</Tag>
        ))}
        <Text>{amount}</Text>
      </CardBody>
    </Card>
  );
};
