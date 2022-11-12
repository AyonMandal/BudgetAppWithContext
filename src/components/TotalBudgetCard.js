import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../context/BudgetContext";

const TotalBudgetCard = (props) => {
  const { expenses, budgets } = useBudgets();
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const maxedAmount = budgets.reduce((total, budget) => total + budget.max, 0);
  return (
    <BudgetCard
      name="Total"
      amount={totalAmount}
      maxAmount={maxedAmount}
      id="TOTAL"
      hideButtonsFromCard={true}
      {...props}
    />
  );
};

export default TotalBudgetCard;
