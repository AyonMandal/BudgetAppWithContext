import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../context/BudgetContext";

const UncategorizedBudgetCard = (props) => {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses("UNCATEGORIZED_EXPENSE").reduce(
    (total, expense) => total + expense.amount,
    0
  );
  return (
    <BudgetCard
      name="Uncategorized"
      amount={amount}
      id="UNCATEGORIZED_EXPENSE"
      {...props}
    />
  );
};

export default UncategorizedBudgetCard;
